import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import StartForm from './StartForm'

const onSubmit = jest.fn()

describe('<StartForm />', () => {
  test('It renders without crashing', () => {
    render(<StartForm onSubmit={onSubmit} />)
  })

  test('Form can be filled and submitted', async () => {
    const handler = jest.fn(() => Promise.resolve())
    render(<StartForm onSubmit={handler} />)

    fireEvent.change(screen.getByLabelText(/Home Team/i), {
      target: { value: 'home team' },
    })
    fireEvent.change(screen.getByLabelText(/Away Team/i), {
      target: { value: 'away team' },
    })

    const homeTeamInput = screen.getByDisplayValue('home team')
    const awayTeamInput = screen.getByDisplayValue('away team')
    expect(homeTeamInput).toBeInTheDocument()
    expect(awayTeamInput).toBeInTheDocument()

    const startButton = screen.getByText('Start Game')
    await act(async () => {
      await startButton.click()
    })
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toBeCalledWith({
      homeTeamName: 'home team',
      awayTeamName: 'away team',
    })
  })

  test('Form error message is shown with no team names', async () => {
    const handler = jest.fn(() => Promise.resolve())
    render(<StartForm onSubmit={handler} />)

    const startButton = screen.getByRole('button')
    expect(startButton).toBeDisabled()
  })

  test('Form error message is shown with 1 team name', async () => {
    const handler = jest.fn(() => Promise.resolve())
    render(<StartForm onSubmit={handler} />)
    fireEvent.change(screen.getByLabelText(/Home Team/i), {
      target: { value: 'home team' },
    })
    fireEvent.focus(screen.getByLabelText(/Away Team/i))
    fireEvent.change(screen.getByLabelText(/Away Team/i), {
      target: { value: '' },
    })
    fireEvent.blur(screen.getByLabelText(/Away Team/i))

    const startButton = await screen.findByRole('button')
    expect(startButton).toBeDisabled()

    const errorAlertAway = await screen.findByRole('alert')
    expect(errorAlertAway).toBeInTheDocument()
    expect(errorAlertAway.childNodes[0].innerHTML).toBe(
      'Please insert Away Team Name'
    )
  })
})
