import React from 'react'
import { Parallax } from 'react-parallax';

export const HeroImage = () => {
    return (
        <div className="mb-5">
            <Parallax
                bgImage="https://images.unsplash.com/uploads/1412533519888a485b488/bb9f9777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                strength={500}
                bgImageStyle={{
                    width: '100%',
                    height:'100%',
                    objectFit: 'cover',
                    objectPosition: '25% 50%',
                    opacity: '0.6',
                }}>
            <div style={{height:'70vh'}} className="hero-header-div">
                    <h1>Your Plan, Your Choice</h1>
                    <p className="hero-subHeading">Choose only what you need</p>
            </div>
            </Parallax>
        </div>
    )
}
