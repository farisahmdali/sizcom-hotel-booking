import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import PoolSuite from './pages/PoolSuite';
import SmallRoom from './pages/SmallRoom';
import Apartment from './pages/Apartment';
import BigApartment from './pages/BigApartment';
import Search from './pages/Search';
import Admin from './pages/Admin';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route index element={<Index/>}/>
        <Route path='/rooms/pool-suite' element={<PoolSuite/>}/>
        <Route path='/rooms/small-room' element={<SmallRoom/>}/>
        <Route path='/rooms/apartment' element={<Apartment/>}/>
        <Route path="/rooms/big-apartment" element={<BigApartment/>}/>
        <Route path='/search/:checkin/:checkout' element={<Search/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminPanel' element={<AdminPanel/>}/>
      </Routes>
    </div>
  );
}

export default App; 
