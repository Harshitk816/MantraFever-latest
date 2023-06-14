import Footer from "./Footer1";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "./ProductsContext";
import Header from "./Header";
import FooterPro from "./Footer";
import background from "../public/products/leaves.jpg"



export default function Layout({children}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  const [success,setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <Header/>
      
      <div style={{backgroundImage:`url(${background})`}}  className="p-5">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      <Footer />
      <FooterPro/>
    </div>
  );
}