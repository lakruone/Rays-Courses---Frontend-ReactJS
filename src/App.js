import './App.css';
import Cover from './containers/cover';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Cover/>
      </div>
    </BrowserRouter>

  );
}

export default App;
