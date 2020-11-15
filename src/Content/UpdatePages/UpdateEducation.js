import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'

const DUMMY_EDUCATIONS = [
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
]

const UpdateEducation = () => {
    const [isLoading, setIsLoading] = useState(true)
    const educationID = useParams().id

    const selectedEducation = DUMMY_EDUCATIONS.find(education => education.id === educationID)

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
        institution: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        setFormData({
            from: {
                value: selectedEducation.from,
                isValid: true
            },
            to: {
                value: selectedEducation.to,
                isValid: true
            },
            institution: {
                value: selectedEducation.institution,
                isValid: true
            },
            description: {
                value: selectedEducation.description,
                isValid: true
            }
        }, true)

        setIsLoading(false)
    }, [setFormData, selectedEducation])

    const educationSubmitHanlder = event => {
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
            <form onSubmit={educationSubmitHanlder}>
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
                    id="institution"
                    element="input"
                    type="text"
                    label="Update institution"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter name of institution"
                    onInput={inputHandler}
                    initialValue={formState.inputs.institution.value}
                    initialIsValid={formState.inputs.institution.isValid} />

                <Input
                    id="description"
                    element="textarea"
                    type="text"
                    label="Update description"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter description"
                    onInput={inputHandler}
                    initialValue={formState.inputs.description.value}
                    initialIsValid={formState.inputs.description.isValid} />


                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdateEducation