import React, { useContext } from 'react'
import { SubmittedValueContext } from '../Context/SubmittedValueContext'
import { Indicators } from './Indicators'
import { MatchRate } from './MatchRate'
import { Subscribe } from './Subscribe'


export const Results = () => {
    const { submittedValue } = useContext(SubmittedValueContext)

    const defaultValues = require('../util/data/defaultValues.json')[0]
    const listOfKeys = Object.keys(defaultValues)

    const plans = require('../util/data/plans.json').plans


    return (
        <>
        <div className="results-outer-container">
            <div className="results-planName-container">
                <div className="w-1/3" />
                <div className="w-1/3">
                    <p className="results-planName-text">Standard Plan</p>
                </div>
                <div className="w-1/3">
                    <p className="results-planName-text">Premium Plan</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/3">
                    {listOfKeys.map(key => (
                        <div key={key} className="results-keys-column">
                            {key}
                        </div>
                    ))}
                </div>
                <Indicators plans={plans} listOfKeys={listOfKeys} />
            </div>
                {
                    submittedValue && (
                        <MatchRate plans={plans} listOfKeys={listOfKeys}/>
                    )
                }
            <Subscribe />
        </div>
            
        </>
    )
}

