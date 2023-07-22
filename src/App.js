import logo from './logo.svg';
import './App.css';
import { Text } from "@chakra-ui/react";
import ProductListPage from './Pages/ProductListPage';
import Product from './Components/Product';
import MainRoutes from './RouterPage/MainRouter';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
     
    </div>
  );
}

export default App;
