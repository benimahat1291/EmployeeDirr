import React from 'react';

function EmployeeTable() {
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone#</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>pic</td>
                            <td>bob</td>
                            <td>bobsaget@gmail.com</td>
                            <td>303-324-3234</td>
                            <td>1-23-1989</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

const headerStyle = {
    
}

export default EmployeeTable;