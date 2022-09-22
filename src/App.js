import './styles/App.css';
import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';

function App() {
  return (
    <div className="App">
      <UseState />
      <br />
      <hr />
      <br />
      <ClassState />
    </div>
  );
}

export default App;
