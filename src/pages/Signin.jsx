
import React from "react";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/Inputbox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin(){
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    return(
        <div>
            <div>
                <Heading label={"SignIn"}/>
                <SubHeading label={"G2G if right User"}/>
            </div>

            <div>
                
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                }} label={"Username"} placeholder={""}></InputBox>
                
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={""}></InputBox>

            </div>

            <div>
                <Button onClick={ async() => {
                    const loginUser = await axios.post("http://localhost:4000/users/signin", {
                        username,
                        password
                    })
                    navigate("/")
                }} label={"Login"}></Button>
            </div>
        </div>
    )
}
