import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage'; // Assure-toi d'avoir importé cette page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
        </Router>
    );
}

export default App;
