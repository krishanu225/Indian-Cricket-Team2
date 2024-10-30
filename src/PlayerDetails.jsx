/* eslint-disable react/prop-types */
const Demo = ({ player, isDetailsShowing, setDetailsShowing }) => {
  const handleClose = () => {
    setDetailsShowing(!isDetailsShowing);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-sm  outline-none focus:outline-none">
        <div className=" w-[720px] h-[550px] ">
          <div className="rounded-lg flex-col bg-slate-800 text-slate-50 ">
            <div className="flex justify-end " onClick={handleClose}>
              <img
                className="w-10 m-2"
                src="./public/images/close.png"
                alt="Close"
              />
            </div>
            <div className="flex justify-center items-center">
              <img className=" rounded-full" src={player.image} />
            </div>
            <div className="relative p-6 flex-auto">
              <div className="">
                <b className="text-3xl flex justify-center items-center mx-4 ">
                  {" "}
                  {player.name}
                </b>
                {/* <b className="text-blue-500 bg-slate-200 text-2xl">Status : </b>
                  <b className="text-xl mx-4">{player.status}</b>
                  <b className="text-blue-500 bg-slate-200 text-2xl">
                    position :{" "}
                  </b> */}
                <div className="text-xl text-slate-400 flex justify-center items-center ">
                  {player.position}
                </div>
              </div>
              <div className="justify-between flex gap-[100px]">
                <div className="justify-between ">
                  <div className=" text-slate-50  font-semibold ">Status:</div>
                  <div className="text-slate-50 ">Born: </div>
                  <div className="text-slate-50 ">Age: </div>
                  <div className="text-slate-50 ">Team: </div>
                  <div className="text-slate-50 justify-start">Award:</div>
                </div>
                <div className="justify-end">
                  <div className="text-xl">{player.status}</div>
                  <div className="text-xl">{player.Born}</div>
                  <div className="text-xl">{player.age}</div>
                  <div className="text-xl">{player.Team}</div>
                  <div className="text-xl">{player.award}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default Demo;
