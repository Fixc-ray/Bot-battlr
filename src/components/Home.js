import React, { useEffect, useState } from "react";
import Details from "./Details";
import Add from "./Add";

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
    <div className="flex flex-wrap justify-center ">
     
      {DisplayBot}
    </div>
  );
}

export default Home;
