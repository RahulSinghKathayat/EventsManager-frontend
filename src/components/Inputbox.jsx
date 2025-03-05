import React from "react";

export function InputBox({ label, placeholder, onChange }) {
  return (
    <div className="relative max-w-[190px] my-4 font-sans">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        required
        className="block w-full px-2.5 pb-2.5 pt-5 text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] appearance-none focus:outline-none focus:ring-0 focus:border-indigo-400 peer"
      />
      <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-indigo-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 bg-white px-2">
        {label}
      </label>
    </div>
  );
}
