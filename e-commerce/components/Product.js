import {useContext} from "react";
import {ProductsContext} from "./ProductsContext";


export default function Product({_id,name,price,description,picture}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts(prev => [...prev,_id]);
  }
  return (
    <div className="w-52 ml-4">
      <div className="bg-gray-100 p-5 rounded-xl">
        <img src={picture} alt=""/>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow ">₹{price}</div>
        <button onClick={addProduct} style={{backgroundColor:"#051542"}} className=" text-white  py-1 px-3 rounded-xl">+</button>
      </div>
    </div>
  );
}
