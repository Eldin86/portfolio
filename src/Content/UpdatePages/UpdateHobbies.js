import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'
import Traveling from '../../assets/airplane.svg'
import Coding from '../../assets/coding.svg'
import Music from '../../assets/music.svg'
import Hiking from '../../assets/hiking.svg'
import ImageUpload from '../../shared/FormElements/ImageUpload'

const DUMMY_HOBBIES = [
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

const UpdateHobbie = () => {
    const [isLoading, setIsLoading] = useState(true)
    const hobbieID = useParams().id

    const selectedHobbie = DUMMY_HOBBIES.find(hobbie => hobbie.id === hobbieID)

    //Uzmemo metode koje vraca hook. a proslijedimo inicijalni state koji ocekuje
    const [formState, inputHandler, setFormData] = useForm({
        hobbie: {
            value: '',
            isValid: false
        }
    }, false)

    useEffect(() => {
        setFormData({
            hobbie: {
                value: selectedHobbie.label,
                isValid: true
            }
        }, true)

        setIsLoading(false)
    }, [setFormData, selectedHobbie])

    const hobbieSubmitHanlder = event => {
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

    console.log(selectedHobbie.img)

    return (
        <Card margin="10px">
            <form onSubmit={hobbieSubmitHanlder}>
                <Input
                    id="hobbie"
                    element="input"
                    type="text"
                    label="Update hobbie"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a hobbie"
                    onInput={inputHandler}
                    initialValue={formState.inputs.hobbie.value}
                    initialIsValid={formState.inputs.hobbie.isValid} />
                {/* Image sent from object */}
                <ImageUpload width="60%" image={selectedHobbie.img} id="image" onInput={inputHandler} center />

                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdateHobbie