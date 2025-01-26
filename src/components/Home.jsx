import React from "react";

export default function Home(){
    return(
        <div className="flex">
            <div className="flex1 bg-slate-700">
            flex1
            </div>
            <div className="flex2 bg-gray-200">flex2
                <div className="flex3 bg-green-600">flex3
                    <div className="flex5 bg-red-600">flex5
                        <div className="flex7 bg-blue-700">
                            flex7
                        </div>
                        <div className="flex8 bg-orange-500">
                            flex8
                        </div>
                    </div>
                    <div className="flex6 bg-yellow-400">
                        flex6
                    </div>
                </div>
                <div className="flex4 bg-emerald-500">
                    flex4
                </div>
            </div>
        </div>
    )
}