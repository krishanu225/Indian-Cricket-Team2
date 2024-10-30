import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="cursor-pointer">
        <header className="w-screen h-[70px] text-slate-100  bg-blue-900 p-1 mx-auto cursor-pointer">
          <div className="flex items-center p-2 justify-between ">
            <div className="flex space-x-10">
              <h1 className="text-4xl text-slate-100">
                <div className="p-2">
                  <b>Indian National Cricket Team</b>
                </div>
              </h1>
            </div>
            <nav>
              <ul className="flex space-x-10 justify-center items-center">
                <li className="hover:bg-blue-800 text-2xl font-extrabold rounded block ">
                  <Link to="/"> Home</Link>
                </li>
                <li className="hover:bg-blue-800 text-2xl font-extrabold rounded block ">
                  <Link to="/players">Players</Link>
                </li>
                <li className="hover:bg-blue-800 text-2xl font-extrabold rounded block">
                  <Link to="/matches"> Matches</Link>
                </li>
                <li className="hover:bg-blue-800 text-2xl font-extrabold rounded block">
                  <Link to="/history">History</Link>
                </li>
                <li className="hover:bg-blue-800 text-2xl font-extrabold rounded block">
                  <Link to="/schedule">Schedule</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
     
      </div>
    </>
  );
};

export default Navbar;
