// import avatar1 from "../../../../public/images/avatar1.png"
import rk from "../../../../public/images/rk.jpg"
import PropTypes from 'prop-types';

const PlayerOfTheWeek = ({ player }) => {
    
  return (
    <div className="flex flex-col items-center font-mono font-extrabold">
      <img src={rk} alt="avatar1" className="size-20 rounded-3xl" />
      <p><span className="text-red-700">Name:</span> {player.player_name}</p>
      <p><span className="text-red-700">Team-Name:</span> {player.entry_name}</p>
      <p><span className="text-red-700">Total:</span> {player.event_total}</p>
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
