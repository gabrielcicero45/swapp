import React from 'react'
import Pagination from './Pagination'
import Character from './Character';

export default  function CharacterList(props) {
    const { people, loading, page, setPage, totalPages,planets } = props;
    
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    const onRightClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }
    
  return (
    <div>
      <div className="list-header">
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (<div>Carregando...</div>):(
      <div className="list-grid">
          {people.results && people.results.map( (person, index) => {
            return (
                <Character key={index} person={person} planet={planets[index]} />
            );
          })}
        </div>)}
    </div>
  )
}
