
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path='/Header' element = { <Header/>}>
     
      </Route>

      <Route path="/" element={
      <>
      <Header/>
       <Home /> 
       
       </> 
       } />
      <Route path="/Checkout" element={
       <>
       <Header/>
      <Checkout />
      </>} /> 
    </Routes>
    </div>
  </BrowserRouter>



    
    

   
  );
}

export default App;
