import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
