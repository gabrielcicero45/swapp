import {React, useState,useEffect} from 'react'
import CharacterList from '../components/CharacterList'
import {getPeople, getPlanet} from '../services/api'

export default function People(props) {
  const [people, setPeople] = useState([])
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [planets,setPlanets]=useState([])
  
  useEffect(()=>{
    const fetchPeople = async ()=>{
    try {
      setLoading(true)
      const result = await getPeople(page+1)
      for(var i=0; i<result.results.length; i++){
        const planeta = await getPlanet(result.results[i].homeworld[30])
        planets.push(planeta.name)
        console.log(planets)
      }
      
      setPeople(result)
      setLoading(false)
      setTotalPages(9)
    } catch (error) {
      console.log(error)
    }
  }
    fetchPeople();
  },[page])

 
  return ( 
  <CharacterList 
        loading={loading} 
        people={people}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        planets={planets}
        />
  );
}
