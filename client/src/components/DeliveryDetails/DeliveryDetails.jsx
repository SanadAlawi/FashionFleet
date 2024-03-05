import React, { useCallback, useState } from 'react'
import style from './style.module.css'
import TextField from '../TextField/TextField'

const DeliveryDetails = () => {

    const [user, setUser] = useState({
        'first-name': '',
        'last-name': '',
        'phone': '',
        'region': '',
        'address': '',
        'city': '',
        'state': '',
        'zip': '',
    })


    const fields = [
        {
            id: 1,
            name: 'first-name',
            label: 'First name',
            type: 'text',
            errorMessage: 'Enter a first name.',
            required: true
        },
        {
            id: 2,
            name: 'last-name',
            label: 'Last name',
            type: 'text',
            errorMessage: 'Enter a last name.',
            required: true
        },
        {
            id: 3,
            name: 'phone',
            label: 'Phone',
            type: 'tel',
            errorMessage: 'Enter a phone number.',
            required: true
        },
        {
            id: 4,
            name: 'region',
            label: 'Country/Region',
            type: 'text',
            errorMessage: 'Enter a country/region.',
            required: true
        },
        {
            id: 5,
            name: 'address',
            label: 'Address',
            type: 'text',
            errorMessage: 'Enter an address.',
            required: true
        },
        {
            id: 6,
            name: 'city',
            label: 'City',
            type: 'text',
            errorMessage: 'Enter a city.',
            required: true
        },
        {
            id: 7,
            name: 'state',
            label: 'State',
            type: 'text',
            errorMessage: 'Choose an option.',
            required: true
        },
        {
            id: 8,
            name: 'zip',
            label: 'Zip/Postal code',
            type: 'text',
            errorMessage: 'Enter a zip/postal code.',
            required: true
        },
    ]

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setUser(prevUser => ({ ...prevUser, [name]: value }))
    }, [])


    return (
        <form className={style['delivery-details']}>
            <div className={style['title']}>Delivery details</div>
            {fields.map(field =>
                <TextField key={field.id} {...field} onChange={handleChange} value={user[field.name]} />
            )}

            <button className='black-btn'>Save/Continue</button>

        </form>
    )
}

export default DeliveryDetails