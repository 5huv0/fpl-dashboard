import PropTypes from 'prop-types';
import ck from "../../../../public/images/ck.jpg"


export default function PlayerToWatch({player}) {
  return (
    <div className='gap-9'>
      <div className='flex flex-col justify-center items-center'>
        <img src={ck} alt="" className="size-20 rounded-3xl"/>
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
