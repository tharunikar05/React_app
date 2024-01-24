import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/functionalcomponents/home';
import ABOUT from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
import Experience from './components/functionalcomponents/Experience';
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
      <Route path="/Experience" element={<Experience/>}></Route>
     </Routes>
       </BrowserRouter>
     {/* <h1> <PropsComponent name="HELLO EVERYONE" course="MERN"></PropsComponent></h1> */}
      <header className="App-header"> 
       {/* <StateComponent/> */}
        <img src={logo} className="App-logo" alt="logo" />
       <p>
           Edit <code>src/App.js</code> and save to reload.
        </p>
         <a
            className="App-link" 
           href="https://reactjs.org"
          target="_blank" 
          rel="noopener noreferrer" 
         >
           Learn React 
         </a>
      </header>
      <footer style={{ backgroundColor: '#D6E2E2', color: 'black', padding: '20px', textAlign: 'center' }}>
    <p>&copy; 2024 React app. All rights reserved.</p>
    <p>Contact: React@exampleGmail.com | Phone: +91-934-567-8901</p>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="/privacy-policy" >Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
    </ul>
</footer>

    </div>
  );
}

export default App;
