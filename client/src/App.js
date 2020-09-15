import React from 'react';
import Stores from "./pages/Stores";
import Nav from "./components/Nav";
import RestaurantsContainer from "./components/RestaurantsContainer"

function App() {
  return (
    <div>
      <Nav />
      <Stores />
      <RestaurantsContainer />
    </div>
  )
}


export default App;