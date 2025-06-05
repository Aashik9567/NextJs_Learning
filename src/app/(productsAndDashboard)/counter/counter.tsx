"use client";
import { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-4xl mb-2">{count}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=>{setCount(count + 1)}}>
        Increment
      </button>
    </div>
  );
}