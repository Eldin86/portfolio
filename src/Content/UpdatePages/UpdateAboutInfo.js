import React, { useState, useEffect } from 'react'

import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'

const DUMMY_INFO = {
    greetings: 'HI',
    textInfo: `I am Front End Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX. Skilled at writing well-designed and efficient code using current best practices in Web development. On a personal level, I am highly-motivated, result oriented, self-driven, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools. In addition to this, i am fast learner, hard worker and I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.`
}

const UpdateAbout = () => {

    const [isLoading, setIsLoading] = useState(true)

    const greetings = DUMMY_INFO.greetings
    const textInfo = DUMMY_INFO.textInfo

    //Uzmemo metode koje vraca hook. a proslijedimo inicijalni state koji ocekuje
    const [formState, inputHandler, setFormData] = useForm({
        greeting: {
            value: '',
            isValid: false
        },
        info: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        setFormData({
            greeting: {
                value: greetings,
                isValid: true
            },
            info: {
                value: textInfo,
                isValid: true
            }
        }, true)

        setIsLoading(false)
    }, [setFormData, greetings, textInfo])

    const placeUpdateSubmitHanlder = event => {
        event.preventDefault()
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
            <form onSubmit={placeUpdateSubmitHanlder}>
                <Input
                    id="greetings"
                    element="input"
                    type="text"
                    label="Update greetings"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a greeting"
                    onInput={inputHandler}
                    initialValue={formState.inputs.greeting.value}
                    initialIsValid={formState.inputs.greeting.isValid}/>
                <Input
                    id="textInfo"
                    rows="6"
                    type="text"
                    label="Update personal information"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a short info about you"
                    onInput={inputHandler}
                    initialValue={formState.inputs.info.value}
                    initialIsValid={formState.inputs.info.isValid}/>
                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdateAbout