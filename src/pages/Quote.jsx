import React from "react";
import { useState } from "react";
import { Button } from "../components/Button"
import axios from "axios";

export function Quote(){
    const[ quote, setQoute ] = useState("Quote of the day")
    const [ loading, setLoading ] = useState(true)

    return (
        <div>
            <div>
                <Button onClick={ async() => {
                    const response = await axios.get("http://localhost:4000/api/quote")
                    
                    setQoute(response.data.quote)
                    console.log(response)
                }} label={"get"}></Button>

                <h1>{quote}</h1>
            </div>
        </div>
    )

}
