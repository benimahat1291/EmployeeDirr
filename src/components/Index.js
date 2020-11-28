import React, {useState, useEffect} from 'react';
import NavBar from './Navbar'
import SearchArea from './SearchArea'
import EmployeeTable from './EmployeeTable'
import {getUsers} from "../utils/API"


function Index() {
//Our states
    const [employee, setEmployee] = useState([])
    const [sortConfigs, setsortConfigs] = useState({})
    const [search, setSearch] = useState("")



//Activates the Api call and stores the employee information to state
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
//takes in our employee data and filters by the search state which is whatever is search value
    function searchFilter(data){
        return data.filter((emp) => emp.name.toLowerCase().indexOf(search) !== -1)
    }

// functions asigns a state value for asc and dsc to toggle sort, takes in key which is feild name
    const sortRequest = key => {
        let direction = 'asc'
        if (sortConfigs.key === key && sortConfigs.direction === 'asc') {
            direction = 'dsc'
        }
        
        setsortConfigs({key, direction})
    }
// if current sortstate is asc cange to dsc
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
   
//render our components passing required information
//employee data is run though the search filter
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