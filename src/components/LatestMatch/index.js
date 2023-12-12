import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details
  return (
    <div className="latest-match-container">
      <div className="team-information">
        <div>
          <h1 className="opposition-name">{competingTeam}</h1>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue-result">{venue}</p>
          <p className="latest-match-venue-result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="latest-opposition-team-icon"
          />
        </div>
      </div>
      <hr />
      <div className="Innings">
        <h1 className="first-second-man-umpire-innings">First Innings</h1>
        <p className="innings-team">{firstInnings}</p>
        <h1 className="first-second-man-umpire-innings">Seconds Innings</h1>
        <p className="innings-team">{secondInnings}</p>
        <h1 className="first-second-man-umpire-innings">Man Of The Match</h1>
        <p className="innings-team">{manOfTheMatch}</p>
        <h1 className="first-second-man-umpire-innings">Umpires</h1>
        <p className="innings-team">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
