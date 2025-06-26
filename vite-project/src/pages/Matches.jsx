// src/pages/Matches.jsx
import React from "react";
import MatchCard from "../components/MatchCard";

const Matches = () => {
  const dummyMatches = [
    {
      id: 1,
      teams: "Chelsea vs Arsenal",
      date: "June 30, 2025",
      time: "8:00 PM",
      odds: { home: 1.8, draw: 3.2, away: 2.5 },
    },
    {
      id: 2,
      teams: "Real Madrid vs Barcelona",
      date: "July 1, 2025",
      time: "9:00 PM",
      odds: { home: 2.0, draw: 3.5, away: 2.2 },
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Live Matches</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dummyMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
