import React, { useState } from "react";

const Example = ({ sidebar }) => {
  const [num, setNum] = useState(9);
  const [state, setState] = useState("dask");

  return (
    <div
      className={`flex items-center justify-center ${
        sidebar ? " ml-72 " : " ml-0 "
      } duration-500  flex-col gap-12 h-screen`}
    >
      <div className="flex items-center justify-center gap-12">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={() => {
            setNum(10);
          }}
        >
          btn1
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={() => {
            setState("dusk");
          }}
        >
          btn2
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={() => {
            setState("dask");
            setNum(9);
          }}
        >
          reset
        </button>
      </div>

      <div className="bg-blue-500 w-[50vw] rounded-3xl h-[50vh] flex items-center flex-col gap-12 justify-center">
        <div className=" bg-stone-500 px-6 py-2">{num}</div>
        <div className=" bg-stone-500 px-6 py-2">{state}</div>
      </div>
    </div>
  );
};

export default Example;
