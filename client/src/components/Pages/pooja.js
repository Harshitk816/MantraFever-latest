
import Header from "../BoilerPlate/Header";
import Footer from "../BoilerPlate/Footer";
import PoojaCard from "../BoilerPlate/card";
import background from "../images/leaves.jpg"
var Pooja=()=>{
    return(
        <div  style={{backgroundImage:`url(${background})`,overflow:'hidden'}} className="bg-mantragray">
            <Header/>
            <PoojaCard/>
            <Footer></Footer>
        </div>
    )
}
export default Pooja;