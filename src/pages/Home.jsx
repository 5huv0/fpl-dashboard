import axios from "axios";
import  { useEffect, useState } from "react";
import PlayerOfTheWeek from "../components/home-components/player-of-the-week/PlayerOfTheWeek";
import PlayerToWatch1 from "../components/home-components/player-to-watch/PlayerToWatch1";
import PlayerToWatch2 from "../components/home-components/player-to-watch/PlayerToWatch2";
import PlayerToWatch3 from "../components/home-components/player-to-watch/PlayerToWatch3";
import IndividualPlayerSearch from "../components/home-components/individual-player-search/IndividualPlayerSearch"

export default function Home(){
    const [players , setPlayers] = useState([])
    const [leagueTitle , setLeagueTitle] = useState("")

    // const [title , setTitle] = useState("")
    // const [genre , setGenre] = useState("")

    const playerIds = players.map(player => player.id);
    console.log(playerIds);

    const saju = players.find(player => player.id === 64989035);
    const toffee = players.find(player => player.id === 34424512);
    const shuvo = players.find(player => player.id === 29247874);


    const fetchLeagueData = async () => { //This is for fpl api
        try {
          const response = await axios.get(
            "http://localhost:3000/league"
          );
          setPlayers(response.data.standings.results);
          setLeagueTitle(response.data.league.name);
        } catch (error) {
          console.error("Error fetching the data:", error);
        }
      };

    //   const fetchGameData = async () => { // This is for games api
    //     try{
    //         const response = await axios.get(" https://www.freetogame.com/api/games");
    //         setGenre(response.data.genre)
    //         setTitle(response.data.title)
    //     }
    //     catch(error){
    //         console.log("Error fetching data:", error)
    //     }
    // }
    
      useEffect(() => {
        fetchLeagueData();
      }, []);

      const HighestScorer = players.reduce(
              (prev, current) =>
                prev.event_total > current.event_total ? prev : current,
             players[0]
          );
    return(
        <div className="flex">
            <div className="bg-slate-400 h-screen w-4/12 p-3 m-3 border-4 border-green-600">      {/* Leader Board */}
                <p className="font-serif text-blue-700 text-3xl font-extrabold justify-center text-center underline">{leagueTitle}</p>
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
                        <div className="bg-slate-500 m-3 p-3 border-8 border-indigo-600"> {/*  Highest Scorer */}
                            <h2 className="font-extrabold text-2xl underline text-center"> Top Of The Week </h2>
                            <PlayerOfTheWeek player={HighestScorer}/>
                        </div>
                        <div className="bg-slate-400 h-3/6 p-3 border-4 border-red-600"> {/*  Player to watch  */}
                            <div className="flex justify-center font-extrabold text-3xl underline text-center">
                                <h2> Players To Watch </h2>
                            </div>
                            <div className="flex flex-row p-2 gap-4">
                                <PlayerToWatch1 player={shuvo}/>
                                <PlayerToWatch2 player={saju}/>
                                <PlayerToWatch3 player={toffee}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-slate-500 w-5/12 border-4 border-gray-600 m-2">      {/*  PL Table */}
                       Free Games and Links
                    </div>
                </div>
                <div className="h-2/6 bg-slate-500 m-2 border-4 border-indigo-800 p-3 text-center">          {/* Individual player search */}
                    <IndividualPlayerSearch />
                </div>
            </div>
        </div>
    )
}


