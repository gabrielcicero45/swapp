
import { useState } from 'react';
import  imgStarship1 from '../assets/nave1.png'
import  imgStarship2 from '../assets/nave2.png'

export default function Character(props) {
  
  const[openDetail,setOpenDetail]= useState(false);
  const {starship} = props;
  const handleOnClick = ()=>{
    openDetail ? setOpenDetail(false):setOpenDetail(true)
  }

  return (
  <div className=" card person-card" onClick={() => handleOnClick(starship)}>
        <div className="person-image-container">
            <img alt={starship.name} src={(Math.random() * 4) === 0 || (Math.random() * 4) === 3? imgStarship1:imgStarship2} className="person-image"/>
        </div>
        <div className="card-body">
            <div className="card-top">
                <h3> {starship.name}</h3>
            </div>
            <div className="card-bottom">
                <div className="person-type">
                
                </div>
            </div>
        </div>
     {openDetail && <div><ul>
        <li>Apareceu em {starship.films.length} filmes</li>
        <li>{starship.passengers === 0 ? ('Nenhum passageiro'):
        (starship.passengers === 1 ?  (`${starship.passengers} passageiro`) : (`${starship.passengers} passageiros`))}</li>
        <li>{starship.pilots.length === 0 ? ('Nenhum piloto'):
        (starship.pilots.length === 1 ?  (`${starship.pilots.length} piloto`) : (`${starship.pilots.length} pilotos`))}</li>
        <li>{starship.length} metros de tamanho</li>
     </ul>
        
        </div>}
   </div>
  )
}