import { Routes, Route } from 'react-router-dom';
import HomePage from './assets/Pages/Homepage';
import About from './assets/Pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="/about" element={<About />} />

    </Routes>
  );
}
export default App;