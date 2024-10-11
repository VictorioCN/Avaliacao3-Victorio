import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

import CadastroProdutos from "./pages/CadastroProdutos.jsx"
import Login from "./pages/Login.jsx"
import Produtos from "./pages/Produtos.jsx"

import TheNavBar from './components/TheNavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheNavBar />
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='/Produtos' element={<Produtos />} />
          <Route path='/cadastroProdutos' element={<CadastroProdutos />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
