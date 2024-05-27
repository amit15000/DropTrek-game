import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-slate-700 flex md:w-11/12 mx-auto text-white py-5 justify-between rounded-br-md rounded-bl-md md:px-5  shadow-blue-600  shadow-lg">
      <div className="flex">
        <Link to="/">
          <span className="hover:bg-blue-950 p-2 font-bold rounded-md text-2xl hover:cursor-pointer ">
            DropTrek
          </span>
        </Link>
      </div>
      <div className="flex justify-around w-[50%] text-xl font-semibold ">
        <div className="flex">
          <Link to="/simulation">
            <span className="hover:bg-slate-600 p-2 rounded-md">
              Simulation
            </span>
          </Link>
        </div>
        <div className="flex">
          <Link to="/game">
            <span className="hover:bg-slate-600 p-2 rounded-md">Game</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
