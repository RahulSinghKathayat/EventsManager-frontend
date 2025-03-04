import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div className="flex justify-between items-center w-full px-8 py-4">
            <div className="w-1/3"></div>
            
            <ul className="flex gap-8 cursor-pointer w-1/3 justify-center">
                <li className="hover:underline hover:text-amber-400"><Link to={"/events"}>Events</Link></li>
                <li className="hover:underline hover:text-amber-400"><Link to={"/notice"}>Notice</Link></li>
                <li className="hover:underline hover:text-amber-400"><Link to={"/result"}>Result</Link></li>
            </ul>

            <ul className="flex gap-1 w-1/3 justify-end">
                <li className="hover:underline hover:text-violet-500"><Link to={"/signup"}>Register</Link></li>
                <div>/</div>
                <li className="hover:underline hover:text-violet-500"><Link to={"/signin"}>Login</Link></li>
            </ul>
        </div>
    );
};
