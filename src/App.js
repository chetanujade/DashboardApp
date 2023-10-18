import logo from './logo.svg';
import './App.css';
import Earning from './Components/Earning';
import Overview from './Components/Overview';
import Customers from './Components/Customers';
import Product from './Components/Product';
import Search from './Components/Search';
import SideMenu from './Components/SideMenu';
import Hello from './Components/Hello';


function App() {
  return (
    <div className="App">
      <Earning/>
      <Overview/>
      <Customers/>
      <Product/>
      <Search/>
      <SideMenu/>
      <Hello/>

    </div>
  );
}

export default App;
