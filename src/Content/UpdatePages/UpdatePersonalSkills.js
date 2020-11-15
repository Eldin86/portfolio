import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'


const DUMMY_PERSONAL_SKILLS = [
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

const UpdateProffesionalSkills = () => {
    const [isLoading, setIsLoading] = useState(true)
    const skillID = useParams().id

    const selectedSkill = DUMMY_PERSONAL_SKILLS.find(personal_skill => personal_skill.id === skillID)

    //Uzmemo metode koje vraca hook. a proslijedimo inicijalni state koji ocekuje
    const [formState, inputHandler, setFormData] = useForm({
        level: {
            value: '',
            isValid: false
        },
        skillTitle: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        setFormData({
            level: {
                value: selectedSkill.level,
                isValid: true
            },
            skillTitle: {
                value: selectedSkill.skillTitle,
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
                    id="level"
                    element="input"
                    type="text"
                    label="Update your skill level (max: 100%)"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your skill level"
                    onInput={inputHandler}
                    initialValue={formState.inputs.level.value}
                    initialIsValid={formState.inputs.level.isValid} />

                <Input
                    id="skillTitle"
                    element="input"
                    type="text"
                    label="Update your personal skill name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your personal skill level"
                    onInput={inputHandler}
                    initialValue={formState.inputs.skillTitle.value}
                    initialIsValid={formState.inputs.skillTitle.isValid} />

                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdateProffesionalSkills