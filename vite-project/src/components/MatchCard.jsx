export default function MatchCard({ match }) {
  const time = new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white p-4 rounded-xl shadow-md my-3">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{match.home} vs {match.away}</h3>
          <p className="text-sm text-gray-500">Time: {time}</p>
          <p className="text-sm text-green-600">Predicted: {match.prediction}</p>
        </div>
        <div className="flex gap-2">
          {Object.entries(match.probabilities).map(([key, value]) => (
            <button
              key={key}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200"
            >
              {key} - {value}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
