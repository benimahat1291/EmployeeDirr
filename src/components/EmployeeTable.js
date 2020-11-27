import React from 'react';

function EmployeeTable({employee, sortRequest}) {

    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>Images</th>
                        <th><button type="button" onClick={() => sortRequest('name')}>Name</button></th>
                        <th>Email</th>
                        <th>phoneNumber</th>
                        <th><button type="button" onClick={() => sortRequest('age')}>Age</button></th>
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
        </>
    )
}


export default EmployeeTable;