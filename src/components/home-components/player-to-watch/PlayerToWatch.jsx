import PropTypes from 'prop-types';
import ck from "../../../../public/images/ck.jpg"
import rk from "../../../../public/images/rk.jpg"
import td from "../../../../public/images/td.jpg"


export default function PlayerToWatch({player}) {
  return (
    <div className='flex gap-9 '>
      <div>
        <img src={ck} alt="" className="size-20 rounded-3xl"/>
        <p>{player.player_name}</p>
        <p>{player.rank}</p>
        <p>{player.total}</p>
        <p>{player.entry_name}</p>
      </div>

      <div>
        <img src={rk} alt="" className="size-20 rounded-3xl"/>
        <p>{player.player_name}</p>
        <p>{player.rank}</p>
        <p>{player.total}</p>
        <p>{player.entry_name}</p>
      </div>

      <div>
        <img src={td} alt="" className="size-20 rounded-3xl"/>
        <p>{player.player_name}</p>
        <p>{player.rank}</p>
        <p>{player.total}</p>
        <p>{player.entry_name}</p>
      </div>

      <div>
        <img src={td} alt="" className="size-20 rounded-3xl"/>
        <p>{player.player_name}</p>
        <p>{player.rank}</p>
        <p>{player.total}</p>
        <p>{player.entry_name}</p>
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
