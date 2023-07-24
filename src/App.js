import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Rocket from './Routes/Rockets';
import Missions from './Routes/Missions';
import Profile from './Routes/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
