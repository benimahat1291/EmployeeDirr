import React from 'react';
import EmployeeTable from './EmployeeTable'


function CardContainer() {
    return (
        <>
        <div style={cardContainerStyles}>
           <EmployeeTable/>
        </div>
        </>
    )
}

const cardContainerStyles = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}
export default CardContainer;