import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return(
      <div>
        <Card 
          key={item.key}
          image={item.image} 
          location={item.location.toUpperCase()}
          googleMapsUrl={item.googleMapsUrl}
          title={item.title}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          
          />
        </div>
    )
  })
    return (
      <div>
       <Navbar />
       {cards}
      </div>
    )
}
export default App;