import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav class=" navbar shadow bg-midnight">
                <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div class="flex items-center justify-between">
                        <div >
                            <a class=" customshadow text-2xl  no-underline font-bold text-white  md:text-2xl hover:text-gray-300 dark:hover:text-gray-300" >
                              <Link  style={{color:'white', textDecoration:'none'}} to="/"><p className='drop-shadow-lg shadow-black'>MantraFever</p></Link></a>
                        </div>
                        
                        <div class="flex md:hidden">
                            <button type="button" class="text-white dark:text-gray-200 hover:text-white dark:hover:text-gray-400 focus:outline-none focus:text-white dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
        
                    <div class="items-center md:flex">
                        <div class="flex flex-col md:flex-row md:mx-6">
                            <a  class="customshadow my-1 no-underline text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link style={{color:'white', textDecoration:'none'}} to="/">Home</Link></a>
                            <a class="customshadow my-1 no-underline text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link  style={{color:'white', textDecoration:'none'}} to="/sign-in">Shop</Link> </a>
                            <a class= "customshadow my-1 no-underline text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link  style={{color:'white', textDecoration:'none'}} to="/pooja">Pujas</Link></a>
                            <a class="customshadow my-1 no-underline text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link  style={{color:'white', textDecoration:'none'}} to="/book">Book Pandit</Link> </a>
                            <a class="customshadow my-1 no-underline text-md font-medium text-white dark:text-gray-200 hover:text-gray-200 dark:hover:text-indigo-400 md:mx-4 md:my-0" ><Link  style={{color:'white', textDecoration:'none'}} to="/aboutus">About Us</Link> </a>
                        </div>
        
                        
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
