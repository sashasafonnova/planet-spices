import styles from './styles.module.scss';
import React from 'react';
import catalogMenuList from '../../../assets/catalogMenuList';
import debounce from 'lodash.debounce';


import { useDispatch, useSelector } from 'react-redux';
import { showMenu, changeMenuItem, changeFilterParams } from '../../../redux/slices/filterSlice';
import { useEffect, useState } from 'react';



function CatalogMenu() {

   const dispatch = useDispatch();
   const menuOpen = useSelector(state => state.filterSlice.menuOpen);
   const activeMenuItem = useSelector(state => state.filterSlice.activeMenuItem);
   const [windowSize, setWindowSize] = useState(window.innerWidth);


   const onChangeWindowSize = React.useCallback(
      debounce(() => {
         setWindowSize(window.innerWidth);
      }, 100),
      []
   )


   useEffect(() => {
      window.addEventListener('resize', onChangeWindowSize)
      return () => window.removeEventListener('resize', onChangeWindowSize)
   }, []);


   
    

   const styleMenuItem = (name) => activeMenuItem === name ? styles.btn + ' ' + styles.activeBtn : styles.btn;


   const onClickItem = (menuItem, param, paramValue) => {

      const params = {
         param, 
         paramValue,
      };

      dispatch(changeFilterParams(params));
      dispatch(changeMenuItem(menuItem));
      dispatch(showMenu());
   }
  

   return (
      <div className={styles.wrapper}>
         <div className={styles.choice} onClick={() => dispatch(showMenu())}>
            <button className={styles.choiceBtn}>Выбрать категорию</button>
         </div>
         {(windowSize >= 680 || menuOpen) && <ul className={styles.menu}>
               
            {catalogMenuList.map(el => <li className={styles.item} key={el.name}>
               <button className={styleMenuItem(el.name)} onClick={() => onClickItem(el.item, el.param, el.value)}>{el.name}</button>

               {el.types && el.types.map(type => <ul className={styles.spices} key={type.name}>
                  <li>
                     <button className={styleMenuItem(type.name)} onClick={() => onClickItem(type.item, type.param, type.value)}>{type.name}</button>
                  </li>
               </ul>)}

            </li>)}   

            </ul>}
         
      </div>   
   );
}

export default CatalogMenu;