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
        <div className="matchRate-container">
            <div className="w-1/3">
                <p>Matching</p>
            </div>
            <div
                className={`matchRate-text ${standardPlanMatchRate > premiumPlanMatchRate && "matchRate-text-highlight"}`}>
                {standardPlanMatchRate} % of your needs
            </div>
            <div
                className={`matchRate-text ${premiumPlanMatchRate > standardPlanMatchRate && "matchRate-text-highlight"}`}>
                100 % of your needs{premiumPlanMatchRate > 100 && (<p className="font-semibold">and more</p>)}
            </div>
        </div>
    )
}
