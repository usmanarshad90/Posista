import {BrowserRouter  as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home/Home';

import Pricing from './components/Pricing/Pricing';
import Solutions from './components/Solution/Solutions';
import AboutUs from './components/About/AboutUs';
import Login from './components/login/login';
import SignUp from './components/signup/signup';


function App() {
  return (
    <Router> 
    {/* if i can do it like this all pages come on the header */}
                                       
      <Routes> 

        {/* if i can do it like this header individually come on the each page*/}

        <Route path="/" element={< Home/>} />   
        <Route path="/login" element={<Login/>}/>  
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path="/pricing" element={< Pricing/>} />      
        <Route path="/solution" element={< Solutions/>} />      
        <Route path="/about" element={<AboutUs/>} />      
              
        </Routes> 
        {/* for footer i can call here */}
        
        </Router>
  );
}

export default App;
