import React, {useState, useEffect} from 'react';
import EmployeeTable from './EmployeeTable'
import {getUsers} from "../utils/API"


function CardContainer() {

    const [employee, setEmployee] = useState([])
    const [sortConfigs, setsortConfigs] = useState({})

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
        if (sortConfigs.key === key && sortConfigs.direction === 'asc') {
            direction = 'dsc'
        }
        
        setsortConfigs({key, direction})
    }

    if(sortConfigs !== {}) {
        employee.sort((a,b) => {
            if (a[sortConfigs.key] < b[sortConfigs.key]){
                return sortConfigs.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfigs.key] > b[sortConfigs.key]){
                return sortConfigs.direction === 'asc' ? 1 : -1;
            }
            return 0;
        })
    }
   

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