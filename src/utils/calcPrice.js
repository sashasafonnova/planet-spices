export const calcPrice = (products) => {
   
   return products.reduce((sum, product) => product.price * product.count + sum, 0);
   
}