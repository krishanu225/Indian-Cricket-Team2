import { Link } from "react-router-dom";

const Matches = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="min-h-screen bg-gray-200 text-gray-900">
          <header className="bg-indigo-700 hover:bg-indigo-800 w-screen text-white py-4 shadow-lg">
            <h1 className="text-center text-4xl font-bold tracking-widest">
              <Link to="/">India National Cricket Team</Link>
            </h1>
            <p className="text-center text-lg mt-2 font-semibold">
              Match Day -date
            </p>
          </header>

          <div className="p-7">
            <div className="bg-white shadow-md rounded-lg p-5 mb-6 max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-3">
                  <img className="w-24 h-16" src="./images/ind.png" alt="" />
                  <span className="text-3xl font-bold">INDIA</span>
                </div>
                <span className="text-2xl font-semibold">VS</span>
                <div className="flex items-center space-x-4">
                  <img className="w-24 h-16" src="./images/aus.png" alt="" />
                  <span className="text-3xl font-bold">AUSTRALIA</span>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <div>
                  <h2 className="text-xl ">
                    <b>Match Status:</b>
                  </h2>
                  <div className="text-2xl text-green-400 font-bold">
                    <b>Live.</b>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl ">
                    <b>Location:</b>
                  </h2>
                  <span className="text-lg">Eden Garden Stadium, Kolkata</span>
                </div>
                <div>
                  <h2 className="text-xl ">
                    <b>Date:</b>
                  </h2>
                  <span className="text-lg">05.10.2024</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-4">Scorecard</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white shadow rounded-lg">
                  <h3 className="text-xl font-extrabold text-center mb-2">
                    INDIA
                  </h3>
                  <p className="text-2xl text-center text-indigo-700 font-semibold">
                    (287/5) 50 overs
                  </p>
                </div>
                <div className="p-6 bg-white shadow rounded-lg">
                  <h3 className="text-xl font-extrabold text-center mb-2">
                    AUSTRALIA
                  </h3>
                  <p className="text-2xl text-center text-indigo-700 font-semibold">
                    (273/10) 48.2 overs
                  </p>
                </div>
              </div>
            </div>

            <section className="max-w-4xl mx-auto mt-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Highlights</h2>
                <ul className="list-disc pl-6 space-y-1 font-semibold text-gray-700">
                  <li>Virat Kohli scored 89 off 72 balls.</li>
                  <li>Jasprit Bumrah took 3 wickets for 35 runs.</li>
                  <li>Australia needs 14 runs to win in 10 balls.</li>
                </ul>
              </div>
            </section>
          </div>

          <footer className="bg-indigo-700 text-white py-4 mt-10">
            <p className="text-center">
              &copy; 2024 Indian National Cricket Team | All Rights Reserved
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Matches;
