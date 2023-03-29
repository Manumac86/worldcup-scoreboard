export function sortGamesByTotalScore(games) {
  return games.sort((a, b) => {
    const totalScoreA = a.homeTeam.score + a.awayTeam.score
    const totalScoreB = b.homeTeam.score + b.awayTeam.score
    return totalScoreA !== totalScoreB
      ? totalScoreB - totalScoreA
      : new Date(b.createdAt) - new Date(a.createdAt)
  })
}
