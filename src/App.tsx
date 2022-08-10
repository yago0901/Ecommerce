import { Route, Routes } from 'react-router-dom';

import NavScroll from './components/NavBar';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <NavScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>

  );
}

export default App;
