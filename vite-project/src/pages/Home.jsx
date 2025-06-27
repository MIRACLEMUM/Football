import matches from '../data/matches.json';
import MatchCard from '../components/MatchCard';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Today's Matches</h2>
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}
