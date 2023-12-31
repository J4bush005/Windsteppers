import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home Content/home"
import History from "./components/pages/History Content/History"
import Portal from './components/pages/Portal Content/portal';
import Store from './components/pages/Store Content/Store';
import ProductPage from './components/pages/Store Content/ProductPage';
import Coaches from './components/pages/Coaches Content/coaches';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/History' element={<History/>}/>
      <Route path = '/Portal' element={<Portal/>}/>
      <Route path = '/Coaches' element={<Coaches/>}/>
      <Route path = '/Store' element={<Store/>}/>
      <Route path = '/Page' element={<ProductPage/>}/>
    </Routes>
    </>
  );
}

export default App;
