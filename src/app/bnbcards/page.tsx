import React from "react";

export default function BnbCrads() {
  return (
    <div className="flex h-screen bg-white justify-center p-4">
      <div className="w-[65vw] h-[9vh] bg-[#FFFFFF] flex flex-row rounded-full border border-gray-200 shadow-lg">
        <div className="w-[21.70vw] h-[9vh] hover:bg-gray-200 rounded-full px-6 flex flex-col justify-center leading-4">
          <p className="text-black font-[12px]">Where</p>
          <p className="text-[14px] text-gray-400">Search Destinitaion</p>

        </div>
        <span className="border border-gray-300 h-8 flex place-self-center"/>
        <div className="w-[21.70vw] h-[9vh] hover:bg-gray-200 rounded-full px-6 flex flex-col justify-center leading-4">
          <p>When</p>
          <p className="text-[14px] text-gray-400">Add Dates</p>
        </div>
         <span className="border border-gray-300 h-8 flex place-self-center"/>
        <div className="w-[21.70vw] h-[9vh hover:bg-gray-200 rounded-full px-6 flex flex-col justify-center leading-4">
          <p className="text-black ">Type of Service</p>
          <p className="text-[14px] text-gray-400">Add Services</p>
          {/* <button className="bg-red-500 rounded-full px-4 py-2"></button> */}
        </div>
      </div>
    </div>
  );
}
