import { calcPrice } from "./calcPrice";


export const getCartLS = () => {
   const products = JSON.parse(localStorage.getItem('products')) || [];
   const totalPrice = calcPrice(products);

   return {
      products,
      totalPrice,
   }
}