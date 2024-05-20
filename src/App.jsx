import { useState } from "react";
import Example from "./component/Example";
import { MdMenuOpen } from "react-icons/md";

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="bg-stone-300">
      <div
        className={`${
          sidebar ? " h-screen  " : " h-0 "
        } w-72   bg-stone-800 flex items-center duration-500 flex-col justify-center gap-8 fixed top-0 left-0 text-white rounded-r-3xl`}
      >
        <div
          className={`flex items-center flex-col ${
            sidebar ? " flex " : " hidden "
          } duration-700 justify-center gap-8`}
        >
          <li className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500 ">
            About us
          </li>
          <li className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500 ">
            Home
          </li>
          <li className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500 ">
            Portfolio
          </li>
          <li className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500 ">
            Help
          </li>
          <li className="text-lg cursor-pointer px-4 py-2 hover:underline hover:tracking-widest hover:text-xl duration-500 ">
            Contact us
          </li>
        </div>
      </div>

      <Example sidebar={sidebar} />
      <div className="text-white bg-stone-800 fixed top-10 right-20 w-16 h-16 cursor-pointer hover:shadow-lg rounded-full flex items-center justify-center">
        <MdMenuOpen
          size={32}
          onClick={() => {
            setSidebar((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}
export default App;
