import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: updatedTeams, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="ipl-container">
        <div className="image-dashboard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="man-logo"
          />
          <h1 className="ipl-dashboard">Ipl Dashboard</h1>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader />
          </div>
        ) : (
          <div data-testid="loader">
            <ul className="unordered-list">
              {teamsList.map(each => (
                <TeamCard details={each} key={each.name} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
