import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div className="keyWrapper">
        <button className="keyC">C</button>
        <button className="keyD">D</button>
        <button className="keyE">E</button>
        <button className="keyF">F</button>
        <button className="keyG">G</button>
        <button className="keyA">A</button>
        <button className="keyB">B</button>
      </div>
    </Fragment>
  );
}

export default App;
