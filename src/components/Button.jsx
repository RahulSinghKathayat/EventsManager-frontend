import React from "react"
export function Button({label, onClick}){
    return <button onClick={onClick} type="button" className="bg-white text-black rounded-full text-[17px] font-semibold px-8 py-4 border border-black shadow-none transition-all duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.25 active:shadow-none">

                    {label}

            </button>
}