import avatar1 from "../../../../public/images/avatar1.png"
import PropTypes from 'prop-types';

const PlayerOfTheWeek = ({ player }) => {
    
  return (
    <div>
      <img src={avatar1} alt="avatar1" className="size-20"/>
      <p>{player.player_name}</p>
      <p>{player.entry_name}</p>
      <p>{player.event_total}</p>
    </div>
  )
}

PlayerOfTheWeek.propTypes = {
    player: PropTypes.shape({
      player_name: PropTypes.string.isRequired,
      entry_name: PropTypes.string.isRequired,
      event_total: PropTypes.number.isRequired, 
    }).isRequired,
  };

  PlayerOfTheWeek.defaultProps = {
    player: {
      player_name: "Unknown",
      entry_name: "Unknown Team",
      event_total: 0,
    },
  };
  

export default PlayerOfTheWeek
