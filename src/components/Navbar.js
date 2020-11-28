import React from 'react'

function NavBar() {
    return (
        <div style={navStyle}>
            Employee Directory
        </div>
    )
}

//Nav Styles
const navStyle = {
    background: "#222222",
    color: "#fff",
    textAlign: "center",
    padding: "30px",
    fontSize: "50px"
    
}

export default NavBar;