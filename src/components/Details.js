import React from "react";

function Details({ bots, onDelete}) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this bot?')) {
      onDelete(bots.id);
    }}
  return (
    <div className="p-4 rounded-lg m-4 shadow-lg"> 
      <div className="items-center">
        <img src={bots.avatar_url} className="ml-12"/>
        <h4>Bot Name: {bots.name}</h4>
        <h5>Health: {bots.health}</h5>
        <h5>Damage: {bots.damage}</h5>
        <h5>Armor: {bots.armor}</h5>
        <h5>Bot class: {bots.bot_class}</h5>
        <div>
        <button
  className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700 transition duration-300 ease-in-out"
  onClick={handleDelete}
>
  Delete Bot
</button>
<button
  className="bg-green-300 text-gray-800 font-semibold py-2 px-4 rounded-md shadow hover:bg-green-400 transition duration-300 ease-in-out ml-4"
>
  Add to My Bots
</button>

        </div>
        
      </div>
    </div>
  );
}

export default Details;
