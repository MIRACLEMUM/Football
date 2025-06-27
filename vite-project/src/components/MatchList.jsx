import { useState } from 'react';
import matches from '../data/matches.json';
import MatchRow from './MatchRow';
import Tabs from './Tabs';
import FilterTabs from './FilterTabs';

export default function MatchList() {
  const [currentTab, setCurrentTab] = useState('Upcoming');
  const [currentFilter, setCurrentFilter] = useState('1X2');

  // Filter by tab (Upcoming, Finished, League)
  const filteredMatches = matches.filter((match) => {
    if (currentTab === 'Upcoming') return !match.score;
    if (currentTab === 'Finished') return !!match.score;
    return true;
  });

  // In future: you can use currentFilter to change match display logic

  return (
    <div>
      <Tabs currentTab={currentTab} onTabChange={setCurrentTab} />
      <FilterTabs currentFilter={currentFilter} onFilterChange={setCurrentFilter} />

      <div className="space-y-4">
        {filteredMatches.length === 0 ? (
          <p className="text-center text-gray-400">No matches to show.</p>
        ) : (
          filteredMatches.map((match) => (
            <MatchRow key={match.id} match={match} />
          ))
        )}
      </div>
    </div>
  );
}
