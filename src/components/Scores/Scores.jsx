import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, InputNumber, SectionContainer } from './styles'
import { Button } from '../styles'

function Scores({ teams, onFinishGame }) {
  const [homeScore, setHomeScore] = useState(teams.homeTeam.score)
  const [awayScore, setAwayScore] = useState(teams.awayTeam.score)

  const handleFinishGame = () => {
    onFinishGame({
      homeTeam: {
        ...teams.homeTeam,
        score: homeScore,
      },
      awayTeam: {
        ...teams.awayTeam,
        score: awayScore,
      },
      createdAt: new Date(),
    })
  }

  return (
    <SectionContainer>
      <Container>
        <InputNumber
          addonBefore={teams?.homeTeam.name || 'Home Team'}
          controls={false}
          min={0}
          size='large'
          value={homeScore}
          onChange={setHomeScore}
        />
        <InputNumber
          addonAfter={teams?.awayTeam.name || 'Away Team'}
          controls={false}
          min={0}
          size='large'
          value={awayScore}
          onChange={setAwayScore}
        />
      </Container>
      <Button type='primary' onClick={handleFinishGame}>
        Finish Game
      </Button>
    </SectionContainer>
  )
}

Scores.propTypes = {
  teams: PropTypes.objectOf(Object).isRequired,
}

export default Scores
