import { styled } from 'styled-components';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <AppStyled className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AppStyled >
  );
}

const AppStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content:center;
  align-items: center;
`;

export default App;
