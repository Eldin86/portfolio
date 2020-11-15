import React, { useState } from 'react'

import Image from '../../shared/UIElements/Image'
import Email from '../../assets/email.svg'
import Location from '../../assets/pin.svg'
import Phone from '../../assets/phone.svg'
import { useForm } from '../../shared/hooks/form-hook'
import Button from '../../shared/FormElements/Button'
import Spinner from '../../shared/UIElements/Spinner'

import './Contact.css'
import Input from '../../shared/FormElements/Input'
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../shared/utils/validators'


const Contact = () => {
    const [contacts, setContacts] = useState({
        email: 'maslesaeldin@gmail.com',
        phone: '+387 (0) 61 343 595',
        location: 'Mostar, Bosnia & Herzegovina'
    })
    const [isLoading, setIsLoading] = useState(false)
    const [formState, inputHandler] = useForm({
        name: {
            value: '',
            isValid: false,
        },
        email: {
            value: '',
            isValid: false
        },
        message: {
            value: '',
            isValid: false
        }
    }, false)

    const onSubmitContact = (e) => {
        e.preventDefault()
        console.log(formState.inputs)
        setIsLoading(true)
    }

    return (
        <div className="text-white">
            <div className="ContactBanner"><h2>CONTACT</h2></div>
            <div className="Content p-30 mt-10">
                <h2>CONTACT INFORMATION</h2>
                <div className="Contact_info">

                    <div className="Email text-center mb-10">
                        <h3 className="mb-5">EMAIL</h3>
                        <Image src={Email} width="35px" />
                        <h4 className="Contact_label m-0 p-20">{contacts.email}</h4>
                    </div>

                    <div className="Phone text-center mb-10">
                        <h3 className="mb-5">PHONE</h3>
                        <Image src={Phone} width="35px" />
                        <h4 className="Contact_label m-0 p-20">{contacts.phone}</h4>
                    </div>

                    <div className="Location text-center mb-10">
                        <h3 className="mb-5">LOCATION</h3>
                        <Image src={Location} width="35px" />
                        <h4 className="Contact_label m-0 p-20">{contacts.location}</h4>
                    </div>

                </div>
                <h3 className="text-center">CONTACT ME</h3>
                <div className="Contact_form">
                    <form onSubmit={onSubmitContact}>
                       <div className="Email_name">
                       <Input
                            id="name"
                            element="input"
                            type="text"
                            placeholder="Name"
                            errorText="Please enter your name"
                            onInput={inputHandler}
                            validators={[VALIDATOR_REQUIRE()]}
                            initialValue={formState.inputs.name.value} />
                        <Input
                            id="email"
                            element="input"
                            type="text"
                            placeholder="Email"
                            errorText="Please enter your Email"
                            onInput={inputHandler}
                            validators={[VALIDATOR_EMAIL()]}
                            initialIsValid={formState.inputs.email.isValid} />
                       </div>
                       <div>
                       <Input
                            id="message"
                            rows="6"
                            type="text"
                            placeholder="Message"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Please enter your message"
                            onInput={inputHandler}
                            initialIsValid={formState.inputs.message.isValid} />
                       </div>

                        <div>
                        <Button type="submit" disabled={!formState.isValid}>SEND {isLoading && <Spinner />}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact