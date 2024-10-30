import Footer from "./Footer";


const History = () => {
  return (
    <>
  
      <div className="text-slate-50">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
       

        <div> .</div>
      </div>
      
      <div className=" flex items-center">
        <div className=" p-3 text-2xl">
          <b>History</b>
        
            The British brought cricket to India in the early <b>1700s</b>, with
            the first cricket match played in <b>1721</b>. The East India
            Company managed local communities through cricket. In <b>1848</b>,
            the Parsi community in Mumbai formed the Oriental Cricket Club, the
            first cricket club established by Indians.
          
            By the early <b>1900s</b>, Indians were playing for the England
            cricket team,{" "}
            <b>leading to the creation of the Ranji Trophy and Duleep Trophy</b>
            . In 1911, an Indian mens cricket team, captained by Bhupinder Singh
            of Patiala, embarked on their first official tour of the British
            Isles.
          </div>
          
          <div>
            <img className="h-64 w-[1200px] rounded-ss-xl" src="./images/indiateam.jpeg"></img>
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default History
