import React from 'react'


export default function Header() {
    return (
        <div>
            <nav style={{backgroundColor:"#051542"}} class=" shadow bg-gray-800">
                <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div class="flex items-center justify-between">
                        <div>
                            <a href='http://localhost:3001/' class="text-2xl font-bold text-white dark:text-white md:text-2xl hover:text-gray-300 dark:hover:text-gray-300" >
                            MantraFever</a>
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
                            <a href='http://localhost:3001/' class="my-1  text-md font-medium text-white dark:text-white hover:text-gray-200  md:mx-4 md:my-0" >Home</a>
                            <a href='http://localhost:3001/sign-in' class="my-1 text-md font-medium text-white dark:text-white hover:text-gray-200  md:mx-4 md:my-0" > Shop</a>
                            <a href='http://localhost:3001/pooja' class="my-1 text-md font-medium text-white dark:text-white hover:text-gray-200  md:mx-4 md:my-0" >Pujas</a>
                            <a href='http://localhost:3001/aboutus' class="my-1 text-md font-medium text-white dark:text-white hover:text-gray-200  md:mx-4 md:my-0" >About Us </a>
                        </div>
        
                        
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
