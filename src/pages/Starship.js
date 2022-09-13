import {React, useState,useEffect} from 'react'
import StarshipList from '../components/StarshipList'
import {getStarships} from '../services/api'

export default function Starship() {
  const [starship, setStarship] = useState([])
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  

  useEffect(()=>{
    const fetchStarship = async ()=>{
        try {
          setLoading(true)
          const result = await getStarships(page+1)
          setStarship(result)
          setLoading(false)
          setTotalPages(4)
        } catch (error) {
          console.log(error)
        }
      }
    fetchStarship();
  },[page])

  return ( 
    <StarshipList 
        loading={loading} 
        starship={starship}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        />
    
        
  );
}
