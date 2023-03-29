import { fireEvent, render, screen } from '@testing-library/react'
import Scores from './Scores'

describe('<Scores />', () => {
  const teams = {
    homeTeam: {
      name: 'Brazil',
      score: 0,
    },
    awayTeam: {
      name: 'Argentina',
      score: 0,
    },
    createdAt: new Date(),
  }
  const handler = jest.fn()

  test('It should render component', () => {
    let { container } = render(<Scores teams={teams} onFinishGame={handler} />)
    expect(container).toBeInTheDocument()
  })

  test('It should allow to change scores', () => {
    render(<Scores teams={teams} onFinishGame={handler} />)
    const [homeTeamInput, awayTeamInput] = screen.getAllByRole('spinbutton')

    expect(homeTeamInput.value).toBe('0')
    expect(awayTeamInput.value).toBe('0')

    fireEvent.change(homeTeamInput, { target: { value: 3 } })
    expect(homeTeamInput.value).toBe('3')

    fireEvent.change(awayTeamInput, { target: { value: 2 } })
    expect(awayTeamInput.value).toBe('2')
  })

  test('It should fire handler just once with default values', () => {
    const defaultValues = {
      homeTeam: {
        name: 'Brazil',
        score: 0,
      },
      awayTeam: {
        name: 'Argentina',
        score: 0,
      },
      createdAt: null,
    }
    render(<Scores teams={defaultValues} onFinishGame={handler} />)
    const [finishButton] = screen.getAllByRole('button')

    fireEvent.click(finishButton)
    const [lastCall] = handler.mock.lastCall

    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith({
      ...teams,
      createdAt: lastCall.createdAt,
    })
  })

  test('It should fire handler just once with the right values', () => {
    render(<Scores teams={teams} onFinishGame={handler} />)
    const [homeTeamInput, awayTeamInput] = screen.getAllByRole('spinbutton')
    const [finishButton] = screen.getAllByRole('button')

    fireEvent.change(homeTeamInput, { target: { value: 3 } })
    fireEvent.change(awayTeamInput, { target: { value: 2 } })
    fireEvent.click(finishButton)
    const [lastCall] = handler.mock.lastCall
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith({
      homeTeam: {
        ...teams.homeTeam,
        score: 3,
      },
      awayTeam: {
        ...teams.awayTeam,
        score: 2,
      },
      createdAt: lastCall.createdAt,
    })
  })
})
