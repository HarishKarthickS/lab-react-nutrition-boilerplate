import React from "react";
import './Search.css'
function Search(props){
    let{setSearch} = props;
    return (
        <div id="Search-container">
            <h2>Search : </h2>
            <input type="text" 
            placeholder="type anything here..."
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        
        </div>
    )
}

export default Search;