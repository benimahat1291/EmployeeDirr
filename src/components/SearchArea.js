import React, {useState} from 'react';

function SearchArea() {

    const [search, setSearch] = useState({value:"statename"})

    const searchUpdate  = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
        <div style={searchStyle}>
        <form >
            <input type="text" placeholder="Name" value={search} onChange={searchUpdate}></input>
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
