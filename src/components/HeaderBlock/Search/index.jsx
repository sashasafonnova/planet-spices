import styles from './styles.module.scss';
import React from 'react';
import { Link } from "react-router-dom";
import { changeFilterParams } from '../../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import clearSearchSVG from '../../../assets/img/search/clearSearch.svg';


function Search() {

    
    const [inputValue, setInputValue] = React.useState('');
    const dispatch = useDispatch();   
    
    
    const sendParams = React.useCallback(
        debounce((params) => {
        dispatch(changeFilterParams(params));
    } , 500), [])


    const onChangeSearch = (value) => {
        setInputValue(value);
        const params = {
            param: 'search',
            paramValue: value,
        };
        sendParams(params);
    }
       

    const clearSearch = () => {
        setInputValue(''); 
        inputSearch.current.focus();
        sendParams('');
    }


    const inputSearch = React.useRef();


    return (
        <div className={styles.search}>
            <Link to='/catalog' className={styles.link}>
                <input ref={inputSearch} className={styles.input} value={inputValue} onChange={(event) => onChangeSearch(event.target.value)} type='input' placeholder='Поиск по каталогу...'/>
            </Link>
            {inputValue ? (
                <button className={styles.btn} onClick={() => clearSearch()}>
                    <img className={styles.img} src={clearSearchSVG} alt='clearSearchs' />
            </button>) : (
            <svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="white"/>
            </svg>)}  
        </div>
    );
}

export default Search;