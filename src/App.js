import logo from './logo.svg';
import './App.css';
import StudentApp from './Components/Books';
import { Route, Routes } from 'react-router-dom';
import View from './Components/View';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <StudentApp />
      <Routes>
        <Route path='/View' element={<View />} />
        <Route path='/Add' element={<Add data={{ id: '', name: '', grade: '' }}
          method='post' />} />
      </Routes>
    </div>
  );
}

export default App;
