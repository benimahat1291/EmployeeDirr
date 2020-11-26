import React from 'react';

function SearchArea() {
    return (
        <>
        <div style={searchStyle}>
        <form >
            <input type="text" placeholder="Name"></input>
            <button>Search</button>
        </form>
        </div>
        </>
    )
}

const searchStyle = {
    padding: "5px",
    paddingBottom: "30px",
    float: "right",
    
}

export default SearchArea;
