import React from "react";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/Inputbox";
import { Button } from "../components/Button";

export function Signin(){
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    return(
        <div>
            <div>
                <Heading label={"SignIn"}/>
                <SubHeading label={"G2G if right User"}/>
            </div>

            <div>
                <InputBox label={"Username"} placeholder={"your username"}></InputBox>
                <InputBox label={"Password"} placeholder={"your password"}></InputBox>
            </div>

            <div>
                <Button label={"Login"}></Button>
            </div>
        </div>
    )
}