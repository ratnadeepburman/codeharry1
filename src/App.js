import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

// let a = "Ratna deep- this name is variable."
function App() {
  return (
    // <div className="blank">
    //   <b>
    //     Lovely
    //   </b>
    // </div>

    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <div className='class1'>
    //   <h1>
    //     Now i am calling to decalred variable {a}.
    //   </h1>
    // </div>
    // </>

   <div>
    <Navbar title="Dynamic Tite" home="My Home" />
    <TextForm heading="Enter your text to analyze."/>
   </div>
  );
}


export default App;
