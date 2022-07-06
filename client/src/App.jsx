import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FlightList } from './components/FlightList';
import { AddFlightForm } from './components/AddFlightForm';
import { SideNav } from './components/SideNav';
import { UpdateFlightForm } from './components/UpdateFlightForm';
import { DeleteFlightForm } from './components/DeleteFlightForm';
import './App.css';

function App () {
  return (
    <Router>
      <div className='d-flex'>
        <div className='App'>
          <SideNav />
        </div>
        <div className='flights ml-5 mr-5'>
          <Routes>
            <Route path='/' element={<FlightList />} />
            <Route path='/add-flight' element={<AddFlightForm />} />
            <Route path='/update-flight' element={<UpdateFlightForm />} />
            <Route path='/delete-flight' element={<DeleteFlightForm />} />
          </Routes>  
        </div>
      </div>    
    </Router>
  );
}

export default App;
 