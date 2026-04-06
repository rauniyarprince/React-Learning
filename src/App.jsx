import './App.css'
import Tailwindex from './Component/Tailwindex';
import Navbar from './Component/Navbar';
import Counter from './Component/Counter';
import Cards from './Component/Cards';


function App() {
  return (
    <>
    <Navbar/>
    {/* <Counter/> */}
    <Cards/>
     <Cards username ='Prince Rauniyar' Designation='software Developer'/>
      <Cards username ='Kartik Dubey' Designation='Frontend Developer'/>
       <Cards username ='Pranshu Verma' Designation='Backend Developer'/>
        <Cards/>
        {/* <Tailwindex/> */}
        
    </>
  )
}

export default App;