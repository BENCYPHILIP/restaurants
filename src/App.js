import './App.css';
import Counter from './components/Counter'
import Counters from './components/Counters'
import Header from './components/Header'
import './components/bootstrap.min.css'
import { Home } from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Restdetails from './components/Restdetails'
import {Container} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Counters/> */}
      <Header/>
        <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resturant/:id" element={<Restdetails/>}/>
        </Routes>
    </Router> 
    </Container>
    </div>
  );
}

export default App;
