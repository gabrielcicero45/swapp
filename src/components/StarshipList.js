import React from 'react'
import Pagination from './Pagination'
import Starship from './Starship';

export default function StarshipList(props) {
    const { starship, loading, page, setPage, totalPages } = props;
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
          {starship.results && starship.results.map((starship, index) => {
            return (
                <Starship key={index} starship={starship} />
            );
          })}
        </div>)}
    </div>
  )
}
