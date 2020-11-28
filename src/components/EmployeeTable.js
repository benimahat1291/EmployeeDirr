import React from 'react';
//import employee to render data to table
// sort request for sorting feild
function EmployeeTable({employee, sortRequest}) {

    return (
        <>
        <div>
            <table >
                <thead style={thStyle} >
                    {/* Onclick tells sortRequest what feild to sort by */}
                    <tr>
                        <th style={{width:"5%", textAlign:"center", fontSize:"20px"}}>Images</th>
                        <th style={{width:"15%", textAlign:"center", fontSize:"20px"}}><div type="div" onClick={() => sortRequest('name')}>Name</div></th>
                        <th style={{width:"20%", textAlign:"center",fontSize:"20px"}}><div type="div" onClick={() => sortRequest('email')}>Email</div></th>
                        <th style={{width:"20%", textAlign:"center",fontSize:"20px"}}> <div type="div" onClick={() => sortRequest('phone')}>PhoneNumber</div></th>
                        <th style={{width:"10%", textAlign:"center",fontSize:"20px"}}><div type="div" onClick={() => sortRequest('age')}>Age</div></th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map( e => (
                        <tr key={e.email}>
                            <td><img src={e.image} alt="pic"/></td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>{e.age}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            </div>
        </>
    )
}

const thStyle = {
    borderBottom: "5px solid #FFF"
}

export default EmployeeTable;