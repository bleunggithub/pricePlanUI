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
        <div className="flex flex-col justify-center w-full rounded p-5 bg-white md:border md:border-lightGrey md:w-3/5 md:ml-6">
            <div className="flex flex-row border-b border-lightGrey pb-6">
                <div className="w-1/3" />
                <div className="w-1/3">
                    <p className="text-lg font-semibold text-center">Standard Plan</p>
                </div>
                <div className="w-1/3">
                    <p className="text-lg font-semibold text-center">Premium Plan</p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/3">
                    {listOfKeys.map(key => (
                        <div key={key} className="flex items-center my-2 text-sm h-16">
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

