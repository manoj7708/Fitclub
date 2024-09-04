import './App.css';

import Hero from './components/Hero/Hero';
import Programs from './components/Programms/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Founder from './components/Founder/Founder';
 import  Login  from './components/Login/Login';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
// import Login1 from './components/Login/Login1';

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
         <Hero/>
       <Programs/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <Join/>
       <Founder/> 
       <Footer/>  
       {/* <Login/> */}
 </div> 
   
  );
};

export default App;

