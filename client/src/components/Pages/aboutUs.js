import Header from "../BoilerPlate/Header"
import Footer from "../BoilerPlate/Footer"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import about from "../images/about1.jpg"
import background from "../images/leaves.jpg"
import Testimonial from "../BoilerPlate/carousel1"

var AboutUs=()=>{
    return(
        <div>
            <Header/>
            <div class="md:flex">
            <div style={{backgroundImage:`url(${background})`}} class=" bg-white flex items-center justify-center w-full px-10 py-8 md:h-128 md:w-1/2">
                <div class="max-w-xl">
                    <h2 class=" text-4xl pb-2 font-semibold text-midnight dark:text-midnight md:text-4xl">Who Are<span class="text-indigo-600 dark:text-indigo-5 00"> We?</span></h2>
                        
                    <p class=" p-5 mt-2 text-lg font-semibold text-midnight dark:text-midnight md:text-lg">MantraFever is a online portal service for Pandit booking, here you can request to book qualified and best Pandit to perform vedic rituals at your home, offices and work place. We believe in delivering the best to our clients, and as a process, we only higher or on board pandits.

MantraFever committed to provides highly qualified and experienced Pandit.

Here you can easily avail qualified and best Pandit on your time at your place with just one click. Online pandit booking option offers with samagri and without samagri. To perform rituals our pandits are available so contact us on mantrafever.in or +91 96620 01600, +91 70160 73654</p>

                </div>
            </div>
            
            <div class="w-full h-64 md:w-1/2 md:h-auto">
                <div class="w-full h-full bg-cover" style={{"background-image": `url(${about})`}}>
                    <div class="w-full h-full"></div>
                </div>
            </div>
        </div>
        <div className="bg-midnight">
       
        <section style={{ position:"relative", zIndex:"1", padding:"7% 15%"}}>
        <Row className="">
            <Col className="text-center" lg ='4' md='4' sm='12'>
            <img style={{height:'100px', margin:'auto'}}  src="https://cdn-icons-png.flaticon.com/512/315/315093.png"></img>
                <h2 style={{ color:'white',fontFamily:"sans-serif", marginTop:'20px'}} >170+</h2>
                <h4 style={{color:'whitesmoke'}}>PUJA PERFORMED</h4>
                </Col>
            <Col className="text-center" lg='4' md='4' sm='12'>
            <img style={{height:'100px', margin:'auto'}}  src="https://cdn4.iconfinder.com/data/icons/people-avatar-2-2/512/66-512.png"></img>
                <h2 style={{color:'white',fontFamily:" sans-serif", marginTop:'20px'}}>200+</h2>
                <h4 style={{color:' whitesmoke '}}>REGISTERED PANDITS</h4>
                </Col>
            <Col className="text-center" lg='4' md='4' sm='12'>
            <img style={{height:'100px', margin:'auto'}}  src="https://static-00.iconduck.com/assets.00/happy-customer-icon-2048x2048-cvvn43tv.png"></img>
                <h2 style={{color:'white',fontFamily:'sans-serif', marginTop:'20px'}}>95%</h2>
                <h4 style={{color:'whitesmoke'}}>SATISFIED CUSTOMERS</h4>
                </Col>
        </Row>
        </section>

    
        </div>
        {/* <Testimonial/> */}

            <Footer/>
            
        </div>
    )
}
export default AboutUs