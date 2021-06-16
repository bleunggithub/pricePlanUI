import { useContext, useState } from 'react'
import { SubmittedValueContext } from '../../Context/SubmittedValueContext'

export const useSubmit = () => {
    const defaultValues = require('../data/defaultValues.json')

    const { setSubmittedValue } = useContext(SubmittedValueContext)
    
    const [value, setValue] = useState(JSON.stringify(defaultValues[0], null, 4))
    const [error, setError] = useState("")
    

    const handleInputChange = (e) => {
        setValue(e.target.value)
        setError("")
    }

    const handleReset = () => {
        setValue(JSON.stringify(defaultValues[0], null, 4))
        setError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        const validatedInput = validateInput()

        validatedInput && setSubmittedValue(validatedInput)
    }
    
    const validateInput = () => {
        //window.eventListener will listen to parse error
        //in real life, an error could be thrown while making POST request to backend
        const parsedValue = JSON.parse(value)
        
        const listOfKeys = Object.keys(defaultValues[0])
        const inputKeys = Object.keys(parsedValue)
        
        //shallow compare the keys
        const hasSameKeys = (listOfKeys.every((item,i) => item === inputKeys[i]))
        
        //check if all values are boolean
        const checkValues = () => {
            for (const item in parsedValue) {
                if (typeof parsedValue[item] !== 'boolean') return false
            }
            return true
        }
        const areAllBoolean = checkValues()

        return hasSameKeys && areAllBoolean ? parsedValue : setError("Input invalid")

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
