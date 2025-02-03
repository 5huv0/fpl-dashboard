// import React from "react";

// export default function Home(){
//     return(
//         <div className="flex">
//             <div className="bg-yellow-400 h-screen w-4/12">
//                 Total LeaderBoard

//                 {/* https://fantasy.premierleague.com/api/leagues-classic/856056/standings */}
//             </div>
//             <div className="h-screen w-8/12 flex flex-col">
//                 <div className="h-4/6 flex flex-row">
//                     <div className="w-7/12 flex flex-col">
//                         <div className="bg-slate-500 h-4/6">
//                             Player of the gameweek
//                         </div>
//                         <div className="bg-orange-950 h-2/6">
//                             Average Point of the gameweek
//                         </div>
//                     </div>
//                     <div className="bg-blue-700 w-5/12">
//                         Top of the Week
//                     </div>
//                 </div>
//                 <div className="h-2/6 bg-green-600">
//                     Total team & Avg points Total & Total points
//                 </div>
//             </div>
//         </div>
//     )
// }




//using ChatGPT


// import React, { useEffect, useState } from "react";

// export default function Home() {
//     const [leaderboard, setLeaderboard] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("https://fantasy.premierleague.com/api/leagues-classic/856056/standings")
//             .then((response) => response.json())
//             .then((data) => {
//                 setLeaderboard(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="flex">
//             <div className="bg-yellow-400 h-screen w-4/12 p-4">
//                 <h2 className="text-xl font-bold">Total LeaderBoard</h2>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : leaderboard ? (
//                     <ul>
//                         {leaderboard.standings.results.map((team, index) => (
//                             <li key={team.entry}>
//                                 {index + 1}. {team.entry_name} - {team.total} pts
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>Error loading leaderboard</p>
//                 )}
//             </div>
//             <div className="h-screen w-8/12 flex flex-col">
//                 <div className="h-4/6 flex flex-row">
//                     <div className="w-7/12 flex flex-col">
//                         <div className="bg-slate-500 h-4/6 flex items-center justify-center text-white text-lg font-bold">
//                             Player of the Gameweek
//                         </div>
//                         <div className="bg-orange-950 h-2/6 flex items-center justify-center text-white text-lg font-bold">
//                             Average Point of the Gameweek
//                         </div>
//                     </div>
//                     <div className="bg-blue-700 w-5/12 flex items-center justify-center text-white text-lg font-bold">
//                         Top of the Week
//                     </div>
//                 </div>
//                 <div className="h-2/6 bg-green-600 flex items-center justify-center text-white text-lg font-bold">
//                     Total Team & Avg Points & Total Points
//                 </div>
//             </div>
//         </div>
//     );
// }





// using DeepSeek

// import React, { useEffect, useState } from "react";

// export default function Home() {
//     const [leaderboardData, setLeaderboardData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     "https://fantasy.premierleague.com/api/leagues-classic/856056/standings"
//                 );
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 const data = await response.json();
//                 setLeaderboardData(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     return (
//         <div className="flex">
//             <div className="bg-yellow-400 h-screen w-4/12">
//                 Total LeaderBoard
//                 {leaderboardData && (
//                     <div>
//                         <h2>{leaderboardData.league.name}</h2>
//                         <ul>
//                             {leaderboardData.standings.results.map((team, index) => (
//                                 <li key={index}>
//                                     {team.entry_name}: {team.total}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//             <div className="h-screen w-8/12 flex flex-col">
//                 <div className="h-4/6 flex flex-row">
//                     <div className="w-7/12 flex flex-col">
//                         <div className="bg-slate-500 h-4/6">
//                             Player of the gameweek
//                         </div>
//                         <div className="bg-orange-950 h-2/6">
//                             Average Point of the gameweek
//                         </div>
//                     </div>
//                     <div className="bg-blue-700 w-5/12">
//                         Top of the Week
//                     </div>
//                 </div>
//                 <div className="h-2/6 bg-green-600">
//                     Total team & Avg points Total & Total points
//                 </div>
//             </div>
//         </div>
//     );
// }





//Qwen2.5max

// import React, { useState, useEffect } from "react";

// export default function Home() {
//     // State to store the fetched data
//     const [leaderboardData, setLeaderboardData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch data when the component mounts
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://fantasy.premierleague.com/api/leagues-classic/856056/standings");
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setLeaderboardData(data); // Store the fetched data in state
//                 setLoading(false); // Mark loading as complete
//             } catch (err) {
//                 setError(err.message); // Handle errors
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []); // Empty dependency array ensures this runs once on mount

//     return (
//         <div className="flex">
//             <div className="bg-yellow-400 h-screen w-4/12">
//                 <h1>Total LeaderBoard</h1>
//                 {/* Display loading state */}
//                 {loading && <p>Loading...</p>}
//                 {/* Display error state */}
//                 {error && <p>Error: {error}</p>}
//                 {/* Display leaderboard data */}
//                 {leaderboardData && (
//                     <pre>{JSON.stringify(leaderboardData, null, 2)}</pre>
//                 )}
//             </div>
//             <div className="h-screen w-8/12 flex flex-col">
//                 <div className="h-4/6 flex flex-row">
//                     <div className="w-7/12 flex flex-col">
//                         <div className="bg-slate-500 h-4/6">
//                             Player of the gameweek
//                         </div>
//                         <div className="bg-orange-950 h-2/6">
//                             Average Point of the gameweek
//                         </div>
//                     </div>
//                     <div className="bg-blue-700 w-5/12">
//                         Top of the Week
//                     </div>
//                 </div>
//                 <div className="h-2/6 bg-green-600">
//                     Total team & Avg points Total & Total points
//                 </div>
//             </div>
//         </div>
//     );
// }