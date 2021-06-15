import React, { useContext } from 'react'
import { SubmittedValueContext } from '../Context/SubmittedValueContext'
import { BiCheck, BiX } from 'react-icons/bi'


export const Results = () => {
    const { submittedValue } = useContext(SubmittedValueContext)
    console.log(submittedValue)

    const standardPlan = require('./data/standardPlan.json')[0]
    const premiumPlan = require('./data/premiumPlan.json')[0]

    const listOfKeys = Object.keys(standardPlan)
    
    return (
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
                        <div key={key} className="flex items-center my-2 text-sm h-16">{key}</div>
                    ))}
                </div>
                <div className="w-1/3">
                    {Object.values(standardPlan).map(key => (
                        key ? (
                            <div className="flex items-center justify-center my-2 h-16">
                                <BiCheck className="indicator"/>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center my-2 h-16">
                                <BiX className="indicator"/>
                            </div>
                            )
                    ))}
                </div>
                <div className="w-1/3">
                    {Object.values(premiumPlan).map(key => (
                        key ? (
                            <div className="flex items-center justify-center my-2 h-16">
                                <BiCheck className="indicator"/>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center my-2 h-16">
                                <BiX className="indicator"/>
                            </div>
                            )
                    ))}
                </div>
            </div>
        </div>
    )
}
