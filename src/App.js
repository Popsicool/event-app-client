import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <div className='app'>
      <Routes>
      <Route path="/" exact = "true" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
