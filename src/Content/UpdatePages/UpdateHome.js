import React, { useState, useEffect } from 'react'

import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Card from '../../shared/UIElements/Card'
import Spinner from '../../shared/UIElements/Spinner'

const DUMMY_TITLE = [{
    title: 'MERN Developer'
}]

const UpdateTitle = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    const jobTitle = DUMMY_TITLE[0].title

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
                value: jobTitle,
                isValid: true
            }
        }, true)

        setIsLoading(false)
        console.log(jobTitle)
    }, [setFormData, jobTitle])

    const placeUpdateSubmitHanlder = event => {
        event.preventDefault()
        setIsLoading(true)
    }

    /* Privremeno rjesenje pravo rjesenje ima kad budemo povezivali backend i frontend */
    /* https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/learn/lecture/16855088#notes */
    if(isLoading){
        return (
            <div className="text-center m-30"><Spinner /></div>
        )
    }

    return (
        <Card>
            <form onSubmit={placeUpdateSubmitHanlder}>
                <h3>test {formState.inputs.title.value}</h3>
                <Input
                    id="title"
                    element="input"
                    type="text"
                    label="Title"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid title"
                    onInput={inputHandler}
                    initialValue={formState.inputs.title.value}
                    initialIsValid={formState.inputs.title.isValid} />
                <Button type="submit" disabled={!formState.isValid}>UPDATE TITLE</Button>
            </form>
        </Card>
    )
}

export default UpdateTitle