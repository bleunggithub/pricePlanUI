import React, { useEffect } from 'react'
import { FaRegSadTear } from "react-icons/fa";
import { useSubmit } from '../Hooks/useSubmit'


export const TextArea = () => {
    const {
        value,
        error,
        setError,
        handleReset,
        handleInputChange,
        handleSubmit
    } = useSubmit()

    useEffect(() => {
        const errorListener = (event) => {
            setError(`${event.message}`)
        }

        window.addEventListener('error', errorListener)

        return () => {
           window.removeEventListener('error', errorListener) 
        }
    },[setError])

    return (
        <div className="textArea-flex-container">
            <form className="textArea-form" onSubmit={handleSubmit}>
                <textarea
                    className="textArea-textArea"
                    value={value}
                    onChange={handleInputChange}
                />
                <div className="flex justify-around w-full">
                    <button type="button" className="textArea-resetBtn" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" className="textArea-submitBtn">
                        Compare
                    </button>
                </div>
                {error && (
                    <p className="textArea-errorMsg">
                        An Error has occurred, please check your input.
                        <FaRegSadTear className="inline" />
                    </p>)}
            </form>
        </div>
    )
}
