import React, { useState } from "react";

function Add() {
  const [bots, setBots] = useState([]);

  const [name, setName] = useState("");
  const [health, setHealth] = useState("");
  const [damage, setDamage] = useState("");
  const [armor, setArmor] = useState("");
  const [bot_class, setBotClass] = useState("");
  const [catchphrase, setCatchphrase] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBot = {
      name,
      health: parseInt(health),
      damage: parseInt(damage),
      armor: parseInt(armor),
      bot_class,
      catchphrase,
      avatar_url,
    };

    fetch("https://bot-batllr-backend.vercel.app/bots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBot),
    })
      .then((res) => res.json())
      .then((bot) => {
        
        setBots([bot, ...bots]);
      })
      .catch((error) => {
        console.error("Error adding bot:", error);
      });

    setName("");
    setHealth("");
    setDamage("");
    setArmor("");
    setBotClass("");
    setCatchphrase("");
    setAvatarUrl("");
  };

  return (
    <div className="p-6 w-80 mx-auto bg-white mt-20">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        ADD A NEW BOT
      </h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Health:
        </label>
        <input
          type="number"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Damage:
        </label>
        <input
          type="number"
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Armor:
        </label>
        <input
          type="number"
          value={armor}
          onChange={(e) => setArmor(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Class:
        </label>
        <input
          type="text"
          value={bot_class}
          onChange={(e) => setBotClass(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Avatar URL:
        </label>
        <input
          type="text"
          value={avatar_url}
          onChange={(e) => setAvatarUrl(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          Add Bot
        </button>
      </form>
    </div>
  );
}

export default Add;
