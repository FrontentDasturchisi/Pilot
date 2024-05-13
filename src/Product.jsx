import React from 'react'
import img1 from "../img/pilot1.jpg"
import img2 from "../img/pilot2.jpg"
import img3 from "../img/pilot3.jpg"
import img4 from "../img/pilot4.jpg"
const Product = () => {
    let Items = [
        {
            id: 1,
            img: img1,
            title: "Junior Cook",
            auther: "The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner developed and manufactured by Boeing Commercial Airplanes. The 777 is the world's largest twinjet and the most-built wide-body airliner."
        },
        {
            id: 2,
            img: img2,
            title: "Middle Cook",
            auther: "The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner developed and manufactured by Boeing Commercial Airplanes. The 777 is the world's largest twinjet and the most-built wide-body airliner."
        },
        {
            id: 3,
            img: img3,
            title: "Senior Cook",
            auther: "The Boeing 777, commonly referred to as the Triple Seven, is an American long-range wide-body airliner developed and manufactured by Boeing Commercial Airplanes. The 777 is the world's largest twinjet and the most-built wide-body airliner."
        },
        {
            id: 4,
            img: img4,
            title: "Chief Cook",
            auther: "The Airbus A340 is a long-range, wide-body passenger airliner that was developed and produced by Airbus. In the mid-1970s, Airbus conceived several derivatives of the A300, its first airliner, and developed the A340 quadjet in parallel "
        }
    ]
    return (
        <div>
            <div className='grid grid-cols-4 overflow-hidden product' id='ranks'>
                {
                    Items.map((item, i) => {
                        return (
                            <div key={i} className='w-[320px] m-auto h-[510px] bg-gray-700 text-white overflow-hidden rounded-lg cart'>
                                <div>
                                    <img className='w-full h-[220px]' src={item.img} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-medium'>{item.title}</h1>
                                    <p>{item.auther}</p>
                                </div>
                                <div className='mt-2 ml-5'>
                                    <button className=' text-center w-[280px] h-[35px] rounded-md bg-blue-700 hover:bg-blue-950 hover:text-white hover:scale-110 text-black duration-300'>More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product
