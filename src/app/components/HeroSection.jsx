"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center sm:text-left'>
                    <span className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {" "}

                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Aarti',
                                1000,
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Trainer',
                                1000
                            ]}

                            wrapper="span"
                            speed={50}

                            repeat={Infinity}
                        />
                    </span>
                    <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl font-extrabold'>
                        Frontend Developer specializing in modern web and mobile application, Trainer, Motivator </p>
                    <div>
                        <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 rounded-full  w-full sm:w-fit  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-4' >
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>  Download CV</span>
                        </button>
                    </div>

                </div>
                <div className="relative rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px]">
                    <Image className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/img/hero-image.png" width={250} height={250} alt="hero-image" />

                </div>

            </div>
        </section>
    )
}

export default HeroSection