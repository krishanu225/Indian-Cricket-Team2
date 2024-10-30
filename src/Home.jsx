import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="justify-center items-center flex cursor-pointer  w-[1525px]  h-[450px]  bg-[url('/images/indiateam3.jpeg')]">
        <div className=" backdrop-brightness-50 ">
          <b className=" text-slate-50 justify-center p-[20px] items-center text-5xl">
            Indian National Cricket Team
          </b>
          <div className="  flex justify-center items-center text-slate-50 ">
            <b className="text-slate-50 text-xl">
              one of the most dominant cricket teams in the world
            </b>
          </div>
          <div className="p-4 flex justify-center items-center">
            <button className="bg-yellow-500 text-slate-50 rounded-lg w-56 p-2 text-2xl">
            <Link to="/players"> <b>Meet The Team</b></Link>
            </button>
          </div>
        </div>
      </div>
      <center className="py-6 justify-between items-center text-5xl">
        <b>Memorable Moments</b>
      </center>
      <div className="flex space-x-5 px-2">
        <img
          className="p-2 border-slate-50 w-[520px] h-[250px] rounded-lg"
          src="./images/india2.jpg"
        ></img>
        <img
          className=" p-2 w-[520px] h-[250px] border-slate-50  rounded"
          src="./images/india.jpeg"
        ></img>
        <img
          className="p-2 w-[520px] h-[250px] border-slate-50  rounded "
          src="./images/india1.jpg"
        ></img>
      </div>
      <Aboutus />
      <Footer />
    </>
  );
};

export default Home;
