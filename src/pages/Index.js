import React from 'react'
import NavBar from '../components/Navbar'
import SearchArea from '../components/SearchArea'
import CardContainer from '../components/CardContainer'


function Index() {

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