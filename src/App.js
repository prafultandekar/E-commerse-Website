import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <AllRoutes/>
     </BrowserRouter>
    </div>
  );
}

export default App;
