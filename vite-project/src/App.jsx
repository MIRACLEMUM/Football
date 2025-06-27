import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BetSlip from './pages/BetSlip';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/betslip" element={<BetSlip />} />
        </Routes>

        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
