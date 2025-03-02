import PropTypes from 'prop-types';
import rk from "../../../../public/images/rk.jpg"



export default function PlayerToWatch({player}) {
  return (
    <div className='flex gap-9 '>
      <div>
        <img src={rk} alt="" className="size-20 rounded-3xl"/>
        <p>Name :{player.player_name}</p>
        <p>Rank :{player.rank}</p>
        <p>Total :{player.total}</p>
        <p>Team :{player.entry_name}</p>
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
