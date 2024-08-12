import Home from './pages/Home.jsx'
import { Route, Switch } from 'react-router-dom';
import OrderPizza from './pages/OrderPizza'
import Success from './pages/Success'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <>
     <Switch>
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
