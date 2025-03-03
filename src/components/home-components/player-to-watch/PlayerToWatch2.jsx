import PropTypes from 'prop-types';
import rk from "../../../../public/images/rk.jpg"



export default function PlayerToWatch({player}) {
  return (
    <div className='flex gap-9 '>
      <div className='flex flex-col justify-center items-center'>
        <img src={rk} alt="" className="size-20 rounded-3xl"/>
        <p><span className="text-red-700 font-bold font-mono">Name:</span>{player.player_name}</p>
        <p><span className="text-red-700 font-bold font-mono">Rank:</span>{player.rank}</p>
        <p><span className="text-red-700 font-bold font-mono">Total:</span>{player.total}</p>
        <p><span className="text-red-700 font-bold font-mono">Team:</span>{player.entry_name}</p>
      </div>
    </div>
  )

  
}

PlayerToWatch.propTypes = {
    player : PropTypes.shape({
        player_name:PropTypes.string.isRequired,
        rank : PropTypes.number.isRequired,
        total : PropTypes.number.isRequired,
        entry_name : PropTypes.string.isRequired
    }).isRequired,
  }

  PlayerToWatch.defaultProps = {
    player : {
        player_name : "unknown",
        rank : 0,
        total : 0,
        entry_name : "unknown"
    }
  }
