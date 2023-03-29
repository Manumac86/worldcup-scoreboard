import React, { useState } from 'react'
import StartForm from '../StartForm/StartForm'
import Summary from '../Summary/Summary'
import Scores from '../Scores/Scores'
import { sortGamesByTotalScore } from '../../utils/sorters'

import { Container } from './styles'

const initialTeams = {
  homeTeam: {
    name: '',
    score: 0,
  },
  awayTeam: {
    name: '',
    score: 0,
  },
  createdAt: null,
}

function Scoreboard() {
  const [gamesSummary, setGamesSummary] = useState([])
  const [teams, setTeams] = useState(initialTeams)
  const [step, setStep] = useState(0)

  const handleFinishGame = (teamsData) => {
    setTeams(teamsData)
    setGamesSummary(sortGamesByTotalScore([...gamesSummary, teamsData]))
    setStep(0)
  }

  const handleNewChampionship = () => {
    setTeams(initialTeams)
    setGamesSummary(sortGamesByTotalScore([]))
    setStep(0)
  }

  const onSubmit = (values) => {
    setTeams({
      homeTeam: {
        name: values.homeTeamName,
        score: 0,
      },
      awayTeam: {
        name: values.awayTeamName,
        score: 0,
      },
      createdAt: new Date(),
    })
    setStep(1)
  }

  return (
    <>
      <Container>
        {step === 0 && <StartForm onSubmit={onSubmit} />}
        {step === 1 && <Scores teams={teams} onFinishGame={handleFinishGame} />}
      </Container>
      <Summary
        summary={gamesSummary}
        startNewChampionship={handleNewChampionship}
      />
    </>
  )
}

export default Scoreboard
