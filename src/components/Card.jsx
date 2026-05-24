import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  const { data } = props
  console.log("data", data)
    return (

         <Link to={`/products/${data.id}`} className="group ">
            <figure className="p-2 h-[]160px lg:h-[260px] overflow-hidden">
              <img className="w-full h-64 object-contain p-6 transition-transform duration-500 ease-in-out group-hover:scale-110" src= {data.image} alt="" />
            </figure>
            <div className="px-2 py-1">
              <h3 className="line-clamp-1">Product name</h3>
              <div className='text-sm font-bold'>
              {data.title}
              {data.category}
              </div>
              <p className="text-red-600 text-lg font-semibold">${data.price}</p>
            </div>
          </Link>
    )
}

export default Card