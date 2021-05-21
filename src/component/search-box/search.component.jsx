import React from 'react';
import './search.style.css'

export const Search = ({ placeholder, handleFunction }) => {
    return(
    
        <input className="search" type="text" placeholder={placeholder} onChange={handleFunction} />
    )
} 