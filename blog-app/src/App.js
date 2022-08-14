import React, { useRef, useState } from "react";
import Carousel from 're-carousel'

function App() {
  return (
    <div>
      <Carousel auto>
    <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
    <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
    <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
  </Carousel>
    </div>
  );
}

export default App;
