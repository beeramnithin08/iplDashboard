import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    activeTeamImageUrL: '',
    latestMatch: {},
    recentMatches: [],
    isLoding: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const api = `https://apis.ccbp.in/ipl/${id}`
    console.log(api)
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)

    const camelCaseData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = camelCaseData

    const updatedMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.is,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.is,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      activeTeamImageUrL: teamBannerUrl,
      latestMatch: updatedMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoding: false,
    })
  }

  render() {
    const {
      activeTeamImageUrL,
      latestMatch,
      recentMatches,
      isLoding,
    } = this.state

    return (
      <div className="team-container">
        {isLoding ? (
          <Loader />
        ) : (
          <div>
            <img
              src={activeTeamImageUrL}
              alt="team banner"
              className="team-image"
            />
            <h1 className="latest-matches">Latest Matches</h1>
            <LatestMatch details={latestMatch} />
            <ul className="unordered-list">
              {recentMatches.map(eachMatch => (
                <MatchCard details={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
