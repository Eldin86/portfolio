import React, { useState } from 'react'

import Button from '../../shared/FormElements/Button'
import Image from '../../shared/UIElements/Image'
import Edit from '../../assets/edit_blue.svg'
import Remove from '../../assets/remove.svg'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import Bootstrap from '../../assets/bootstrap.svg'
import CSS from '../../assets/css3.svg'
import Git from '../../assets/git.svg'
import HTML5 from '../../assets/html5.svg'
import Il from '../../assets/illustrator.svg'
import Js from '../../assets/javascript.svg'
import Node from '../../assets/nodejs.svg'
import Ps from '../../assets/photoshop.svg'
import ReactJS from '../../assets/react.svg'

import './Resume.css'
import 'react-circular-progressbar/dist/styles.css';

const Resume = () => {

    const [resume, setResume] = useState({
        educations: [
            {
                id: '01',
                from: 'October 2016',
                to: 'December 2016',
                institution: 'Kulturni Centar Kralj Fahd',
                description: 'Wordpress'
            },
            {
                id: '02',
                from: 'April 2016',
                to: 'October 2016',
                institution: 'Nsoft (Spark School)',
                description: 'HTML, CSS, Javascript, Git'
            },
            {
                id: '03',
                from: 'March 2016 ',
                to: 'May 2016',
                institution: 'Kulturni Centar Kralj Fahd',
                description: 'HTML, CSS'
            },
            {
                id: '04',
                from: 'October 2017',
                to: 'December 2017',
                institution: 'Kulturni Centar Kralj Fahd',
                description: 'Illustrator'
            },
            {
                id: '05',
                from: 'March 2017',
                to: 'May 2017',
                institution: 'Kulturni Centar Kralj Fahd',
                description: 'Photoshop'
            },
            {
                id: '06',
                from: '',
                to: 'Present',
                institution: 'GOOGLE IS MY FRIEND',
                description: ''
            }
        ],
        experiences: [
            {
                id: '01',
                from: 'April 2019',
                to: 'Present',
                company: 'Cherry Media',
                position: 'Front End Web Developer'
            }
        ],
        technologies: [
            {
                id: '01',
                icon: Bootstrap,
                title: 'Bootstrap'
            },
            {
                id: '02',
                icon: CSS,
                title: 'CSS3'
            },
            {
                id: '03',
                icon: Git,
                title: 'Git'
            },
            {
                id: '04',
                icon: HTML5,
                title: 'HTML5'
            },
            {
                id: '05',
                icon: Il,
                title: 'Illustrator'
            },
            {
                id: '06',
                icon: Js,
                title: 'Javascript'
            },
            {
                id: '07',
                icon: Node,
                title: 'Node JS'
            },
            {
                id: '08',
                icon: Ps,
                title: 'Photoshop'
            },
            {
                id: '09',
                icon: ReactJS,
                title: 'React JS'
            }
        ],
        personalSkills: [
            {
                id: '01',
                level: 100,
                skillTitle: 'COMMUNICATION'
            },
            {
                id: '02',
                level: 100,
                skillTitle: 'TEAM WORK'
            },
            {
                id: '03',
                level: 70,
                skillTitle: 'CREATIVITY'
            },
            {
                id: '04',
                level: 80,
                skillTitle: 'MANAGEMENT'
            },
            {
                id: '05',
                level: 100,
                skillTitle: 'RESPONSIBILITY'
            },
            {
                id: '06',
                level: 75,
                skillTitle: 'LANGUAGE: ENGLISH'
            }
        ]
    })

    const deleteEducationItemHanlder = (id) => {
        const updatedEducations = resume.educations.filter(item => item.id !== id)
        const newState = {...resume, educations: updatedEducations}
        setResume(newState)
    }

    const deleteExperienceItemHanlder = (id) => {
        const updatedExperience = resume.experiences.filter(item => item.id !== id)
        const newState = {...resume, experiences: updatedExperience}
        setResume(newState)
    }

    const deleteProffItemHanlder = (id) => {
        const updatedTechnologie = resume.technologies.filter(item => item.id !== id)
        const newState = {...resume, technologies: updatedTechnologie}
        setResume(newState)
    }

    const deletePersonalItemHanlder = (id) => {
        const updatedSkill = resume.personalSkills.filter(item => item.id !== id)
        const newState = {...resume, personalSkills: updatedSkill}
        setResume(newState)
    }

    return (
        <div className="text-white">
            <div className="ResumeBanner"><h2>PORTFOLIO</h2></div>

            <div className="Content p-30 mt-10">
                <h3>EDUCATION</h3>
                <div className="Educations">
                    {
                        resume.educations.map(education => {
                            return (
                                <div key={education.id} className="Education">
                                    <div className="mb-0 Buttons_wrapper">
                                        <Button onClick={() => deleteEducationItemHanlder(education.id)} padding="0" inverse>
                                            <Image src={Remove} width="20px" />
                                        </Button>
                                        <Button to={`/update/education/${education.id}`}>
                                            <Image src={Edit} width="20px" />
                                        </Button>
                                    </div>
                                    <div className="Education_content_wrapper">
                                        <p className="fromTo pt-5 pb-5 pl-10 pr-10" ><small>{education.from} - {education.to}</small></p>
                                        <div className="desc pt-5 pb-5 pl-10 pr-10">
                                            <h4 className="m-5">{education.institution}</h4>
                                            <p className="m-5"><b>{education.description}</b></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h3>EXPERIENCE</h3>
                <div className="Experiences">
                    {
                        resume.experiences.map(experience => {
                            return (
                                <div key={experience.id} className="Experience">
                                    <div className="mb-0 Buttons_wrapper">
                                        <Button onClick={() => deleteExperienceItemHanlder(experience.id)} padding="0" inverse>
                                            <Image src={Remove} width="20px" />
                                        </Button>
                                        <Button to={`/update/experience/${experience.id}`}>
                                            <Image src={Edit} width="20px" />
                                        </Button>
                                    </div>
                                    <div className="Experiences_content_wrapper">
                                        <p className="fromTo pt-5 pb-5 pl-10 pr-10" ><small>{experience.from} - {experience.to}</small></p>
                                        <div className="desc pt-5 pb-5 pl-10 pr-10">
                                            <h4 className="m-5">{experience.company}</h4>
                                            <p className="m-5"><b>{experience.position}</b></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h3>PROFFESIONAL SKILLS</h3>
                <div className="Proffesional_skills">
                    {
                        resume.technologies.map(technologie => {
                            return (
                                <div key={technologie.id} className="Proffesional_skill text-center">
                                    <div className="mb-0 Buttons_wrapper">
                                        <Button onClick={() => deleteProffItemHanlder(technologie.id)} padding="0" inverse>
                                            <Image src={Remove} width="20px" />
                                        </Button>
                                        <Button to={`/update/proffesional-skills/${technologie.id}`}>
                                            <Image src={Edit} width="20px" />
                                        </Button>
                                    </div>
                                    <div className="Proff_skill_content_wrapper">
                                        <div className="desc pt-5 pb-5">
                                            <Image width="40px" src={technologie.icon} />
                                            <p><b>{technologie.title}</b></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h3>PERSONAL SKILLS</h3>
                <div className="Personal_skills">
                    {
                        resume.personalSkills.map(personal_skill => {
                            return (
                                <div key={personal_skill.id} className="Personal_skill text-center">
                                    <div className="mb-10 Buttons_wrapper">
                                        <Button onClick={() => deletePersonalItemHanlder(personal_skill.id)} padding="0" inverse>
                                            <Image src={Remove} width="20px" />
                                        </Button>
                                        <Button to={`/update/personal-skills/${personal_skill.id}`}>
                                            <Image src={Edit} width="20px" />
                                        </Button>
                                    </div>
                                    <div className="Personal_skill_content_wrapper">
                                        <CircularProgressbarWithChildren className="CircularProgress" text={`${personal_skill.level}%`} strokeWidth="4" value={personal_skill.level} />
                                        <p>{personal_skill.skillTitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Resume