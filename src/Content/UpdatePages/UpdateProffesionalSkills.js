import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'
import ImageUpload from '../../shared/FormElements/ImageUpload'

import Bootstrap from '../../assets/bootstrap.svg'
import CSS from '../../assets/css3.svg'
import Git from '../../assets/git.svg'
import HTML5 from '../../assets/html5.svg'
import Il from '../../assets/illustrator.svg'
import Js from '../../assets/javascript.svg'
import Node from '../../assets/nodejs.svg'
import Ps from '../../assets/photoshop.svg'
import ReactJS from '../../assets/react.svg'

const DUMMY_PROFFESIONAL_SKILLS = [
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
]

const UpdateProffesionalSkills = () => {
    const [isLoading, setIsLoading] = useState(true)
    const skillID = useParams().id

    const selectedSkill = DUMMY_PROFFESIONAL_SKILLS.find(proffesional_skill => proffesional_skill.id === skillID)

    //Uzmemo metode koje vraca hook. a proslijedimo inicijalni state koji ocekuje
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        setFormData({
            title: {
                value: selectedSkill.title,
                isValid: true
            }
        }, true)

        setIsLoading(false)
    }, [setFormData, selectedSkill])

    const experienceSubmitHanlder = event => {
        event.preventDefault()
        console.log(formState.inputs)
        setIsLoading(true)
    }

    /* Privremeno rjesenje pravo rjesenje ima kad budemo povezivali backend i frontend */
    /* https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/learn/lecture/16855088#notes */
    if (isLoading) {
        return (
            <div className="text-center m-30"><Spinner /></div>
        )
    }

    return (
        <Card margin="10px">
            <form onSubmit={experienceSubmitHanlder}>

                <Input
                    id="title"
                    element="input"
                    type="text"
                    label="Update technologie name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter technologie name"
                    onInput={inputHandler}
                    initialValue={formState.inputs.title.value}
                    initialIsValid={formState.inputs.title.isValid} />

                <ImageUpload width="60%" image={selectedSkill.icon} id="image" onInput={inputHandler} center />

                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdateProffesionalSkills