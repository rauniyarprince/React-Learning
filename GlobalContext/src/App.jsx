import './App.css'
import Child from './Child'
import Context from './Context'
import Global from './Global'

function App() {
  return (
    <>
      <Context.Provider value="passing from globally">
        <Child />
        <Global/>
      </Context.Provider>
    </>
  )
}

export default App