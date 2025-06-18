import React from "react";
import iron from "/iron-man.jpg";
import CaptainAmerica from "/Captain-America.jpg";
import hulk from "/Hulk.jpg";

const App = () => {
  return (
    <div className="h-screen  flex justify-around items-center text-white w-full">
      {/* 1st */}
      <div className="bg-black flex flex-col justify-between items-center h-130  w-94 rounded-[50px]  p-6  ">
        <h1 className="text-4xl font-bold text-amber-500 ">IRON MAN</h1>
        <img
          src={iron}
          alt=""
          className="rounded-[50px] h-80 w-80 object-cover"
        />
        <button className="text-xl text-amber-200 italic h-10 w-50 bg-amber-700 rounded-[50px]">
          Download
        </button>
      </div>

      {/* 2nd */}

      <div className="bg-black flex flex-col justify-between items-center h-130  w-94 rounded-[50px]  p-6  ">
        <h1 className="text-4xl font-bold text-amber-500 ">HULK</h1>
        <img
          src={hulk}
          alt=""
          className="rounded-[50px] h-80 w-80 object-cover"
        />
        <button className="text-xl text-amber-200 italic h-10 w-50 bg-amber-700 rounded-[50px]">
          Download
        </button>
      </div>

      {/* 3rd */}

      <div className="bg-black flex flex-col justify-between items-center h-130  w-94 rounded-[50px]  p-6  ">
        <h1 className="text-4xl font-bold  text-amber-500 ">CAPTAIN AMERICA</h1>
        <img
          src={CaptainAmerica}
          alt=""
          className="rounded-[50px] h-80 w-80 object-cover"
        />
        <button className="text-xl text-amber-200 italic h-10 w-50 bg-amber-700 rounded-[50px]">
          Download
        </button>
      </div>
    </div>
  );
};

export default App;
