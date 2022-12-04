import './App.css';
import { useState } from 'react';

const textArray = [
  'Hello, Hope you are doing well!', 'Really nice day outside', 'what a beautiful morning'
];

function Carousel({items}){

  const [current, setCurrent] = useState(0);
  const isPrevDisabled = current === 0 ? true : false; 
  const isNextDisabled = current === items.length -1 ? true : false; 

  const handleNext = () => setCurrent(current + 1);

  const handlePrev = () => setCurrent(current - 1);


  return (
     <div className='carousel container'>
      <button onClick={handlePrev} disabled={isPrevDisabled}>{'<'}</button>
        {items.map((item, index) => {
          return (
            <div key={index}>
              {index === current && <h1>{item}</h1>}
            </div>
          )
        })}
      <button onClick={handleNext} disabled={isNextDisabled}>{'>'}</button>
     </div>
  )
}


function InfiniteCarousel({items}){

  const [current, setCurrent] = useState(0);
  const length = items.length;

  const handleNext = () => {
    current === length - 1 ?  setCurrent(0) :  setCurrent(current + 1);
  }

  const handlePrev = () => {
    current === 0 ?  setCurrent(items.length - 1) :  setCurrent(current - 1);
  };


  return (
     <div className='carousel container'>
      <button onClick={handlePrev} >{'<'}</button>
        {items.map((item, index) => {
          return (
            <div key={index}>
              {index === current && <h1>{item}</h1>}
            </div>
          )
        })}
      <button onClick={handleNext}>{'>'}</button>
     </div>
  )

}

function App() {
  return (
    <div className="App">
      <header className="App-header">Carousel</header>
      <Carousel items={textArray} />
      <InfiniteCarousel items={textArray} />
    </div>
  );
}

export default App;
