import './index.css'

const MatchCard = props => {
  const {details} = props
  const {
    competingTeam,

    result,
    competingTeamLogo,

    matchStatus,
  } = details

  const wonLost = matchStatus === 'Lost' ? 'lost' : 'won'

  return (
    <li className="each-match-card-list-item">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="match-card-image"
      />
      <h1 className="match-card-heading">{competingTeam}</h1>
      <p className="match-result-heading">{result}</p>
      <p className={wonLost}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
