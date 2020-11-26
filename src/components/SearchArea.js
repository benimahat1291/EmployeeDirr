import React from 'react';

function SearchArea() {
    return (
        <>
        <form style={searchStyle}>
            <input type="text" placeholder="Name"></input>
            <button>Search</button>
        </form>
        </>
    )
}

const searchStyle = {
    padding: "5px"
}

export default SearchArea;
