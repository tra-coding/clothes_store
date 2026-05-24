import React from 'react'

function About() {
    return (
        <div className='max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost'>
            <div className='grid grid-cols-1 items-start lg:grid-cols-2 gap-4 '>
                <div>
                    <img className='w-full h-full' src="./about_us.webp" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-2'>Our Story</h1>
                    <p className='mt-4 text-gray-500 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed perspiciatis, perferendis earum modi fuga facilis? Autem harum tenetur quo accusamus quidem, fugit pariatur provident quis, maiores perspiciatis necessitatibus, consequuntur soluta praesentium omnis doloribus non veniam tempore esse repellendus. Nobis temporibus ex laudantium, veniam nostrum corrupti, voluptates, quae minima cupiditate inventore architecto nisi nemo. Nemo, ullam error recusandae quis laudantium assumenda quidem, id aliquam vitae exercitationem odio sequi cupiditate illo hic reprehenderit deleniti dolores consequatur quam sit dolor! Placeat nisi alias minus blanditiis perspiciatis neque fugit, nulla vitae possimus, culpa cum deleniti illum, consequuntur excepturi similique hic optio iusto dignissimos?</p>
                </div>
            </div>
        </div>
    )
}

export default About