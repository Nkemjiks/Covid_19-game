import React from 'react'
import Rifle from './Rifle'
import Header from '../Components/Header'
import '../css/body.css'
import background from '../images/background.svg'

const Body=()=>{

    return (
        <body style={{backgroundImage:`url(${background})`}}>
            <Header/>
            <Rifle/>

        </body>
    )
}

export default Body