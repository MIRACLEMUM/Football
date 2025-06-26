// src/components/MatchCard.jsx
import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-lg font-semibold mb-2">{match.teams}</h3>
      <p className="text-sm text-gray-600">{match.date} | {match.time}</p>
      <div className="flex justify-between mt-3 text-sm">
        <span>Home: {match.odds.home}</span>
        <span>Draw: {match.odds.draw}</span>
        <span>Away: {match.odds.away}</span>
      </div>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">
        Bet Now
      </button>
    </div>
  );
};

export default MatchCard;
