import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import useGetOneProduct from '../hooks/useGetOneproduct'

function ProductDetail() {
    const route = useParams();
    const { data, loading } = useGetOneProduct(route.id);

    return (
        <>
            {
                loading == true && (
                    <div className='flex justify-center items-center my-10'>
                        <div className='flex items-center gap-1'>
                            <svg className="animate-spin size-6 w-[100px] h-[100px] text-gray-600 mt-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">

                                </path>
                            </svg>
                        </div>

                    </div>
                )
            }
            {
                loading == false && (

                    <div>

                        <div className='bg-gray-100 w-full py-2 font-jost'>
                            <div className='max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-1 text-sm'>
                                <Link to={"/"}>Home</Link>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                </span>
                                <Link to={"/products"}>Products</Link>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                                </span>
                                <span className='font-semibold'>Men cloth</span>

                            </div>
                        </div>
                        <div className='my-10 max-w-[90%] lg:max-w-5xl mx-auto font-jost'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-4'>
                                <div className='p-1 border border-gray-300'>
                                    <img className='w-full h-full object-cover' src={data.image} alt=" " />
                                </div>
                                <div>
                                    <h3 className='text-lg uppercase'>{data.title}</h3>
                                    <h1 className='text-3xl font-bold'>{data.title}</h1>
                                    <h1 className='text-2xl text-red-500 font-bold mt-2'>${data.price}</h1>


                                    <div className='flex items-center gap-4 my-8 flex-col lg:flex-row items-start lg:items-center '>
                                        <div className='border border-gray-300 w-32 py-2 flex items-center justify-evenly'>
                                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>
                                            </button>
                                            <button>1</button>
                                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            </button>
                                        </div>
                                        <button className='bg-[#171717] px-8 py-2 text-white hover:bg-[#333]'>Add to card</button>
                                        <button className='bg-yellow-600 px-8 py-2 text-white hover:bg-yellow-500 transition-all ease-in-out'>Pay now</button>
                                    </div>

                                    <div>
                                        <hr />

                                        <p className='mt-3 text-sm text-gray-500 leading-relaxed line-clamp-2 hover:line-clamp-none transition-all duration-300'>
                                            {data.description}
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                )
            }

        </>
    )
}

export default ProductDetail