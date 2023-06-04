import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [character, setCharacter] =useState('');//string vacio q se llena con lo q el usuario agregue
   
   const handleChange = (e) =>{  //manejador de evento (e) handle change
     const {value} = e.target;
     setCharacter(value);
     //console.log("Value", value);
     console.log(e);
   }
   
   // const clean=(character) => {
      // setCharacter(character= '')
   // }

   // const concatenar =() =>{
      // props.onSearch(character);
      // clean();
   // }

   return (

<div className={styles.container} >
         <input type='search' name='search' id='search' onChange={handleChange} />
      <button onClick={() =>props.onSearch(character)}>add...</button>
      </div>
   );
}
