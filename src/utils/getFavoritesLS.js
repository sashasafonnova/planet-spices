
export const getFavoritesLS = () => {
   const data = localStorage.getItem('favorites');
   const products = data ? JSON.parse(data) : [];
   
   return products;
}





