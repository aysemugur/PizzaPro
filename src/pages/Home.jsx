import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

function Home() {
  const history = useHistory();

  const handleOrderPizza = () => {
    history.push("/OrderPizza");
  }

  return (
    <div>
   <div className='mainContent'>
    <h2>Teknolojik Yemekler</h2>
    <h1>KOD ACIKTIRIR PIZZA, DOYURUR</h1>
    <Button color="warning" onClick={handleOrderPizza} className='button'>ACIKTIM</Button>
  </div>
   <div className='back-image'></div>
   </div>
  )
}

export default Home;