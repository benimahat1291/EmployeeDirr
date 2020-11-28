import React, {useState} from 'react';

function SearchArea({search, setSearch}) {

    return (
        <>
        <div style={searchStyle}>
        <form >
            <input type="text" placeholder="Name" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </form>
        </div>
        </>
    )
}

const searchStyle = {
  
    paddingLeft: "80%",
    background: "#333333",
    paddingTop: "5px",
    paddingBottom: "10px"
    
}

export default SearchArea;
