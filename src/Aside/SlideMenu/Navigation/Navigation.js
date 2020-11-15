import React from 'react'

import Button from '../../../shared/FormElements/Button'
import Image from '../../../shared/UIElements/Image'

import Home from '../../../assets/home.svg'
import About from '../../../assets/person.svg'
import Portfolio from '../../../assets/computer.svg'
import Resume from '../../../assets/resume.svg'
import Contact from '../../../assets/support.svg'
import Login from '../../../assets/login.svg'

import './Navigation.css'

const Navigation = (props) => {
    return (
        <ul className="Nav">
            <li>
                <Button onClick={props.removeSidebar} exact to="/">
                    <Image src={Home} width="25px"/><span>HOME</span>
                </Button>
            </li>
            <li>
                <Button onClick={props.removeSidebar} to="/about">
                    <Image src={About} width="25px"/><span>ABOUT</span>
                </Button>
            </li>
            <li>
                <Button onClick={props.removeSidebar} to="/portfolio">
                    <Image src={Portfolio} width="25px"/><span>PORTFOLIO</span>
                </Button>
            </li>
            <li>
                <Button onClick={props.removeSidebar} to="/resume">
                    <Image src={Resume} width="25px"/><span>RESUME</span>
                </Button>
            </li>
            <li>
                <Button onClick={props.removeSidebar} to="/contact">
                    <Image src={Contact} width="25px"/><span>CONTACT</span>
                </Button>
            </li>
            <li>
                <Button onClick={props.removeSidebar} to="/login">
                    <Image src={Login} width="25px"/><span>LOGIN</span>
                </Button>
            </li>
        </ul>
    )
}

export default Navigation