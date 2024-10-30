import PlayerDetails from "./PlayerDetails";
import { useState } from "react";
import "./Index.css";

import Footer from "./Footer";
import { Link } from "react-router-dom";

const players = [
  {
    name: "Rohit Sharma",
    status: "Batsman",
    position: "Indian captain",
    Born: " April 30,1987, Bansod, Nagpur, Maharastra",
    age: "37y 153d",
    Batting_style: "Right Hand Batsman",
    Bowling_style: "Right Arm Offbreak",
    Team: "Mumbai Indians",
    parents: " Gurunath Sharma, Purnima Sharma",
    Wife: "Ritika Sajdeh",
    award:
      "Arjuna Award for Cricket, Major Dhyan Chand Khel Ratna Award for CricketArjuna Award for Cricket, Major Dhyan Chand Khel Ratna Award for Cricket",
    image: "./images/rohit.jpeg",
  },
  {
    name: "Virat Kohli",
    status: "Batsman",
    position: "Batsman",
    Born: "November 05,1988,Delhi",
    age: "35y 330d",
    Batting_style: "Right Hand Batsman",
    Bowling_style: "Right Arm Bowling",
    Team: "Royal Challengers Bangalore",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/virat.jpeg",
  },
  {
    name: "Ravindra Jadeja",
    status: "All-rounder",
    position: "Middle-Order batsman",
    Born: "December 06,1988,Navagam-Khed,saurashtra",
    age: "35y 229d",
    Batting_style: "Left Hand Batsman",
    Bowling_style: "Slow Left Arm Orthodox",
    Team: "Chennai Super Kings",
    parents: "Anirudh Jadeja , Lavina Jadeja",
    Wife: " Rivaba Jadeja",
    award:
      "Sir Garfield Sobers Trophy (2017) , ICC Test Team of the Year , Rajiv Gandhi Khel Ratna (2019)",
    image: "./images/jadeja.jpeg",
  },
  {
    name: "Subhman Gill",
    status: "Batsman",
    position: "Openning-Batsman",
    Born: "September 08, 1999, Fazilka, Punjab",
    age: "25y 22d",
    Batting_style: "Right Hand Batsman",
    Bowling_style: "Right Arm Orthodox",
    Team: "Gujrat Titans",
    parents: " Lakhwinder Singh Gill , Kulwinder Kaur Gill",
    Wife: " UnMarried ",
    award:
      "ICC U19 World Cup Player of the Tournament (2018) , Emerging Player of the Season (2020-21)",
    image: "./images/gill.jpeg",
  },
  {
    name: "Md. Siraj",
    status: "Bowler",
    position: "Right_arm Bowler",
    Born: "March 13, 1994, Hyderabad",
    age: "30y 201d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right Arm Fast",
    Team: "Royal Challengers Bangalore",
    parents: "Mohammad Ghouse and Shabnam Siraj",
    Wife: "UnMarried",
    award:
      "BCCI's Best Emerging Player Award (2019) , Player of the Match awards in various international matches, especially noted for his performances in Tests and ODIs.",
    image: "./images/siraj.jpeg",
  },
  {
    name: "Shreyas Iyer",
    status: "Batsman",
    position: "Middle-Order Batsman",
    Born: "December 06, 1994, Mumbai",
    age: "29y 299d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Offbreak, Legbreak Googly",
    Team: "Kolkata Knight Riders",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/iyer.jpeg",
  },
  {
    name: "yashasvi jaiswal",
    status: "Batsman",
    position: "Openning-Batsman",
    Born: "December 28, 2001, Suriyawan, Bhadohi, Uttar Pradesh",
    age: "22y 277d",
    Batting_style: "Left Hand Bat",
    Bowling_style: " Legbreak",
    Team: "Rajastan Royals",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/jaiswal.jpeg",
  },
  {
    name: "Kuldeep Yadav",
    status: "Bowler",
    position: "left_arm spin Bowler",
    Born: "December 14, 1994, Kanpur, Uttar Pradesh",
    age: "29y 291d",
    Batting_style: "Left Hand Bat",
    Bowling_style: " Left Arm Wrist Spin",
    Team: "Delhi Capitals",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/kuldeep.jpeg",
  },
  {
    name: "Jasprit Bumrah",
    status: "Bowler",
    position: "Right_arm Fast  Bowler",
    Born: "December 06,1993, Amhedabad",
    age: "30y 299d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Fast",
    Team: "Mumbai Indians",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/bumrah.jpeg",
  },
  {
    name: "Ravichandra ashwin",
    status: "Bowler",
    position: "Right_arm spin Bowler",
    Born: "December 06,1993, Amhedabad",
    age: "30y 299d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Fast",
    Team: "Mumbai Indians",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/ashwin.jpeg",
  },
  {
    name: "Akash Deep",
    status: "Bowler",
    position: "Right_arm spin Bowler",
    Born: "December 15, 1996, Dehri, (Rotas), Bihar",
    age: "27y 290d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Fast Medium",
    Team: "Royal Challengers Bangalore",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/akash.jpeg",
  },
  {
    name: "Hardik Pandya",
    status: "All-Rounder",
    position: "Right_arm All-rounder",
    Born: "October 11, 1993, Choryasi, Gujarat",
    age: "30y 355d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Fast Medium",
    Team: "Mumbai Indians",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/hardik.jpeg",
  },
  {
    name: "Mohammed Shami ",
    status: "Bowler",
    position: "Right_arm Bowler",
    Born: "September 03, 1990, Amroha, Uttar Pradesh",
    age: "34y 27d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Fast",
    Team: "Gujrat Titans",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/shami.jpeg",
  },
  {
    name: "Rinku Singh",
    status: "Batsman",
    position: "Right_arm spin Bowler",
    Born: "September 03, 1990, Amroha, Uttar Pradesh",
    age: "26y 354d",
    Batting_style: "Left Hand Bat",
    Bowling_style: "Right arm Offbreak",
    Team: "Kolkata Knights Riders",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/rinku.jpeg",
  },
  {
    name: "Sachin Ramesh Tendulkar",
    status: "Batsman",
    position: "Right_arm Batsman",
    Born: "April 24, 1973, Bombay (now Mumbai), Maharashtra",
    age: "51y 159d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Offbreak, Legbreak Googly",
    Team: "Mumbai Indians",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/sachin.jpeg",
  },
  {
    name: "Mahendra Singh Dhoni",
    status: "Wicket_keeper",
    position: "Right_arm Batsman",
    Born: "July 07, 1981, Ranchi, Bihar (now Jharkhand)",
    age: "43y 85d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Medium",
    Team: "Chennai Super Kings",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "Anushka Sharma",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/dhoni.jpeg",
  },
  {
    name: "Sikhar Dhawan",
    status: "Batsman",
    position: "Left hand Batsman",
    Born: "5 December 1985 in Delhi",
    age: "39y 315d",
    Batting_style: "Left Hand Bat",
    Bowling_style: "Right arm Fast",
    Team: "Punjab Kings",
    parents: "Sunaina and Mahendra Pal Dhawan ",
    Wife: "Ayesha Mukherjee,",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/dhawanjpeg.jpeg",
  },
  {
    name: "Mayank Prabhu Yadav",
    status: "Bowler",
    position: "Right_arm Bowler",
    Born: "July 07, 1981, Ranchi, Bihar (now Jharkhand)",
    age: "22y 105d",
    Batting_style: "Right Hand Bat",
    Bowling_style: "Right arm Fast",
    Team: "Lucknow Super Giants",
    parents: " Prem Nath Kohli, Saroj Kohli",
    Wife: "UnMarried",
    award:
      "Padma Shri (2017), Wisden Cricketers of the Year (2019), ICC Men's ODI Cricketer of the Year (2012), Arjuna Award for Cricket (2013) ,Sir Garfield Sobers Trophy (2018) , Major Dhyan Chand Khel Ratna Award for Cricket (2018), Wisden Leading Cricketer in the World (2018, 2017), ICC Male Cricketer of the Decade  (2020)",
    image: "./images/mayank.jpeg",
  },
];
const PlayerPage = () => {
  const [details, setDetails] = useState({});
  const [isDetailsShowing, setDetailsShowing] = useState(false);
  const handlePlayer = (player) => {
    setDetails(player);
    setDetailsShowing(true);
  };
  return (
    <>
      {isDetailsShowing && (
        <div>
          <PlayerDetails
            player={details}
            isDetailsShowing={isDetailsShowing}
            setDetailsShowing={setDetailsShowing}
          />
        </div>
      )}

      <div className="cursor-pointer">
        <div className=" text-3xl flex justify-center items-center text-slate-50 bg-slate-900">
          <b>
            <Link to="/">Team India</Link>
          </b>
        </div>
        <div className=" text-xl flex justify-center items-center text-slate-500 bg-slate-900">
          Explore your favourite players
        </div>
        <div className="flex flex-row flex-wrap justify-between w-screen h-full bg-slate-900 text-slate-50  ">
          {players &&
            players.map((player, index) => (
              <div key={index} className="hover:bg-slate-800  border-1 border-slate-800 justify-center ">
                <img
                  className="border-red-50 m-10 rounded-full "
                  src={`/${player.image}`}
                  alt="Rohit Sharma"
                />
                <div className=" justify-center items-center">
                  <div className="flex justify-center items-center">
                    <b>Name: </b>
                    {player.name}
                  </div>
                  <div className="flex justify-center items-center text-slate-400">
                    <b>Status: </b>
                    {player.status}
                  </div>
                  <div className="flex justify-center items-center text-slate-300">
                    {player.position}
                  </div>
                  <div className="flex justify-center items-center text-blue-600">
                    <b
                      className="cursor-pointer"
                      onClick={() => handlePlayer(player)}
                    >
                      {" "}
                      View Profile
                    </b>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PlayerPage;
