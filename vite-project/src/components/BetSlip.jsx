import { useBet } from "../context/BetContext";
import { useState } from "react";

const BetSlip = () => {
  const { bets } = useBet();
  const [stake, setStake] = useState(0);

  const totalOdds = bets.reduce((acc, bet) => acc * bet.odd, 1);
  const potentialWin = (stake * totalOdds).toFixed(2);

  if (bets.length === 0) return null;

  return (
    <div className="fixed right-4 bottom-4 w-80 bg-white shadow-xl rounded-xl p-4 border z-50">
      <h2 className="text-xl font-bold mb-2">🧾 Bet Slip</h2>
      <ul className="space-y-2 max-h-40 overflow-auto">
        {bets.map((bet, i) => (
          <li key={i} className="text-sm">
            <strong>{bet.match}</strong><br />
            <span className="text-gray-600">{bet.outcome} @ {bet.odd}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Stake amount"
          className="w-full border px-2 py-1 rounded mb-2"
          value={stake}
          onChange={(e) => setStake(e.target.value)}
        />
        <div className="text-right text-sm text-gray-700">
          Potential Win: <strong>${potentialWin}</strong>
        </div>
        <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700">
          Place Bet
        </button>
      </div>
    </div>
  );
};

export default BetSlip;
