import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

function Home() {
  const history = useHistory();

  const handleOrderPizza = () => {
    history.push("/OrderPizza");
  }

  return (
   <div className='mainContent'>
    <h2>Teknolojik Yemekler</h2>
    <h1>KOD ACIKTIRIR, PIZZA DOYURUR</h1>
    <Button color="warning" onClick={handleOrderPizza}>ACIKTIM</Button>
    </div>
  )
}

export default Home