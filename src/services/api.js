export const getPeople = async (page)=>{
    try {
        let url = `https://swapi.dev/api/people/?page=${page}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

export const getPlanet = async (id)=>{
    try {
        let url = `https://swapi.dev/api/planets/${id}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

export const getAllPlanets = async ()=>{
    try {
        const planets = []
        for(var i=0; i<6; i++){
            const result = await getPlanet(i+1)
            for(var j=0; j<result.results.length; j++){
                planets.push(result.results[j])
            }
            
          }
        return planets
    } catch (error) {
        console.log(error)
    } 
}

export const getPerson = async (id)=>{
    try {
        let url = `https://swapi.dev/api/people/${id}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

export const getStarships = async (page)=>{
    try {
        let url = `https://swapi.dev/api/starships/?page=${page}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

export const getStarship = async (id)=>{
    try {
        let url = `https://swapi.dev/api/starships/${id}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(error)
    }

}

export const getAllPeople = async ()=>{
    try {
        const people = []
        for(var i=0; i<9; i++){
            const result = await getPeople(i+1)
            for(var j=0; j<result.results.length; j++){
                people.push(result.results[j])
            }
            
          }
        return people
    } catch (error) {
        console.log(error)
    } 
}

export const getAllStarships = async ()=>{
    try {
        const starships = []
        for(var i=0; i<4; i++){
            const result = await getStarships(i+1)
            for(var j=0; j<1; j++){
                starships.push(result.results[j])
            }
            
          }
        return starships
    } catch (error) {
        console.log(error)
    } 

}




