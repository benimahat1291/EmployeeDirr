import React, {useState, useEffect} from 'react'
import NavBar from '../components/Navbar'
import SearchArea from '../components/SearchArea'
import CardContainer from '../components/CardContainer'
import {getUsers} from "../utils/API"

function Index() {

    const [employeeState, setEmployeeState] = useState({

    })

    useEffect(() => {
        getUsers().then( resp => {
            console.log(resp.data.results[0])
        })
    }, [])







    return (
        <>
            <div className = "container">
                <NavBar/>
                <SearchArea/>
            </div>
            <div className = "container">
                <CardContainer/>
            </div>
        </>
    )
}

export default Index;