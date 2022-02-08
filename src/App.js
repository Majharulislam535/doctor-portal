import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Appointment from './Page/Appointment/Appointment';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
