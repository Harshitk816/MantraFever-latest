import Layout from "../components/Layout";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../components/ProductsContext";
import background from "../public/products/leaves.jpg"



export default function CheckoutPage() {
  const {selectedProducts,setSelectedProducts} = useContext(ProductsContext);
  const [productsInfos,setProductsInfos] = useState([]);
  const [address,setAddress] = useState('');
  const [city,setCity] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids='+uniqIds.join(','))
      .then(response => response.json())
      .then(json => setProductsInfos(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts(prev => [...prev,id]);
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts( prev => {
        return prev.filter((value,index) => index !== pos);
      });
    }
  }

  const deliveryPrice = 5;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find(p => p._id === id)?.price || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;

  return (
    <Layout>
      {!productsInfos.length && (
        <div>no products in your shopping cart</div>
      )}
      {productsInfos.length && productsInfos.map(productInfo => {
        const amount = selectedProducts.filter(id => id === productInfo._id).length;
        if (amount === 0) return;
        return (
          <div className="flex">
          
        <div className="ms-10 flex mb-5 items-center" key={productInfo._id}>
          <div className="bg-gray-100 p-3 rounded-xl shrink-0" style={{boxShadow:'inset 1px 0px 10px 10px rgba(0,0,0,0.1)'}}>
            <img className="w-24" src={productInfo.picture} alt=""/>
          </div>
          <div className="pl-4 items-center">
            <h3 className="font-bold text-lg">{productInfo.name}</h3>
            <p className="text-sm leading-4 text-gray-500">{productInfo.description}</p>
            <div className="flex mt-1">
              <div className="grow font-bold">₹{productInfo.price}</div>
              <div>
                <button style={{borderColor:'#051542', color:"#1f2937"}} onClick={() => lessOfThisProduct(productInfo._id)} className="border  px-2 ms-5 rounded-lg ">-</button>
                <span className="px-2">
                  {selectedProducts.filter(id => id === productInfo._id).length}
                </span>
                <button style={{backgroundColor:"#051542",}} onClick={() => moreOfThisProduct(productInfo._id)} className=" px-2 rounded-lg text-white">+</button>
              </div>
            </div>
          </div>
        </div>
        </div>
       
      )})}
      <form action="/api/checkout" method="POST">
        <div className="mt-8">
          <input name="address" value={address} onChange={e => setAddress(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Street address, number"/>
          <input name="city" value={city} onChange={e => setCity(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="City and postal code"/>
          <input name="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="text" placeholder="Your name"/>
          <input name="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-100 w-full rounded-lg px-4 py-2 mb-2" type="email" placeholder="Email address"/>
        </div>
        <div className="mt-8">
          <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
            <h3 className="font-bold">₹{subtotal}</h3>
          </div>
          <div className="flex my-3">
            <h3 className="grow font-bold text-gray-400">Delivery:</h3>
            <h3 className="font-bold">₹{deliveryPrice}</h3>
          </div>
          <div style={{borderColor:"#1f2937"}} className="flex my-3 border-t pt-3 border-dashed ">
            <h3 className="grow font-bold text-gray-400">Total:</h3>
            <h3 className="font-bold">₹{total}</h3>
          </div>
        </div>
        <input type="hidden" name="products" value={selectedProducts.join(',')}/>
        <button style={{backgroundColor:'#051542',}} type="submit" className=" px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-gray-300 shadow-lg">Pay ₹{total}</button>
      </form>
    </Layout>
  );
}
