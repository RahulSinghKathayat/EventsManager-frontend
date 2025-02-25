import React from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { Link } from "react-router-dom"


export const Notice = () => {
   return <div>
    <div className="font-ubuntu flex justify-center gap-5 hover:underline">
                <Link to={"/events"} smooth="true" duration={500}>Events</Link>
                <Link to={"/result"} smooth="true" duration={500}>Result</Link>
                <Link to={"/"} smooth="true" duration={500}>Dashboard</Link>
        </div>
           <div>
               <Heading label={"POST A NOTICE!!!"}></Heading>
           </div>
           
           
           <div className="flex justify-center p-10">
           <div className="w-80 flex flex-col gap-2">
               <InputBox label={"ADD THE NOTICE TITLE"} placeholder={"title"}></InputBox>
               <InputBox label={"ADD NOTICE"} placeholder={"details"}></InputBox>
           </div>
           </div>
   
           <div className="p-5">
               <Button label={"post"}></Button>
           </div>
   
       </div>
}