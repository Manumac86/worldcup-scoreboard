import { queryByAttribute, render, screen } from '@testing-library/react'
import Scoreboard from './Scoreboard'

const getById = queryByAttribute.bind(null, 'id')

describe('Scoreboard', () => {
  test('It renders without crashing', () => {
    render(<Scoreboard />)
  })

  test('It renders Form and Start button', () => {
    const view = render(<Scoreboard />)
    const inputHomeTeam = getById(view.container, 'startForm_homeTeamName')
    expect(inputHomeTeam).toBeInTheDocument()

    const inputAwayTeam = getById(view.container, 'startForm_awayTeamName')
    expect(inputAwayTeam).toBeInTheDocument()

    const [buttonStart] = screen.getAllByRole('button')
    expect(buttonStart).toBeInTheDocument()
  })
})
