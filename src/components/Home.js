import React, { useEffect, useState } from "react";
import Details from "./Details";
import Add from "./Add";
import Navbar from "./Navbar";

function Home() {
  const url = "http://localhost:3000/bots";
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);
  const DisplayBot = bots.map((bot) => <Details key={bot.id} bots={bot} />);
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-20">
        ALL BOTS
      </h2>
      <div className="flex flex-wrap justify-center">
        {DisplayBot}
        </div>
    </div>
  );
}

export default Home;
