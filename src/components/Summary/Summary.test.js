import { fireEvent, render, screen } from '@testing-library/react'

import Summary from './Summary'

describe('<Summary />', () => {
  test('Should render component', () => {
    const gamesSummary = [
      {
        homeTeam: { name: 'Uruguay', score: 6 },
        awayTeam: { name: 'Italy', score: 6 },
        createdAt: '2023-03-29T08:22:05.452Z',
      },
      {
        homeTeam: { name: 'Spain', score: 10 },
        awayTeam: { name: 'Brazil', score: 2 },
        createdAt: '2023-03-29T08:21:31.772Z',
      },
      {
        homeTeam: { name: 'Mexico', score: 0 },
        awayTeam: { name: 'Canada', score: 5 },
        createdAt: '2023-03-29T08:21:12.760Z',
      },
      {
        homeTeam: { name: 'Argentina', score: 3 },
        awayTeam: { name: 'Australia', score: 1 },
        createdAt: '2023-03-29T08:22:17.538Z',
      },
      {
        homeTeam: { name: 'Germany', score: 2 },
        awayTeam: { name: 'France', score: 2 },
        createdAt: '2023-03-29T08:21:51.020Z',
      },
    ]

    const handler = jest.fn()

    let { container } = render(
      <Summary summary={gamesSummary} startNewChampionship={handler} />
    )

    expect(container).toBeInTheDocument()

    const button = screen.getByRole('button')
    fireEvent.click(button, () => {
      expect(handler).toHaveBeenCalledTimes(1)
    })
  })
})
