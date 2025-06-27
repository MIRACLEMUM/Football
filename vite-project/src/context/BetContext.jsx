import { createContext, useContext, useState } from 'react';

const BetContext = createContext();

export const BetProvider = ({ children }) => {
  const [bets, setBets] = useState([]);
  const [stake, setStake] = useState(0);

  const addBet = (match, option, probability) => {
    const bet = {
      matchId: match.id,
      teams: `${match.home} vs ${match.away}`,
      option,
      probability,
      prediction: match.prediction,
    };

    // prevent duplicates
    const exists = bets.find(
      (b) => b.matchId === bet.matchId && b.option === bet.option
    );

    if (!exists) {
      setBets((prev) => [...prev, bet]);
    }
  };

  const removeBet = (matchId, option) => {
    setBets((prev) =>
      prev.filter((b) => !(b.matchId === matchId && b.option === option))
    );
  };

  return (
    <BetContext.Provider
      value={{ bets, addBet, removeBet, stake, setStake }}
    >
      {children}
    </BetContext.Provider>
  );
};

export const useBet = () => useContext(BetContext);
