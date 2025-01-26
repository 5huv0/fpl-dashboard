import React from "react";

export default function Home(){
    return(
        <div className="flex">
            <div className="bg-yellow-400 h-screen w-4/12">
                Total LeaderBoard
            </div>
            <div className="h-screen w-8/12 flex flex-col">
                <div className="h-4/6 flex flex-row">
                    <div className="w-7/12 flex flex-col">
                        <div className="bg-slate-500 h-4/6">
                            Player of the week
                        </div>
                        <div className="bg-orange-950 h-2/6">
                            Average Point of the gameweek
                        </div>
                    </div>
                    <div className="bg-blue-700 w-5/12">
                        Top of the Week
                    </div>
                </div>
                <div className="h-2/6 bg-green-600">
                    Total team & Avg points Total & Total points
                </div>
            </div>
        </div>
    )
}