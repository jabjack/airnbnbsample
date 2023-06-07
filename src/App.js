
import './App.css';
import './main.css';

import { ReactDOM } from 'react';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import foto1 from './images/zafere.png'
import data from  './data'


//console.log(data)

const App = () =>{

  //add the array map

  const cards = data.map( item => {

    return (

      <Card
      key={item.id}
      {...item}
      />
    )

  })



  return (

        <div>

          <Navbar/>
          <Hero/>
          <section className="card-list">

              {cards}

          </section>
          
    

        </div>

  )

 
}

export default App;
