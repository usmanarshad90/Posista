import {BrowserRouter  as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import PageHeader from './components/PageHeader';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Solutions from './components/Solutions';
import AboutUs from './components/AboutUs';
import Login from './components/login/login';
import SignUp from './components/signup/signup';


function App() {
  return (
    <Router> 
    {/* if i can do it like this all pages come on the header */}
      <PageHeader/>                                  
      <Routes> 

        {/* if i can do it like this header individually come on the each page*/}

        <Route path="/" element={< Home/>} />   
        <Route path="/login" element={<Login/>}/>  
        <Route path="/signup" element={<SignUp/>} /
        <Route path="/pricing" element={< Pricing/>} />      
        <Route path="/solution" element={< Solutions/>} />      
        <Route path="/about" element={<AboutUs/>} />      
              
        </Routes> 
        {/* for footer i can call here */}
        <Footer/>
        </Router>
  );
}

export default App;
