import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#171717] py-4 text-white">
            <div className="max-w[90%] py-8 lg:max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                <p>Copy Right&#169; - IT Cambodia</p>
                <ul className="flex items-center gap-4">
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Term and Conditional</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer