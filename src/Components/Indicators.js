import React, { useContext } from 'react'
import { BiCheck, BiX } from 'react-icons/bi'
import { SubmittedValueContext } from '../Context/SubmittedValueContext'


export const Indicators = ({ listOfKeys, plans }) => {
    const { submittedValue } = useContext(SubmittedValueContext)
    
    return (
        <div className="w-2/3 flex">
                {
                    plans.map((plan, i) => (
                        <div key={i} className="w-1/2">
                            <div className="w-full">
                                {
                                    listOfKeys.map((key) => (
                                        <div key={key}>
                                            {
                                                plan[key] ? (
                                                    <div className="flex items-center justify-center mt-2 h-16">
                                                            <BiCheck
                                                                className={`indicator ${submittedValue && submittedValue[key] ? "text-green" : "text-default"}`} />
                                                    </div>  
                                                ) : (
                                                    <div className="flex items-center justify-center mt-2 h-16">
                                                        <BiX 
                                                        className={`indicator ${!submittedValue ? "text-default" : (submittedValue[key] ? "text-red":"text-green" )}`}/>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}
