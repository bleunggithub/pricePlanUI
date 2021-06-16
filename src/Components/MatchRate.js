import React, { useContext } from 'react'
import { SubmittedValueContext } from '../Context/SubmittedValueContext'

export const MatchRate = ({listOfKeys, plans}) => {
    const { submittedValue } = useContext(SubmittedValueContext)

    const getStandardPlanMatchRate = () => {
        let counter = 0
        
        if (submittedValue) {
            for (const value in submittedValue) {
                submittedValue[value] === plans[0][value] && counter++
            }
        }
        return Math.floor((counter / listOfKeys.length)*100)
    }
    
    const getPremiumPlanMatchRate = () => {
        let counter = 0
        
        if (submittedValue) {
            for (const value in submittedValue) {
                submittedValue[value] && counter++
            }
        }
        return Math.floor((listOfKeys.length / counter)*100)
    }

    const standardPlanMatchRate = getStandardPlanMatchRate()
    const premiumPlanMatchRate = getPremiumPlanMatchRate()

    return (
        <div className="flex w-full border-t border-darkGrey pt-10 items-center">
            <div className="w-1/3">
                <p>Matching</p>
            </div>
            <div className={`w-1/3 text-center px-2 ${standardPlanMatchRate > premiumPlanMatchRate && "text-green font-semibold text-lg "}`}>
                {standardPlanMatchRate} % of your needs
            </div>
            <div className={`w-1/3 text-center px-2 ${premiumPlanMatchRate > standardPlanMatchRate  && "text-green font-semibold text-lg "}`}>
                100 % of your needs{premiumPlanMatchRate > 100 && (<p className="font-semibold">and more</p>)}
            </div>
        </div>
    )
}
