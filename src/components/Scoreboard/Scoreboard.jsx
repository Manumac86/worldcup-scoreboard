import React, { useState } from 'react'
import StartForm from '../StartForm/StartForm'
import { Container } from './styles'
import { sortGamesByTotalScore } from '../../utils/sorters'
import Scores from '../Scores/Scores'

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
    </>
  )
}

export default Scoreboard
