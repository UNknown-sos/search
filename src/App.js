import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import HomePage from "./components/homePage/homePage";
import MansProduct from "./components/manProductPage/mansProduct";
import {womanData} from "./fakeData";
import WomanProduct from "./components/womanProducts/womanProducts";
import KidProduct from "./components/kidProducts/kidProducts";
import Header from "./components/header/header";

function App() {
    const [currentPage,setCurrentPage] = useState('home')
    const [search,setSearch] = useState('')
    
    if(currentPage === 'home'){
        return <HomePage setCurrentPage = {setCurrentPage}/>
    }else if(currentPage === 'man'){
        return <MansProduct currentPage = {setCurrentPage}/>
    }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
