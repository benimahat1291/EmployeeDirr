import React, {useState, useEffect} from 'react';
import NavBar from './Navbar'
import SearchArea from './SearchArea'
import EmployeeTable from './EmployeeTable'
import {getUsers} from "../utils/API"


function Index() {

    const [employee, setEmployee] = useState([])
    const [sortConfigs, setsortConfigs] = useState({})
    const [search, setSearch] = useState("")




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

            setEmployee(employeeDataArry);
        })
        
    }, [])

    function searchFilter(data){
        return data.filter((emp) => emp.name.toLowerCase().indexOf(search) !== -1)
    }


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
            <div className ="container">
            <div><NavBar/></div>
            <div><SearchArea search={search} setSearch={setSearch}/></div>
            <div style={cardContainerStyles}>
            <EmployeeTable employee={searchFilter(employee)} sortRequest={sortRequest}/>
            </div>
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


export default Index;