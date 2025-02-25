import React from "react"
export function Button({label, onClick}){
    return <button onClick={onClick} type="button" className="w-30 text-black bg-yellow-400 hover:bg-white hover:text-yellow-400 border border-black font-medium rounded-lg text-lg px-3 py-3 me-1 mb-1">{label}</button>
}