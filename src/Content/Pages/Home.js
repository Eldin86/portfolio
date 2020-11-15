import React, {useState} from 'react'
import ReactTypingEffect from 'react-typing-effect';

import Button from '../../shared/FormElements/Button'
import Image from '../../shared/UIElements/Image'
import Edit from '../../assets/edit_blue.svg'

import './Home.css'

const Home = () => {
    const [title] = useState('FRONTEND WEB DEVELOPER')
    return(
        <div className="Home">
            <h3 className="text-white ml-10 mt-3 mb-3">HI,</h3>
            <h1 className="text-white ml-10 mt-3 mb-3">I AM ELDIN MASLEŠA</h1>
            <div className="ml-10"><Button to="/update/title"><Image src={Edit} width="20px"/></Button></div>
            <h3 className="text-white ml-10 mt-3 mb-3"><ReactTypingEffect eraseDelay={500000} text={title} /></h3>
            
        </div>
    )
}

export default Home