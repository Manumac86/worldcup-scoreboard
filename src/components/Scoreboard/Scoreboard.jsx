import React, { useState } from 'react'
import StartForm from '../StartForm/StartForm'
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
  const [teams, setTeams] = useState(initialTeams)

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
  }

  return (
    <>
      <Container>
        <StartForm onSubmit={onSubmit} />
      </Container>
    </>
  )
}

export default Scoreboard
