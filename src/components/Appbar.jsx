import React from "react"
import { Link } from "react-router-dom"
export function Appbar(){
    return <div className="shadow h-14 flex justify-between">
        <div className="font-ubuntu flex flex-col justify-center h-full ml-4">
            YOUR EVENTS MANAGER
        </div>
        <div className="flex">
            <div className="font-ubuntu flex flex-col justify-center h-full mr-4">
                CLG!
            </div>
            <div className="font-play rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-md cursor-pointer">
                    you
                </div>
            </div>
        </div>
    </div>
}