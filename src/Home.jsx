import React from 'react'
// import home from "../img/home.jpg"

const Home = () => {
  return (
    <div className='flex items-center home' id='home1'>

      <div className='flex flex-col items-end max-md:w-full max-md:text-center max-md:mt-5   title_text w-[50%] '>
        <p className='text-white text-xl font-semibold pl-5 pr-5'>Co-Pilot is an American aerospace, arms, defense, information security, and technology corporation with worldwide interests. It was formed by the merger of Lockheed Corporation with Martin Marietta in March 1995. It is headquartered in North Bethesda, Maryland, in the Washington, D.C. area. As of January 2022, Lockheed Martin employs approximately 115,000 employees worldwide, including about 60,000 engineers and scientists.</p>
      </div>
     <div className='mt-8'>
     <img className='rounded-full' src="https://img.freepik.com/free-photo/3d-icon-travel-with-airplane_23-2151037350.jpg" alt="" />
     </div>
    </div>
  )
}

export default Home
