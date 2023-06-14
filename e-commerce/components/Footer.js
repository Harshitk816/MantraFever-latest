import React from 'react'


var FooterPro=()=> {
    return (
        <div>
            <footer style={{backgroundColor:"#051542",color:'white'}} class="relative pt-8 pb-6 bg-gray-800">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden mt-44"
        style={{"height": "80px"}}
      >
       
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold">Get Professional help!</h4>
            <h5 class="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6">
              <button
                class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src="https://s2.svgbox.net/social.svg?ic=instagram&color=000" width="28" height="28"/></button
              ><button
                class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src="https://s2.svgbox.net/social.svg?ic=twitter&color=000" width="32" height="32"/></button
              ><button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src="https://s2.svgbox.net/social.svg?ic=telegram&color=000" width="32" height="32"/></button
              ><button
                class="bg-white  shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src="https://s2.svgbox.net/social.svg?ic=discord&color=000" width="32" height="32"/>
              </button>
            </div>
          </div>
          <div class=" w-40 lg:w-6/12 px-4">
           
              
                <span
                  class="block uppercase text-white text-sm font-semibold mb-2"
                  >Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a href='http://localhost:3001/aboutus' 
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      >About Us</a>
                  </li>
                  <li>
                    <a href='http://localhost:3001/sign-in '
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm">Store</a>
                  </li>
                  <li>
                    <a href='http://localhost:3001/book'
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
            
                      >Book Pandit</a>
                  </li>
                  <li>
                    <a href='http://localhost:3001/sign-in'
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm">Products</a>
                  </li>
                </ul>
        
          </div>
        </div>
        <hr class="my-6 border-white" />
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-white font-semibold py-1">
              Copyright © 2021 MantraFever
              <a class="text-white hover:text-gray-200"> Pvt limited</a >
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}
export default FooterPro
