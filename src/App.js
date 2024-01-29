import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/functionalcomponents/home';
import ABOUT from './components/functionalcomponents/About';
import Login from './components/Loginform/Login';
import Memo from './components/functionalcomponents/memo';
import Reference from './components/functionalcomponents/Reference';
import Callback from './components/functionalcomponents/callback';
import Signup from './components/functionalcomponents/Signup';
// import PropsComponent from './components/functionalcomponents/PropsComponent';
// import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
function App() {
  return (
    <div className="App">
     <BrowserRouter> <NavBar></NavBar>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/ABOUT" element={<ABOUT/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Memo" element={<Memo/>}></Route>
      <Route path="/Ref" element={<Reference/>}></Route>
      <Route path="/Callback" element={<Callback/>}></Route>
      <Route path="/Signup" element={<Signup />} /> 

     </Routes>
       </BrowserRouter>
     {/* <h1> <PropsComponent name="HELLO EVERYONE" course="MERN"></PropsComponent></h1> */}
      <header className="App-header"> 
       <h1>WEBSITE</h1>
      </header>
      <footer style={{ backgroundColor: '#D6E2E2', color: 'black', padding: '20px', textAlign: 'center' }}>

    <p>&copy; 2024 React app. All rights reserved.</p>
    <p>Contact: tharunika1305@gmail.com | Phone: +91-9360062187</p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="https://www.linkedin.com/in/tharunika-r-617101225/" >Linkedin</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
    </ul>
</footer>

    </div>
  );
}

export default App;
