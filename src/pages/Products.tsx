import { useContext, useEffect } from "react"
import { cartContextInfo } from "../App"

// category: "men's clothing"
// description: "Ylaptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

const Products = () => {
    const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart,data } = useContext(cartContextInfo) 
   
    useEffect(() => {
        console.log(data)
    },[])

  return (
      <div className="grid place-content-start w-full border border-red-700 items-center">
          
              {
                  data.map((e, index) => (
                              <div>
                                    <p>{e?.category}</p>
                                    <p>{e?.id}</p>
                                    <p>{e?.price}</p>
                                    <p>{e?.title}</p>
                              </div>
                ))    
          } 
          
          
          </div>        
  )
}

export default Products