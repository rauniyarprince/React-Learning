import './App.css'
const App = () => {
const btnclicked = () => {
 console.log("button clicked")
}
// function onchange(elem){
//   console.log(elem.target.value)
// }
  return (
    <>
    <div>
      <h1>Function Explore</h1>
<button onClick={btnclicked}>Click Here 1</button>
<button onDoubleClick={() => console.log("double clicked")}>
  Click Here 2
</button>

 <button onMouseEnter={()=>{console.log("Mouse Entered")}}>Click ME 3</button>
    </div>

<input  onChange={(elem) => {console.log(elem)}}
type= "text" placeholder ="Enter Name" />

<div className='box' onMouseMove={() => console.log("Mouse move on the box")}>
</div>
</>
  )
}
export default App
