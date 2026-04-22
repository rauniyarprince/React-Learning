import './App.css'
import Child from './Child'
import Context from './Context'

function App() {

  return (
   <>
   <Context.Provider value = "passing from the Globally">\
    <Child/>
   </Context.Provider>
   </>
  )
}

export default App
