import React from "react";

const matches = [
  {
    id: 1,
    home: "Chelsea",
    away: "Arsenal",
    time: "26 June, 7:30 PM",
    odds: { home: 2.1, draw: 3.3, away: 2.9 },
  },
  {
    id: 2,
    home: "Barcelona",
    away: "Real Madrid",
    time: "26 June, 9:00 PM",
    odds: { home: 2.5, draw: 3.1, away: 2.4 },
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Matches</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2"
          >
            <div className="text-gray-500 text-sm">{match.time}</div>
            <div className="text-xl font-semibold">
              {match.home} vs {match.away}
            </div>
            <div className="flex justify-between gap-2 mt-4">
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-bold py-2 px-4 rounded-xl">
                {match.odds.home} 🏠
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-xl">
                {match.odds.draw} ⚖️
              </button>
              <button className="bg-red-100 hover:bg-red-200 text-red-800 font-bold py-2 px-4 rounded-xl">
                {match.odds.away} 🛫
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
