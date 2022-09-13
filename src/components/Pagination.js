import React from "react";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <div className="pagination-container">
            <button className="border border-0 me-3 " onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} de {totalPages}</div>
            <button className="border border-0 ms-3" onClick={onRightClick}><div>▶️</div></button>
        </div>
    )
}

export default Pagination;