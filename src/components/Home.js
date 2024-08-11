import React, { useEffect, useState } from "react";
import Details from "./Details";

function Home() {
  const url = "https://bot-batllr-backend.vercel.app/bots";
  const [bots, setBots] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);
  const handleDelete = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((bot) => bot.id !== id));
    });
  };
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  const filteredBots = selectedClass
    ? bots.filter((bot) => bot.bot_class === selectedClass)
    : bots;

  const DisplayBot = filteredBots.map((bot) => (
    <Details key={bot.id} bots={bot} onDelete={handleDelete}/>
  ));
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-20">
        ALL BOTS
      </h2>
      <div className="text-center mb-6">
        <label htmlFor="classFilter" className="mr-4 font-medium">
          Select Bot:
        </label>
        <select
          id="classFilter"
          value={selectedClass}
          onChange={handleClassChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Support">Support</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center">{DisplayBot}</div>
    </div>
  );
}

export default Home;
