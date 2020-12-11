import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts, importantLenght}) => {
    return (
         <div className="app-header d-flex">
             <h1>Anar Soltanov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}.<br />Добавлено в избранное {importantLenght} </h2>
         </div>
    )
}

export default AppHeader;