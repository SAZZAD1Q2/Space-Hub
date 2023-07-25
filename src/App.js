import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Missions from './Routes/Missions';
import Profile from './Routes/Profile';
import Rockets from './Routes/Rockets';
import { fetchRockets } from './Redux/Rockets/rocket';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
