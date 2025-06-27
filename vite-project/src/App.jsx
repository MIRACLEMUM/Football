import MatchList from './components/MatchList';

export default function App() {
  return (
    <div className="min-h-screen bg-secondary p-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center py-6 border-b border-gray-700 mb-4">
          <h1 className="text-4xl font-bold text-primary">⚽ GoldBet</h1>
          <p className="text-sm text-gray-400">AI-powered match predictions</p>
        </header>
        <MatchList />
      </div>
    </div>
  );
}
export default App;