import React from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
    return (<div>
        <div className="flex justify-center items-center">
            <ul className="flex gap-8 cursor-pointer">
                <li><Link to={"/events"} smooth="true" duration={500}>Events</Link></li>
                <li><Link to={"/Notice"} smooth="true" duration={500}>Notice</Link></li>
                <li><Link to={"/Result"} smooth="true" duration={500}>Result</Link></li>
            </ul>
        </div>
    </div>)
}