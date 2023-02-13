// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import './App.css'
import "./styles/bootstrap/css/bootstrap.min.css";
import "./styles/CustomisedStyle.css";
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Header/>

    </header>
  
    <div>home app</div>
    <footer className="footer">
    <Footer></Footer>
    </footer>
   
    </>
  )
}

export default App
