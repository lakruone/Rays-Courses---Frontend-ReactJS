import './App.css';
import Layout from './components/Layout/Layout';
import Courses from './containers/Courses';

function App() {
  return (
    <div className="App">
      <Layout>
        <Courses/>
      </Layout>
    </div>
  );
}

export default App;
