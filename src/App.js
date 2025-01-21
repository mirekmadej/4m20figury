import './App.css';
import Figura from './Figura';
import o1 from './img/o1.png';
import o2 from './img/o2.png';
import t1 from './img/t1.png';
import t2 from './img/t2.png';
import k1 from './img/k1.png';
import k2 from './img/k2.png';
import { useState } from 'react';

const figury = [
  {id:0, typ:0, nazwa:"okrag 1", zdjecie:o1, liczba:12},
  {id:1, typ:0, nazwa:"okrag 2", zdjecie:o2, liczba:33},
  {id:2, typ:1, nazwa:"trójkąt 1", zdjecie:t1, liczba:17},
  {id:3, typ:1, nazwa:"trójkąt 2", zdjecie:t2, liczba:32},
  {id:4, typ:2, nazwa:"kwadrat 1", zdjecie:k1, liczba:54},
  {id:5, typ:2, nazwa:"kwadrat 2", zdjecie:k2, liczba:61},
];


function App() {
  const [f, setF] = useState(figury);

  function dodaj(nr)
  {
    let ft = f.slice();
    ft[nr].liczba++;
    setF(ft);
  }
  function kopiuj()
  {
    let figury2 = [];
    let o = document.getElementById('kolo').checked;
    let t = document.getElementById('trojkat').checked;
    let k = document.getElementById('kwadrat').checked;
    for(let i=0; i<figury.length; i++)
    {
      if(o)
        if(figury[i].typ == 0)
          figury2 = figury2.concat(figury[i]);
      if(t)
        if(figury[i].typ == 1)
          figury2 = figury2.concat(figury[i]);
      if(k)
        if(figury[i].typ == 2)
          figury2 = figury2.concat(figury[i]);                
    }
    setF(figury2);
    console.log(o);
    console.log(figury2);
  }
  return (
    <div className="App">
      <h1>Figury</h1>
      <p>
        <input type='checkbox' defaultChecked onClick={kopiuj} id='kolo'/> koło 
        <input type='checkbox' defaultChecked onClick={kopiuj} id='trojkat'/> trójkąt
        <input type='checkbox' defaultChecked onClick={kopiuj} id='kwadrat'/> kwadrat
      </p>
      <div className='row'>
        
          {f.map((e) => <Figura key={e.id} f={e} fun={dodaj}/>)}
      
      </div>
      
    </div>
  );
}

export default App;
