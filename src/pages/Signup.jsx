
import React from "react";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/Inputbox";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup(){
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    return(
        <div>
            <div>
                <Heading label={"Sign-up"}></Heading>
                <SubHeading label={"register yourself first"} />

                <div>
                    <InputBox onChange={(e) => {
                        setUsername(e.target.value)
                    }} label={"Username/Email"} placeholder={"ZmjjKK"}></InputBox>

                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} label={"Password"} placeholder={"valorant321"}></InputBox>
                </div>

                <div>
                    <Button onClick={ async() => {
                        const registerUser = await axios.post("http://localhost:4000/users/signup",{
                            username,
                            password
                        })
                        navigate("/signin")
                    }} label={"Let's Go"}></Button>
                </div>
            </div>
        </div>
    )
}
