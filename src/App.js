import logo from './logo.svg';
import './App.css';
import StudentApp from './Components/StudentApp';
import { Route, Routes } from 'react-router-dom';
import View from './Components/View';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <StudentApp/>
      <Routes>
        <Route path={'/view'} element={<View/>}></Route>
        <Route path={'/add'} element={<Add/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
