import React, { createContext, useState } from 'react'

export const SubmittedValueContext = createContext(null)

const SubmittedValueProvider = ({ children }) => {
    const [submittedValue, setSubmittedValue] = useState(null)

    return (
        <SubmittedValueContext.Provider
            value={{
                submittedValue,
                setSubmittedValue: (submittedValue) => setSubmittedValue(submittedValue)
            }}>
            {children}
        </SubmittedValueContext.Provider>
    )
}

export default SubmittedValueProvider;