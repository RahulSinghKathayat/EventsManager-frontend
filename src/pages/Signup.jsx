import React from "react";
import { useState } from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/Subheading";
import { InputBox } from "../components/Inputbox";
import { Button } from "../components/Button";


export function Signup(){
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    return(
        <div>
            <div>
                <Heading label={"Sign-up"}></Heading>
                <SubHeading label={"register yourself first"} />

                <div>
                    <InputBox label={"Username/Email"} placeholder={"ZmjjKK"}></InputBox>
                    <InputBox label={"Password"} placeholder={"valorant321"}></InputBox>
                </div>

                <div>
                    <Button label={"Let's Go"}></Button>
                </div>
            </div>
        </div>
    )
}