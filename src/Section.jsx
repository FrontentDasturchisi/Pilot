import React from 'react'
import uchuvchi from "../img/uchuvchi.jpg"
const Section = () => {
    return (
        <div>
            <div className='flex items-center home' id='fly'>

                <div className=' pt-5 pl-3 object-cover home_img'>
                    <img className='rounded-xl w-full object-cover ' src={uchuvchi} alt="" />
                </div>

                <div className='flex flex-col  w-full title_text '>
                    <p className='text-white text-xl font-semibold pl-5 pr-5'>Although the airline industry is highly competitive, the competition among aircraft suppliers is relatively limited. Lesser-known makers of large passenger airplanes are attempting to build a more significant presence on the world's stage. Still, in the large commercial aircraft market, there are just two major players: the U.S.-based Boeing (BA) and the Airbus Group (EADSY), formerly known as the European Aeronautic Defense and Space Company (EADS).</p>
                    {/* <button className='bg-blue-700 w-[120px] h-11 rounded-md mr-7 text-white mt-5 hover:bg-transparent hover:border'>Read All</button> */}
                </div>

            </div>
        </div>
    )
}

export default Section