import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Carousel  from "react-bootstrap/Carousel";



const Testimonial=()=>{

    return(<div className=" bg-white" style={{}}>
        <h2 class=" pt-5 text-4xl pb-2 font-semibold text-gray-800 dark:text-gray md:text-4xl">What does the Clients Say<span class="text-indigo-600 dark:text-indigo-5 00"> About Us?</span></h2>
         <Carousel style={{width:"70%", margin:"auto"}}>
        <Carousel.Item>
            
     
        <section style={{}} className="item1" id="testimonials">

<h3 className="testi" style={{color:"black",fontFamily: 'sans-serif', lineHeight:"1.5"}}>Highly satisfied service by MantrFever . Pandit booked just 1 day with all materials.rateful.❤</h3>
<Image  className="meow1" style={{ borderRadius:"100%"}} src="https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png"></Image>
<em style={{fontWeight:"bold", color:"crimson"}} >ANSHIKA SINGH</em>


</section>
       
      </Carousel.Item>
      <Carousel.Item>
            
     
            <section style={{}} className="item1" id="testimonials">
    
    <h3 style={{ color:"black",fontFamily: 'sans-serif', lineHeight:"1.5"}} className="testi">Very nice and Unique service provided by MantraFever. They provide authentic stuff for any occasion.😍 </h3>
    <Image style={{ borderRadius:"100%", padding:"20px"}} className="meow2" src="https://w7.pngwing.com/pngs/915/511/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png"></Image>
    <em style={{fontWeight:"bold", color:"crimson"}} >NIKITA SHAH</em>

    </section>
           
          </Carousel.Item>
          <Carousel.Item>
            
     
            <section style={{}} className="item1" id="testimonials">
    
    <h3 style={{ color:"black",fontFamily: 'sans-serif', lineHeight:"1.5"}} className="testi">My cat used to be so lonely, but with  CatPaw's help, they've found the love of their life. I think.</h3>
    <Image style={{ borderRadius:"100%", padding:"20px"}} className="meow2" src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"></Image>
    <em style={{fontWeight:"bold", color:"white"}} >Beverly, Illinois</em>

    </section>
           
          </Carousel.Item>
          <Carousel.Item>
            
     
            <section style={{}} className="item1" id="testimonials">
    
    <h3 style={{ color:"black",fontFamily: 'Lilita One', lineHeight:"1.5"}} className="testi">My cat used to be so lonely, but with  CatPaw's help, they've found the love of their life. I think.</h3>
    <Image style={{ borderRadius:"100%", padding:"20px"}} className="meow2" src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"></Image>
    <em style={{fontWeight:"bold", color:"white"}} >Beverly, Illinois</em>

    </section>
           
          </Carousel.Item>

    </Carousel>


    <Row className="pb-5 text-center">
    <Col className="w-2" lg="3">
    <Image className="mt-5 mb-4" style={{ width:"200px"}} src="https://pbs.twimg.com/media/FnzvTFzakAEuzxG?format=png&name=360x360" alt="tc-logo"></Image>
    </Col>
    <Col lg="3" >
    <Image className="mt-4 mb-4" style={{textAlign:"center", width:"200px"}} src="https://pbs.twimg.com/media/FnzwSnEX0AUhqW5?format=png&name=360x360" alt="tnw-logo"></Image>
    </Col>
    <Col lg="3">
    <Image className="mt-5 mb-4" style={{textAlign:"center", width:"200px"}} src="https://pbs.twimg.com/media/FnzwcNIX0AE8tyK?format=png&name=360x360" alt="biz-insider-logo"></Image>
    </Col>
    <Col lg="3">
    <Image className="mt-5 mb-4" style={{textAlign:"center", width:"200px"}} src="https://pbs.twimg.com/media/FnzwCB2WIAELAM7?format=png&name=360x360" alt="mashable-logo"></Image>
    </Col>
    </Row>




    </div>)
}
export default Testimonial;