import React from 'react'
import taom from "../img/pilot.avif"
const About = () => {
    return (
        <div className='mb-[100px] mt-[100px] about' id="about2">
        
            <div className='flex about'>
               
                <div className="about_img border-4 rounded-xl">
                    <img className='rounded-lg ' src={taom} alt="" />
                </div>
                <div className='w-[50%] about_child flex justify-center items-center'>
                    <p className='text-white font-semibold text-3xl pl-5 pr-5'>Founded in 1986, Co-Pilot is the authoritative, independent, professional news source for the world’s defense decision-makers. In print and online, we provide the global defense community with the latest news and analysis on programs, policy, business and technology. Our bureaus and reporters around the world set the standard for accuracy, credibility and timeliness in defense reporting.</p>
                </div>
            </div>
        </div>
    )
}

export default About