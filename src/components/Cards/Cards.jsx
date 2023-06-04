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
      species={character.species}
      image={character.image}
      onClose={() => props.onClose(character.id)} 
      />
      ))}
   </div>
   );
}
 