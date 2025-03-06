
import React, { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


export const Notice = () => {

    const [title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    const navigate = useNavigate()


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
           <div className="font-ubuntu w-full flex justify-center gap-10 items-center">
               <InputBox onChange={(e)=>{
                    setTitle(e.target.value)
               }} label={"Title"} placeholder={""}></InputBox>
               <InputBox onChange={(e) => {
                    setDescription(e.target.value)
               }} label={"Details"} placeholder={""}></InputBox>
           </div>
           </div>
   
           <div className="p-5">
               
               <Button onClick={ async() => {
                const response = await axios.post("http://localhost:4000/users/todo", {
                    title,
                    description,
                    isNotice: Notice || false
                })
                navigate("/result")
               }} label={"Post"}></Button>
           </div>
   
       </div>
}
