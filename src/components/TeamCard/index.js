import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/teamMatches/${id}`}>
      <li className="each-list-item">
        <div className="image-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
        </div>
        <div className="team-name-container">
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
