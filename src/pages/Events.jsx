
import React, { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/Inputbox"
import { SubHeading } from "../components/Subheading"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const Events = () => {

    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const navigate = useNavigate()

    return <div className="font-ubuntu">
        <div className="font-ubuntu">
        <div className="font-ubuntu flex justify-center gap-5 hover:underline">
                <Link to={"/notice"} smooth="true" duration={500}>Notice</Link>
                <Link to={"/result"} smooth="true" duration={500}>Results</Link>
                <Link to={"/"} smooth="true" duration={500}>Dashboard</Link>
        </div>
            <Heading label={"CREATE NEW EVENTS HERE!!!"}></Heading>
            <SubHeading label={"ADD NEW EVENTS FOR YOUR INSTITUTE BELOW"}></SubHeading>
        </div>
        
        
        <div className="flex justify-center py-10 items-center">
        <div className="font-ubuntu w-full flex justify-center gap-10 items-center">
            <InputBox onChange={(e)=>{
                setTitle(e.target.value)
            }} label={"ADD THE EVENT TITLE"} placeholder={"event name"}></InputBox>
            <InputBox onChange={(e) => {
                setDescription(e.target.value)
            }} label={"ADD EVENT'S DESCRIPTION"} placeholder={"event details"}></InputBox>
        </div>
        </div>

        <div className="p-5">
            <Button onClick={  async() => {
                const response = await axios.post("http://localhost:4000/users/todo", {
                    title,
                    description
                });
                navigate('/result')
            }} label={"create"}></Button>
        </div>

    </div>
}
