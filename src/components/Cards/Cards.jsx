import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';


export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cards}>
      {characters.map(character => (
         <Card 
         detailId={character.id}
         key={character.id}
         name={character.name} 
         gender={character.gender}
         image={character.image}
         species={character.species}
         onClose={() => props.onClose(character.id)} 
         />
         ))}
         <h3 className={styles.love}>Made with &hearts; by Adriana Ferrari</h3>
   </div>
   );
}
 