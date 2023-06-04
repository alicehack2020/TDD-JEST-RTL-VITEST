import { useGlobalContext } from "../reducer/cartContext"
import Zoom from 'react-img-zoom'

const Products = () => {
    const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart, cartData,load } = useGlobalContext()
 
     

    return (
        <>
              <Zoom
                    img="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
                    zoomScale={3}
                    width={600}
                    height={600}             
                    />
             <div className="flex justify-end p-4">
              <button className="p-2 bg-red-400 rounded-lg shadow-md m-2 hover:lowercase" onClick={clearCart}>CLEAR</button>
              <button className="p-2 bg-red-400 rounded-lg shadow-md m-2 hover:lowercase" onClick={load}>RELOAD</button>
             </div>
            
            {
             cartData.length>0?(<div className="grid place-content-start w-full  items-center grid-cols-4 gap-4 p-4 overflow-x-hidden mt-8">
             {
               cartData?.map((e:any, index:number) => (
                 <div className="shadow-lg relative p-2     ">
                   <div className="flex justify-between px-6">
                           <p>{e?.category}</p>
                     
                   <img src={e.image} alt="" className="w-20 absolute right-0 -top-4 rounded-lg border-t-8 border-green-600  p-2  "/> 
                   </div>

                    <p>{e?.id}</p>
                    <p>{e?.price}</p>
                     <p className="mt-4 ">{e?.title}</p>
                     <div>
                     <button className="p-2 bg-green-400 rounded-lg shadow-md m-2">ADD</button>  
                     <button className="p-2 bg-red-400 rounded-lg shadow-md m-2" onClick={()=>removeItem(e?.id)}>REMOVE</button>  
                      </div>
                    
               </div>
               ))    
         } 
         

                </div>) : <div className="grid place-content-center animate-pulse">
                        
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3349860-2810775.png?f=avif" alt="" />
         </div>   
            }
             
      </>
             
  )
}

export default Products