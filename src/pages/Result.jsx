import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export const Result = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchResult = async() => {
        try {
            const response = await fetch("http://localhost:4000/users/todos")
            if(!response.ok){
                throw new Error("N/W is not working properly")
            }
            const data = await response.json()
            setTodos(data.allTodos)
            }
            catch (error) {
                console.error(error)
            } finally{
                setLoading(false)
            }
        };
        fetchResult() 
    },[])

    if(loading){
        return <div className="text-center text-xl font-semibold">loading...</div>
    }

    return (
        <div>
            <div className="font-ubuntu flex justify-center gap-5 py-10 hover:underline">
                    <Link to={"/events"} smooth="true" duration={500}>Events</Link>
                    <Link to={"/notice"} smooth="true" duration={500}>Notice</Link>
                    <Link to={"/"} smooth="true" duration={500}>Dashboard</Link>
            </div>
        <div className="p-4">
        {todos.length > 0 ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {todos.map((todo)=>(
                    <div key={todo._id} className="bg-white shadow-lg shadow-yellow-200 rounded-lg p-4 border border-gray-300 hover:shadow-yelllow-500 transition transform duration-300 hover:scale-105 hover:bg-yellow-300 hover:text-black hover:shadow-gray-600">
                        <h2 className="text-lg font-semibold text-gray-800">{todo.title}</h2>
                        <p className="text-gray-600">{todo.description}</p>
                    </div>
                ))}
            </div>
        ):(
            <p className="text-center text-gray-500">Nothing found</p>
        )}
        </div>
    </div>
)}