import './scss/styles.scss';
import React from 'react';
import Header from './components/HeaderBlock/Header';
import Main from './pages/Main';
import FormQuestion from './components/FormsBlock/FormQuestion';
import Footer from './components/FooterBlock/Footer';
import Catalog from './pages/Catalog';
import { Route, Routes } from "react-router-dom";
import Delivery from './pages/Delivery';
import CartPage from './pages/CartPage';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import DataCustomer from './pages/DataCustomer';
import FormSuccess from './components/FormsBlock/FormSuccess';

import { useSelector } from 'react-redux';



function App() {

  const formStatus = useSelector(state => state.formsSlice.formStatus);

  return (
    
    <div className="wrapper">
      <React.StrictMode>
      <Header />
      <Routes>
        <Route path="/planet-spices" element={<Main/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/delivery" element={<Delivery/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/datacustomer" element={<DataCustomer />} />

      </Routes>  
      <FormQuestion/>
      <Footer/>
      {formStatus && <FormSuccess/>}
      </React.StrictMode>
    </div>
    
  );
}

export default App;
