import './App.css';
import Counter from './components/Counter'
import Counters from './components/Counters'
import Header from './components/Header'
import './components/bootstrap.min.css'
import { Home } from './components/Home';
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Counters/> */}
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
