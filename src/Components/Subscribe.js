import React, { useState } from 'react'

export const Subscribe = () => {
    const [selected, setSelected] = useState('premiumPlan')

    const handleSelect = (e) => {
        setSelected(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // data to be sent to backend
        console.log(selected)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex w-full pt-10">
                <div className="w-1/3" />
                <div className="w-1/3 text-center px-2">
                    <div className="mb-2 md:mb-4">
                        <input
                            type="radio"
                            id="standardPlan"
                            name="plan"
                            value="standardPlan"
                            onChange={handleSelect}
                            checked={selected === "standardPlan"}
                        />
                    </div>
                    <label htmlFor="standardPlan">
                        HK$ <span className="text-xl font-semibold">188</span>
                        <span className="text-xs">/month</span>
                    </label>
                </div>
                <div className="w-1/3 text-center px-2">
                    <div className="mb-2 md:mb-4">
                        <input
                            type="radio"
                            id="premiumPlan"
                            name="plan"
                            value="premiumPlan"
                            onChange={handleSelect}
                            checked={selected === "premiumPlan"}
                        />
                    </div>
                    <label htmlFor="premiumPlan">
                        HK$ <span className="text-xl font-semibold">388</span>
                        <span className="text-xs">/month</span>
                    </label>
                </div>
            </div>
            <div className="text-center pt-4">
                <button type="submit" className="subscribe-submitBtn">Get Covered Now</button>
            </div>
        </form>
    )
}
