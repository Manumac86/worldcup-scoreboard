import { sortGamesByTotalScore } from './sorters'

describe('sortGamesByTotalScore: Should order games by total score and date added to system', function () {
  test('Case 1:', () => {
    let games1 = [
      {
        homeTeam: {
          name: 'Mexico',
          score: 0,
        },
        awayTeam: {
          name: 'Canada',
          score: 5,
        },
        createdAt: '2023-03-29T08:21:12.760Z',
      },
      {
        homeTeam: {
          name: 'Spain',
          score: 10,
        },
        awayTeam: {
          name: 'Brazil',
          score: 2,
        },
        createdAt: '2023-03-29T08:21:31.772Z',
      },
      {
        homeTeam: {
          name: 'Germany',
          score: 2,
        },
        awayTeam: {
          name: 'France',
          score: 2,
        },
        createdAt: '2023-03-29T08:21:51.020Z',
      },
      {
        homeTeam: {
          name: 'Uruguay',
          score: 6,
        },
        awayTeam: {
          name: 'Italy',
          score: 6,
        },
        createdAt: '2023-03-29T08:22:05.452Z',
      },
      {
        homeTeam: {
          name: 'Argentina',
          score: 3,
        },
        awayTeam: {
          name: 'Australia',
          score: 1,
        },
        createdAt: '2023-03-29T08:22:17.538Z',
      },
    ]
    let expected1 = [
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
    let actual = sortGamesByTotalScore(games1)
    expect(actual).toEqual(expected1)
  })

  test('Case2', () => {
    let games2 = [
      {
        homeTeam: {
          name: 'Spain',
          score: 2,
        },
        awayTeam: {
          name: 'Brazil',
          score: 2,
        },
        createdAt: '2023-03-29T08:21:31.772Z',
      },
      {
        homeTeam: {
          name: 'Germany',
          score: 2,
        },
        awayTeam: {
          name: 'France',
          score: 2,
        },
        createdAt: '2023-03-29T08:21:51.020Z',
      },
      {
        homeTeam: {
          name: 'Argentina',
          score: 3,
        },
        awayTeam: {
          name: 'Australia',
          score: 1,
        },
        createdAt: '2023-03-29T08:22:17.538Z',
      },
    ]
    let expected2 = [
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
      {
        homeTeam: { name: 'Spain', score: 2 },
        awayTeam: { name: 'Brazil', score: 2 },
        createdAt: '2023-03-29T08:21:31.772Z',
      },
    ]

    let actual2 = sortGamesByTotalScore(games2)
    expect(actual2).toEqual(expected2)
  })
})
