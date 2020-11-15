import React, { useState } from 'react'

import Bewer from '../../assets/bewer.png'
import Turnmill from '../../assets/turnmill.png'
import Recom from '../../assets/recom.png'
import Image from '../../shared/UIElements/Image'
import Button from '../../shared/FormElements/Button'
import Edit from '../../assets/edit_blue.svg'
import Remove from '../../assets/remove.svg'
import Link from '../../assets/link.svg'

import './Portfolio.css'

const Portfolio = () => {

    const [projects, setProjects] = useState([
        {
            id: 'img01',
            img: Bewer,
            url: 'https://www.bewerbungscoach-pro.com/',
            label: 'bewerbungscoach-pro'
        },
        {
            id: 'img02',
            img: Turnmill,
            url: 'http://www.turnmillbh.ba/',
            label: 'www.turnmillbh'
        },
        {
            id: 'img03',
            img: Recom,
            url: 'https://recom.ba/',
            label: 'recom'
        }
    ])

    const deleteHobbieHandler = (id) => {
        const newProject = projects.filter(project => project.id !== id)
        console.log(newProject)
        setProjects(newProject)
        // const updatedProjects = projects.filter(project => project.id !== id)
        // const newState = { ...projects, projects: updatedProjects }
        // setProjects(newState)
    }

    return (
        <div className="text-white">
            <div className="PortfolioBanner"><h2>PORTFOLIO</h2></div>
            <div className="Content p-30 mt-10">
                <div>
                    <h3>MY WORK</h3>
                    <div className="Projects">
                        {
                            projects.map(project => {
                                return (
                                    <div key={project.id} className="Project text-center">
                                        <div className="mb-10 Buttons_wrapper">
                                            <Button onClick={() => deleteHobbieHandler(project.id)} padding="0" inverse>
                                                <Image src={Remove} width="20px"/>
                                            </Button>
                                            <Button to={`/update/portfolio/${project.id}`}>
                                                <Image src={Edit}  width="20px"/>
                                            </Button>
                                        </div>
                                        <div className="Project_content_wrapper">
                                            <div className="Project_wrapper">
                                                <Image src={project.img} />
                                            </div>
                                            <Button href={project.url}>
                                            <div className="Url_wrapper">
                                               <div><h3><span className="text-white">{project.label}</span></h3></div>
                                               <div> <Image src={Link} width='20px' /></div>
                                            </div>
                                            </Button>
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio