import axios from "axios";
import  { useEffect, useState } from "react";
import PlayerOfTheWeek from "../components/home-components/player-of-the-week/PlayerOfTheWeek";
import PlayerToWatch from "../components/home-components/player-to-watch/PlayerToWatch";

export default function Home(){
    const [players , setPlayers] = useState([])
    const [leagueTitle , setLeagueTitle] = useState("")
    // const [idNum , setIdNum] = useState()
    const fetchLeagueData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3000/league"
          );
          setPlayers(response.data.standings.results);
          setLeagueTitle(response.data.league.name);
        //   setIdNum(response.data.players.id)
        } catch (error) {
          console.error("Error fetching the data:", error);
        }
      };
    
      useEffect(() => {
        fetchLeagueData();
      }, []);
//  console.log(idNum)
    //   const Shuvo = 


      const HighestScorer = players.reduce(
              (prev, current) =>
                prev.event_total > current.event_total ? prev : current,
             players[0]
          );
    return(
        <div className="flex">
            <div className="bg-slate-400 h-screen w-4/12 p-3 m-3 border-4 border-green-600">      {/* Leader Board */}
                <p className="font-serif text-3xl font-extrabold justify-center text-center underline">{leagueTitle}</p>
                <table className="text-sm font-bold font-mono text-center">
                    <thead>
                        <tr className="border-2">
                            <th>Rank</th>
                            <th>Team Name</th>
                            <th>Player Name</th>
                            <th>Points</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {players.slice(0,30).map((player,index) => (
                        <tr key={player.id||index}>
                            <td>{index + 1}</td>{/* Rank is the index + 1 */}
                            <td>{player.entry_name}</td>
                            <td>{player.player_name}</td>
                            <td>{player.event_total}</td>
                            <td>{player.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="h-screen w-8/12 flex flex-col">
                <div className="h-4/6 flex flex-row">
                    <div className="w-7/12 flex flex-col justify-center items-center">
                        <div className="bg-slate-500 m-3 p-4 border-8 border-indigo-600"> {/*  Highest Scorer */}
                            <PlayerOfTheWeek player={HighestScorer}/>
                        </div>
                        <div className="bg-slate-400 h-3/6 p-3 border-4 border-red-600"> {/*  Player to watch  */}
                            <PlayerToWatch />
                        </div>
                    </div>
                    <div className="bg-blue-700 w-5/12">      {/*  PL Table */}
                        PL Table
                    </div>
                </div>
                <div className="h-2/6 bg-green-600">          {/* Individual player search */}
                    Individual player search
                </div>
            </div>
        </div>
    )
}


