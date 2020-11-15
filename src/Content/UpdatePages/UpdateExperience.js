import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'

const DUMMY_EXPERIENCES = [
    {
        id: '01',
        from: 'April 2019',
        to: 'Present',
        company: 'Cherry Media',
        position: 'Front End Web Developer'
    }
]

const UpdateExperience = () => {
    const [isLoading, setIsLoading] = useState(true)
    const educationID = useParams().id

    const selectedExperience = DUMMY_EXPERIENCES.find(experience => experience.id === educationID)

    //Uzmemo metode koje vraca hook. a proslijedimo inicijalni state koji ocekuje
    const [formState, inputHandler, setFormData] = useForm({
        from: {
            value: '',
            isValid: false
        },
        to: {
            value: '',
            isValid: false
        },
        company: {
            value: '',
            isValid: false
        },
        position: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        setFormData({
            from: {
                value: selectedExperience.from,
                isValid: true
            },
            to: {
                value: selectedExperience.to,
                isValid: true
            },
            company: {
                value: selectedExperience.company,
                isValid: true
            },
            position: {
                value: selectedExperience.position,
                isValid: true
            }
        }, true)

        setIsLoading(false)
    }, [setFormData, selectedExperience])

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
                    id="from"
                    element="input"
                    type="text"
                    label="Update start period"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter starting month and year"
                    onInput={inputHandler}
                    initialValue={formState.inputs.from.value}
                    initialIsValid={formState.inputs.from.isValid} />

                <Input
                    id="to"
                    element="input"
                    type="text"
                    label="Update end period"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter ending month and year"
                    onInput={inputHandler}
                    initialValue={formState.inputs.to.value}
                    initialIsValid={formState.inputs.to.isValid} />

                <Input
                    id="company"
                    element="input"
                    type="text"
                    label="Update company"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter company name"
                    onInput={inputHandler}
                    initialValue={formState.inputs.company.value}
                    initialIsValid={formState.inputs.company.isValid} />

                <Input
                    id="position"
                    element="textarea"
                    type="text"
                    label="Update position"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter position"
                    onInput={inputHandler}
                    initialValue={formState.inputs.position.value}
                    initialIsValid={formState.inputs.position.isValid} />


                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdateExperience