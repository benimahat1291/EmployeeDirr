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
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

export default NavBar;