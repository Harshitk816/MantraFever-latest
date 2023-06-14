import React from 'react'
import { Link } from 'react-router-dom'
import background from '../images/leaves.jpg'
import hero from '../images/hanuman.jpg'

export default function Hero() {
    return (
        <div>

        <div class="md:flex">
            <div style={{backgroundImage:`url(${background})`}} class=" bg-white flex items-center justify-center w-full px-10 py-8 md:h-128 md:w-1/2">
                <div class="max-w-xl">
                    <h2 class=" text-4xl pb-2 font-semibold text-gray-800 dark:text-gray md:text-4xl">Find the perfect Pooja For <span class="text-indigo-600 dark:text-indigo-5 00">You</span></h2>
                        
                    <p class=" p-5 mt-2 text-lg font-semibold text-gray-800 dark:text-gray-800 md:text-lg">Find the best suited Pooja for the suitable occasion with our website. You can also find the relevant Samagri in our prestigious Store. Bring out the best of the festive with the help of our website.</p>

                    <div class="flex mt-6 ml-32">
                        <a style={{textDecoration: "none"}} class="block px-4 py-3 ms-5 text-md font-semibold text-white transition-colors duration-200 transform bg-mantrablue rounded-md hover:bg-mantrablue"><Link style={{textDecoration: "none", color: "white"}} to="/pooja">Explore now</Link></a>
                        
                    </div>
                </div>
            </div>
            
            <div class="w-full h-64 md:w-1/2 md:h-auto">
                <div class="w-full h-full bg-cover" style={{"background-image": `url(${hero})`}}>
                    <div class="w-full h-full"></div>
                </div>
            </div>
        </div>
        
    
        </div>
    )
}
