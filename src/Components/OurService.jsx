import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from './Images/03.jpg'
import Img02 from './Images/04.jpg'
import Img03 from './Images/05.jpg'
import Img04 from './Images/06.jpg'

function OurService() {
    const status = [
        {
            Image: Img01,
            Title:"Software Solutions",
            Number: "10",
            sub: "Morbi in libero blandit lectus cursus ullamcorper.",
            type: "S-SLTN" ,
        },
        {
            Image: Img02,
            Title:"Project Evaluation",
            Number: "24",
            sub: "Morbi in libero blandit lectus cursus ullamcorper.",
            type: "P-EVTN" ,
        },
        {
            Image: Img03,
            Title:"Mobile Technology",
            Number: "26",
            sub: "Morbi in libero blandit lectus cursus ullamcorper.",
            type: "M-TECH" ,

        },
        {
            Image: Img04,
            Title:"General Contractors",
            Number: "30",
            sub: "Morbi in libero blandit lectus cursus ullamcorper.",
            type: "GEN-CON" ,
        },
    ]
    return (
        <div>
            <div className="z-20 relative">
                <h1 className="text-center text-2xl text-white uppercase font-bold border-b border-gray-400 mx-20 pb-7">Our Services</h1>
            </div>
            <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-[5%] mt-10">
                <div className="">
                    <div className="bg-white pt-10 pb-10 pl-10 lg:w-10/12 sm:mb-10 rounded-3xl">
                        <h1 className='text-xl font-bold border-b border-gray-400/40 pb-8'>Categories</h1>
                        <div className="capitalize py-5">
                            <p className='text-sm capitalize font-semibold py-3'>IT Solutions</p>
                            <p className='text-sm capitalize font-semibold py-3'>Tech Development</p>
                            <p className='text-sm capitalize font-semibold py-3'>Project Management</p>
                            <p className='text-sm capitalize font-semibold py-3'>Construction Consultancy</p>
                            <p className='text-sm capitalize font-semibold py-3'>General Contracts</p>
                        </div>
                        <div className="button border-t border-gray-400/40 pt-10 w-full">
                            <Link to="service" className='text-sm text-center mx-auto font-semibold bg-red-800 w-full text-white py-3 mt-6 px-[30%] rounded-full'>ALL SERVICES</Link>
                        </div>
                    </div>
                </div>
                <div className="set col-span-2 ">
                    <div className="sec lg:grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        {status.map((status, index) => (
                            <div className="" key={index}>
                                <div className="">
                                    <figure className='cursor-pointer lg:mb-0 md:mb-5 sm:mb-5'>
                                        <img src={status.Image} alt="" className='w-[100%] rounded-t-2xl'/>
                                        <figcaption className='bg-white rounded-b-2xl py-8 lg:px-10 md:px-5 sm:px-5'>
                                            <div className="flex">
                                                <div className="two">
                                                    <p className='text-sm font-bold text-red-900'>{status.type}</p>
                                                    <p className='text-lg font-bold text-center'>{status.Number}</p>
                                                </div>
                                                <p className='text-center font-bold text-2xl lg:ml-11 md:ml-5 sm:ml-5'>{status.Title}</p>
                                            </div>
                                            <p className='text-sm px-10 lg:ml-10 md:ml-5 sm:ml=2'>{status.sub}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurService