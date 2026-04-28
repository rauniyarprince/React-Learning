import './App.css'
import Greeting from './Component/greeting';
import PropsDestruct from './Component/PropsDestruct';

function App() {
  return (
    <>
      <PropsDestruct name="Ananya " role="Frontend Developer" />
      <PropsDestruct name="Kartik " role="Backend Developer" />
      <PropsDestruct name="Pranshu " role="JavaFullstack Developer" />
      <Greeting/>
    </>
  )
}

export default App;