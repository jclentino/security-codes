import './styles/App.css';
import { UseState } from './components/UseState';
import { ClassState } from './components/ClassState';
import { UseReducer } from './components/UseReducer';

function App() {
  return (
    <div className="App">
      {/* <UseState name={'UseState'} /> */}
      <br />
      <hr />
      <br />
      {/* <ClassState name={'ClassState'} /> */}
      <br />
      <hr />
      <br />
      <UseReducer name={'UseReducer'} />
    </div>
  );
}

export default App;
