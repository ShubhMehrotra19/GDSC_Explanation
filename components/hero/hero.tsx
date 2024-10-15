/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react'
import Hero_A from './Hero_A/hero_A'

interface Props {}

function Hero(props: Props) {
    const {} = props

    return (
        <main className='py-5 flex justify-center items-start'>
            <Hero_A />
        </main>
    )
}

export default Hero
