import { useState } from 'react';
import  imgPerson from '../assets/stormtrooper.png'
import	luke from '../assets/luke-skywalker.svg'
import darthVader from '../assets/darth-vader.svg'
import c3po from '../assets/c3po.png'
import yoda from '../assets/yoda.png'
import r2d2 from '../assets/r2d2.png'
import chew from '../assets/chew.png'
import leia from '../assets/leia.png'
import obi from '../assets/obiwan-kenobi.png'


export default function Character(props) {
  const[openDetail,setOpenDetail]= useState(false);

  const handleOnClick = ()=>{
    openDetail ? setOpenDetail(false):setOpenDetail(true)
  }
  const {person, planet} = props;
  
  return (
    <div className=" card person-card" onClick={handleOnClick}>
   <div className="person-image-container">
        <img alt={person.name} src={
        person.name === 'Luke Skywalker' ? luke: 
        person.name === 'Darth Vader' ? darthVader:
        person.name === 'C-3PO' ? c3po:
        person.name === 'Yoda' ? yoda:
        person.name === 'R2-D2' ? r2d2:
        person.name === 'Chewbacca' ? chew:
        person.name === 'Leia Organa' ? leia:
        person.name === 'Obi-Wan Kenobi' ? obi:
        imgPerson} className="person-image"/>
    </div>
    <div className="card-body">
        <div className="card-top">
            <h3> {person.name}</h3>
        </div>
        <div className="card-bottom">
            <div className="person-type">
            {openDetail && <div>
      <ul>
        <li>Filmes: {person.films.length} filmes</li>
        <li>Altura e Peso: {person.height} cm /{person.mass} kg</li>
        <li>Nascimento: Ano {person.birth_year}</li>
        <li>Planeta de Origem: {planet}</li>
        
     </ul>
        
        </div>}
            </div>
        </div>
    </div>
</div>
  )
}