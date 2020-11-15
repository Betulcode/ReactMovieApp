import './App.css';
import {CardList} from "./components/CardList"
import { SearchBox } from './components/SearchBox';


function App() {
  return (
    <div className="App">
      MOVIES
      <SearchBox/>
      <CardList/>
    </div>
  );
}

export default App;
