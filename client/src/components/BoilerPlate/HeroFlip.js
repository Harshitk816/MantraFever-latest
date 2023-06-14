import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/leaves.jpg'
import heroflip from '../images/ganesh.jpg'

export default function HeroFlip() {
    return (
        <div>

        <div class="md:flex"> 
            <div class="bg-sky-200 w-full h-64 md:w-1/2 md:h-auto">
                <div class="w-full h-full bg-cover" style={{"background-image": `url(${heroflip})`}}>
                    <div class="w-full h-full bg-black opacity-25"></div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${background})`}} class=" bg-white flex items-center justify-center w-full px-10 py-8 md:h-128 md:w-1/2">
                <div class="max-w-xl">
                    <h2 class="text-2xl font-semibold text-gray-800 md:text-4xl">Book the Pandit ji nearest to <span class="text-indigo-600 dark:text-indigo-600">You</span></h2>
                        
                    <p class=" p-5 mt-2 text-md text-gray-800 font-semibold dark:text-gray-800 md:text-base">Tired of searching out for the Pandit ji for the right occasion? Straight up! With the help of our website, get the nearest contact information of the Pandit for your occasion. Bring out the best of any festival with the help of our website.</p>

                    <div class="flex mt-6 ml-40">
                        <a  style={{textDecoration: "none"}} class="block ms-5 px-4 py-3 text-md font-semibold text-white transition-colors duration-200 transform bg-mantrablue rounded-md hover:bg-mantrablue"><Link style={{textDecoration: "none", color: "white"}} to="/book">Book now</Link></a>
                        
                    </div>
                </div>
            </div>


        </div>
        
        </div>
    )
}
