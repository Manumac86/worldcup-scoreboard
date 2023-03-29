import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  test('renders without crashing', () => {
    render(<App />)
  })

  test('renders title', () => {
    render(<App />)
    const title = screen.getByText(/Worldcup ScoreBoard/i)
    expect(title).toBeInTheDocument()
  })

  test('renders scoreboard inputs and start button', () => {
    render(<App />)
    const inputHomeTeam = screen.getByLabelText(/Home Team/i)
    const inputAwayTeam = screen.getByLabelText(/Away Team/i)
    const startButton = screen.getByRole('button')

    expect(inputHomeTeam).toBeInTheDocument()
    expect(inputAwayTeam).toBeInTheDocument()
    expect(startButton).toBeInTheDocument()
  })
})
