"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [startTransition, isPending] = useTransition();

    const TAB_DATA = [{
        title: "skills",
        id: "skills",
        content: (
            <ul>
                <li>
                    React.js,
                </li>
                <li>
                    Next.js,
                </li>
                <li>
                    node.js,
                </li>
                <li>
                    React Native,
                </li>
                <li>
                    JavaScript,
                </li>

            </ul>
        )


    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>BE, Pune university</li>
                <li>Diploma, MSBTE</li>
            </ul>)
    }
    ]

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)

        })
    }
    return (
        <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image src="/img/about-image.png" width={500} height={500} />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4 sm:mt-4'>
                    About Me
                </h2>
                <p className='text-base lg:text:lg'>
                    I am a Web and mobile developer with passionate for creating interactive and responsive web application I have experience to working with JavaScript, react-redux, node JS, Express js, React Native, next js, SQL, HTML, CSS and other libraries. I am quick learner I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with other to create amazing application.
                </p>
                <div className='flex flex-row mt-8'>
                    {/* <TabButton
                        selectTab={() => handleTabChange("skills")} active={tab === "skills"} >
                        Skills
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("Education")} active={tab === "Education"} >
                        Education
                    </TabButton>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id == tab.content)}</div>
                    <TabButton
                        selectTab={() => handleTabChange("Certifications")} active={tab === "Certifications"} >
                        Certifications
                    </TabButton> */}
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Education</span>
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Experience</span>
                </div>
            </div>
        </div>
        </section>
    )
}

export default AboutSection