import React, { useState } from 'react'

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function NewUserForm(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit({
            first: firstName,
            last: lastName,
        })

        setFirstName('')
        setLastName('')
    }

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>First Name</Label>
                <Input
                    placeholder='First Name'
                    onChange={handleFirstNameChange}
                    value={firstName}
                    required
                    className='mt-2 mb-2'
                />
            </FormGroup>
            <FormGroup>
                <Label>Last Name</Label>
                <Input
                    placeholder='Last Name'
                    onChange={handleLastNameChange}
                    value={lastName}
                    required
                    className='mt-2 mb-2'
                />
            </FormGroup>
            <FormGroup>
                <Button
                    // block #deprecated in bootstrap 5.0.x
                    outline
                    type='submit'
                    color='primary'
                    className='col-12 mt-2 mb-4'
                >
                    Create
                </Button>
            </FormGroup>
        </Form>
    )
}
