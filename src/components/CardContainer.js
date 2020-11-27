import React, {useState, useEffect} from 'react';
import EmployeeTable from './EmployeeTable'
import {getUsers} from "../utils/API"


function CardContainer() {

    const [employee, setEmployee] = useState([])
    const [sortedField, setSortedField] = useState(null)

    useEffect(() => {
        getUsers().then( resp => {
            let employeeDataArry= []
            resp.data.results.map((data) => {
                let employeeData = {
                    name: data.name.first + " " + data.name.last,
                    email: data.email,
                    phone: data.phone,
                    age: data.dob.age,
                    image: data.picture.thumbnail
                }
                employeeDataArry.push(employeeData)
                return employeeDataArry
            })
            return setEmployee(employeeDataArry)
        })
        
    }, [])


    const sortRequest = key => {
        let direction = 'asc'
        if (sortedField.key === key && sortedField.direction === 'asc') {
            direction = 'dsc'
        }
        setSortedField({key, direction})
    }

    let sortedData = [...employee]
    if(sortedField !== null) {
        sortedData.sort((a,b) => {
            if (a[sortedField.key] < b[sortedField.key]){
                return sortedField.direction === 'asc' ? -1 : 1;
            }
            if (a[sortedField.direction] > b[sortedField.direction]){
                return sortedField.direction === 'asc' ? 1 : 1;
            }
            return 0;
        })
    }
    console.log(employee)

    


//   let sortedEmployee = employee.sort((a,b) => {
//       return a.age - b.age;
//   })

//   sortedEmployee.forEach((e) => {
//       console.log(`${e.name} ${e.age}`)
//   })

    // const sortName = () => {
    //     const sortedField = []
    //     return console.log("nameField")
    // }

    // const sortAge = () => {
    //     const sortedField = []
    //     return console.log("ageField")
    // }




    return (
        <>
        <div style={cardContainerStyles}>
           <EmployeeTable employee={employee} sortRequest={sortRequest}/>
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