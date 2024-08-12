
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'

function App() {
  

  return (
    <>
     <Switch>
      <Route path="/">
      <div className='mainContent'></div>
        <h1>KOD ACIKTIRIR, PIZZA DOYURUR</h1>
        <button>ACIKTIM</button>

      </Route>
      <Route path="/OrderPizza">
        <p>Home</p>
      </Route>
      <Route path="/Success">
        <p>Home</p>
      </Route>
     </Switch>
  
    </>
  )
}

export default App
