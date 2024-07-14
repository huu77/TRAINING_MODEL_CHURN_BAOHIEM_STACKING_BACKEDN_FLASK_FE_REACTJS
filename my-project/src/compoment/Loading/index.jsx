import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Loading = () => {
    const [time,setTime] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevTime + 1;
            });
        }, 30); 

        return () => clearInterval(interval);
    },[])
  return (
    <div className={`absolute  z-50  w-screen h-screen bg-gray-500 bg-opacity-30 flex justify-center items-center ${time===100 ?'hidden':''}`}>
    <div
      className="radial-progress bg-primary text-primary-content border-primary border-4 "
      style={{ "--value": time }}
      role="progressbar"
    >
      {time}%
    </div>
    </div>
  );
};

export default Loading;
