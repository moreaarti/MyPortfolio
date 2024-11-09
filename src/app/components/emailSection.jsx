import React from 'react'
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/twitter-icon.svg"
import Link from "next/link"
import Image from "next/image"
const emailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
            <div>
                <h5 className='text-xl font-bold text-white my-2'> Let's connect</h5>
                <p className='text-[ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunity, my index is always open. whether you have a question or just want to say hi, I will try my best to get back to you !</p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <Image src={GithubIcon} alt='github Icon' />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt='Linked Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-4'>
                    <div>                    <label htmlfor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input className='bg-[#18191E]' type='email' id='email'
                            required
                            placeholder='gacob@google.com' />
                    </div>

                    <label htmlFor='subject' className='text-white block text-sm font-medium'>Subject</label>
                    <input className='bg-[#18191E]' type='email' id='email'
                        required
                        placeholder='gacob@google.com' />
                </form>
            </div>
        </section>
    )
}

export default emailSection