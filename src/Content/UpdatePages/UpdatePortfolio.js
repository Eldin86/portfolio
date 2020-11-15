import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Bewer from '../../assets/bewer.png'
import Turnmill from '../../assets/turnmill.png'
import Recom from '../../assets/recom.png'
import Card from '../../shared/UIElements/Card'
import Input from '../../shared/FormElements/Input'
import Button from '../../shared/FormElements/Button'
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/form-hook'
import Spinner from '../../shared/UIElements/Spinner'
import ImageUpload from '../../shared/FormElements/ImageUpload'

const DUMMY_PORTFOLIO = [
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
]

const UpdatePortfolio = () => {
    const [isLoading, setIsLoading] = useState(true)
    const projectID = useParams().id
    const [formState, inputHandler, setFormData] = useForm({
        projectURL: {
            value: '',
            isValid: false
        },
        projectLabel: {
            value: '',
            isValid: false
        }
    }, false)

    const selectedProject = DUMMY_PORTFOLIO.find(project => project.id === projectID) 
    
    useEffect(() => {
        setFormData({
            projectURL: {
                value: selectedProject.url,
                isValid: true
            },
            projectLabel: {
                value: selectedProject.label,
                isValid: true
            }
        }, true)
        setIsLoading(false)
    }, [setFormData, selectedProject])
    
    

    const portfolioSubmitHanlder = (e) => {
        e.preventDefault()
        setIsLoading(true)
    }

    if(isLoading){
        return (
            <div className="text-center m-30"><Spinner /></div>
        )
    }

    return (
        <Card margin="10px">
            <form onSubmit={portfolioSubmitHanlder}>
                <Input
                    id="projectURL"
                    element="input"
                    type="text"
                    label="Update URL"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a URL"
                    onInput={inputHandler}
                    initialValue={formState.inputs.projectURL.value}
                    initialIsValid={formState.inputs.projectURL.isValid} />
                <Input
                    id="projectLabel"
                    element="input"
                    type="text"
                    label="Update Label"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter project name"
                    onInput={inputHandler}
                    initialValue={formState.inputs.projectLabel.value}
                    initialIsValid={formState.inputs.projectLabel.isValid} />

                <ImageUpload width="100%" image={selectedProject.img} id="image" onInput={inputHandler} center />

                <Button type="submit" disabled={!formState.isValid}>UPDATE INFO {isLoading && <Spinner />}</Button>
            </form>
        </Card>
    )
}

export default UpdatePortfolio