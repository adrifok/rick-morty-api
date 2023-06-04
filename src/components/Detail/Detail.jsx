import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('Invalid character ID');
        }
      })
      .catch((err) => {
        window.alert('Invalid character ID');
      });
  }, [detailId]);

  return (
    <div className={styles.detail}>
      <div className={styles.txt}>
        <div className={styles.bttn}>
          <h1>{character.name}</h1>
          <h3>State: {character.status}</h3>
          <h3>Species: {character.species}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Origin: {character.origin && character.origin.name}</h3>
        </div>
        <img className={styles.image} src={character.image} alt={character.name} />
        <div>
          <button className="goback" onClick={() => navigate("/cards")}>Go Back!</button>
        </div>
      </div>
    </div>
  );
}
