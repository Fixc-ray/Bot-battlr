import React from "react";

function Details({ bots }) {
  return (
    <div className="p-4  rounded-lg shadow-lg ">
      <div className="items-center space-x-4">
        <img src={bots.avatar_url} className="ml-12"/>
        <h4>Bot Name: {bots.name}</h4>
        <h5>Health: {bots.health}</h5>
        <h5>Damage: {bots.damage}</h5>
        <h5>Armor: {bots.armor}</h5>
        <h5>Bot class: {bots.class}</h5>
      </div>
    </div>
  );
}

export default Details;
