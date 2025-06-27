import { useBet } from '../context/BetContext';

export default function BetSlip() {
  const { bets = [], removeBet, stake, setStake } = useBet();

  // Safely calculate estimated winnings
  const totalProbability = Array.isArray(bets)
    ? bets.reduce((acc, bet) => acc + bet.probability, 0)
    : 0;

  const estimatedWin = ((totalProbability / 100) * stake).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-24">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        🧾 Your Bet Slip
      </h1>

      {bets.length === 0 ? (
        <p className="text-gray-500">
          No bets selected. Go back to pick matches.
        </p>
      ) : (
        <div className="space-y-4">
          {bets.map((bet, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{bet.teams}</h3>
                <p className="text-sm text-gray-600">
                  Picked: <span className="font-medium">{bet.option}</span> —{' '}
                  {bet.probability}%
                </p>
                <p className="text-sm text-green-600">
                  Predicted: {bet.prediction}
                </p>
              </div>
              <button
                onClick={() => removeBet(bet.matchId, bet.option)}
                className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Stake Input */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your stake (₦)
            </label>
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="e.g. 1000"
            />
            <p className="mt-2 text-green-700 font-semibold">
              Estimated Winnings: ₦{stake > 0 ? estimatedWin : '0.00'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
