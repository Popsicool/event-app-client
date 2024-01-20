import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Verification } from './pages/Verification';
import { ResetPassword } from './pages/ResetPassword';
import { ChangePassword } from './pages/ChangePassword';
import "./App.css"
import { Reveal } from './components/Reveal';


function App() {
  return (
    <div className="App">
      <div className='app'>
        <Reveal>
          <Routes>
            <Route path="/" exact = "true" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/verify" element={<Verification/>} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
          </Routes>
        </Reveal>
      </div>
    </div>
  );
}

export default App;
