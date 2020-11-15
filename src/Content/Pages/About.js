import React, { useState } from 'react'

import Traveling from '../../assets/airplane.svg'
import Coding from '../../assets/coding.svg'
import Music from '../../assets/music.svg'
import Hiking from '../../assets/hiking.svg'
import Image from '../../shared/UIElements/Image'
import Edit from '../../assets/edit_blue.svg'
import Remove from '../../assets/remove.svg'
import Button from '../../shared/FormElements/Button'

import './About.css'

const About = () => {

    const [aboutContent, setAboutContent] = useState({
        greetings: 'HI',
        textInfo: `
        I am Front End Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX. Skilled at writing well-designed and efficient code using current best practices in Web development.

        On a personal level, I am highly-motivated, result oriented, self-driven, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools. 

        In addition to this, i am fast learner, hard worker and I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. 
        I also have the ability to work independently while staying on schedule and meeting those tight deadlines.`,
        hobbies: [
            {
                id: '1',
                img: Coding,
                label: 'Coding'
            },
            {
                id: '2',
                img: Traveling,
                label: 'Traveling'
            },
            {
                id: '3',
                img: Music,
                label: 'Music'
            },
            {
                id: '4',
                img: Hiking,
                label: 'Hiking'
            }
        ]
    })
    const deleteHobbieHandler = (id) => {
        const updatedHobbies = aboutContent.hobbies.filter(hobbie => hobbie.id !== id)
        const newState = { ...aboutContent, hobbies: updatedHobbies }
        setAboutContent(newState)
    }

    return (
        <div className="text-white">
            <div className="AboutBanner"><h2>ABOUT ME</h2></div>

            <div className="Content p-30 mt-10">
                <div>
                    <div className="mb-10"><Button exact to={`/update/info`}><Image src={Edit} width="20px" /></Button></div>
                    <h3 className="mt-10">{aboutContent.greetings},</h3>
                    <p className="About_me_text mt-0">{aboutContent.textInfo}</p>
                </div>
                <div>
                    <h2 className="text-center">HOBBIES</h2>
                    <div className="Hobbies">
                        {
                            aboutContent.hobbies.map(hobbie => {
                                return (
                                    <div key={hobbie.label} className="Hobbie text-center">
                                        <div className="mb-10">
                                            <Button onClick={() => deleteHobbieHandler(hobbie.id)} padding="0" inverse>
                                                <Image src={Remove}  width="20px"/>
                                            </Button>
                                            <Button to={`/update/hobbie/${hobbie.id}`}>
                                                <Image src={Edit}  width="20px"/>
                                            </Button>
                                        </div>
                                        <Image src={hobbie.img} width='30px' />
                                        <p>{hobbie.label}</p>
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

export default About