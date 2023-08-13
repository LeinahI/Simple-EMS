import { styled } from 'styled-components';

import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {
  return (
    <AppStyled className="App">

      {/*  <Homepage /> */}
       {<Login />}
      {/* {<Register />} */}

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
