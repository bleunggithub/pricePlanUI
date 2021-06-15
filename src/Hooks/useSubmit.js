import { useContext, useState } from 'react'
import { SubmittedValueContext } from '../Context/SubmittedValueContext'

export const useSubmit = () => {
    const defaultValues = require('../Components/data/defaultValues.json')

    const { setSubmittedValue } = useContext(SubmittedValueContext)
    
    const [value, setValue] = useState(JSON.stringify(defaultValues[0], null, 4))
    const [error, setError] = useState("")
    
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleReset = () => {
        setValue(JSON.stringify(defaultValues[0], null, 4))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const parsedValue = JSON.parse(value)

        console.log(parsedValue)
        setSubmittedValue(parsedValue)
        // console.log(parsedValue["General Outpatient"])
    }
    
    return {
        value,
        error,
        setError,
        handleReset,
        handleInputChange,
        handleSubmit,
    }
}
