import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FlightList } from './components/FlightList'
import { FlightForm } from './components/FlightForm'
import { SideNav } from './components/SideNav';
import './App.css';

function App () {
  return (
    <Router>
      <div className='d-flex'>
        <div className='App'>
          <SideNav />
        </div>
        <div className='flights ml-3 mr-3'>
          <Routes>
            <Route path='/' element={<FlightList />} />
            <Route path='/add-flight' element={<FlightForm />} />
          </Routes>  
        </div>
      </div>    
    </Router>
  );
}

export default App;
 