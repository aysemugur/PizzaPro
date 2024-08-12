
import { Route, Switch } from 'react-router-dom';
import './App.css'
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'

function App() {
  

  return (
    <>
     <Switch>
      <p>Welcome</p>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/OrderPizza">
        <OrderPizza />
      </Route>
      <Route path="/Success">
        <Success />
      </Route>
     </Switch>
  
    </>
  )
}

export default App
