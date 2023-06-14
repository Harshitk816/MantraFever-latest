import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../images/satyanaryan.jpeg';
import img2 from '../images/ganesh.jpeg';
import img3 from '../images/vishkarma.jpeg';
import img4 from '../images/lakshmi.jpeg';
import img5 from '../images/durga.jpeg';
import img6 from '../images/navratri.jpeg';
import img7 from '../images/diwali.jpeg';
import img8 from '../images/office.jpeg';
import img9 from '../images/udyapan.jpg';
import background from '../images/leaves.jpg'
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";


var PoojaCard=()=>{
    return(<div style={{backgroundImage:`url(${background})`}} className="bg-mantragray">

        <Container>
        <Row  className=' m-4 g-4' >
            <Col lg='4' md='4' sm='6'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">SATYANARAYAN KATHA</Card.Title>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body >
                           
                            <Card.Text>
                            Lord Satyanarayan is one of the most commonly worshipped forms of Lord Vishnu, widely revered by the Hindu religion everywhere. Every month, more...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                             
                        </Card.Body>
                    </Card> 
            </Col>
            <Col lg='4' md='4' sm='6'>
               
                    <Card  style={{ width: '18rem' }}>
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">GANESH POOJA</Card.Title>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                           
                            <Card.Text>
                            Lord Ganesha's whole form is celebrated by the Hindu culture. His head is said to symbolize the pure Atma or the holy, guileless soul, which is the supreme reality...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                             
                        </Card.Body>
                    </Card>
            </Col>
            <Col  lg='4' md='4' sm='6'>
               
                    <Card style={{ width: '18rem' }} >
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">VISHWAKARMA POOJA</Card.Title>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                           
                            <Card.Text>
                            Vishwakarma Puja is celebrated to worship Lord Vishwakarma. He is the chief architect and engineer of the Gods. Vishwakarma Ji knows as the...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                             
                        </Card.Body>
                    </Card>
                
            </Col>
            
        </Row>
        <Row  className='  m-4 g-4'>
            <Col lg='4' md='4' sm='6'>
              
                    <Card style={{ width: '18rem' }}>
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">DURGA POOJA</Card.Title>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                           
                            <Card.Text>
                            Durga is the universal mother Goddess. She is the aggressive form of the divine Shakti and remains a very widely worshipped divinity. The...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text ></Card.Text>
                             
                        </Card.Body>
                    </Card>
                
            </Col>
            <Col lg='4' md='4' sm='6'>
                
                    <Card style={{ width: '18rem' }}>
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">NAVRATRI POOJA</Card.Title>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                           
                            <Card.Text>
                            Navratri is amongst the most important Hindu festivals. This auspicious festival is celebrated with great zeal and devotion throughout the country. The literal...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                             
                        </Card.Body>
                    </Card>
                
            </Col>
            <Col  lg='4' md='4' sm='6'>
                
                    <Card style={{ width: '18rem' }} >
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">DIWALI POOJA</Card.Title>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                           
                            <Card.Text>
                            Diwali is the festival of Laxmi, the Goddess of prosperity and wealth. It is believed that Goddess Laxmi visits everyone during Diwali and and brings peace and prosperity...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                             
                        </Card.Body>
                    </Card>
                
            </Col>
          
        </Row>
        <Row className='  m-4 g-4'>
            <Col lg='4' md='4' sm='6'>
                
                <Card style={{ width: '18rem' }}>
                <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">OFFICE POOJA</Card.Title>
                    <Card.Img variant="top" src={img8} />
                    <Card.Body>
                       
                        <Card.Text>
                        Office Opening Pooja is required before entering into a new office or working place to have a positive and fresh start to get all the success and happiness...
                        </Card.Text>
                        <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                        <Card.Text></Card.Text>
                         
                    </Card.Body>
                </Card>
           
            </Col>
            <Col lg='4' md='4' sm='6'>
               
                    <Card style={{ width: '18rem' }}>
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">LAKSHMI POOJA</Card.Title>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                           
                            <Card.Text>
                            Laxmi Puja is totally dedicated to Diwali on which, Goddess Laxmi visits one’s home. There are a total of 16 rituals for the proper completion of this pooja...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                             
                        </Card.Body>
                    </Card>
                
            </Col>
            <Col lg='4' md='4' sm='6'>
               
                    <Card style={{ width: '18rem' }}>
                    <Card.Title className="bg-midnight text-white p-3 mx-0 my-0 rounded">UDYAPAN POOJA</Card.Title>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                           
                            <Card.Text>
                            Udyapan is performed by Watering a banana plant, Havan is performed. Dakshina is given to the Brahmins invited to perform the Udyapan Puja...
                            </Card.Text>
                            <Card.Subtitle className="transition-colors duration-200 transform bg-midnight text-white p-3 mx-0 my-0 rounded hover:bg-mantrablue"><Link className="no-underline text-white" to='/book'> Price : 2100</Link></Card.Subtitle>
                            <Card.Text></Card.Text>
                            
                        </Card.Body>
                    </Card>
                
            </Col>
        
        </Row >
        </Container>
        </div>
        
        
    );
}

export default PoojaCard;