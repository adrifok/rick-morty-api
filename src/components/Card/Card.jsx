import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../redux/actions";
import { connect, useDispatch ,  useSelector} from "react-redux";
import { useEffect, useState } from "react";


export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const character = [];

  const myFavorites = useSelector((s)=> s.myFavorites) //s---> state

  
  function handleFavorite(character) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(character.id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(character));
    }
  }

  useEffect(() => {
    if (myFavorites && Array.isArray(character)) {
      myFavorites.forEach((favCharacter) => {
        if (favCharacter.id === props.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites, props.id]);


 return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <span role="img" aria-label="Favorite">
            <button onClick={() => handleFavorite(props)}>❤️</button>
          </span>
        ) : (
          <span role="img" aria-label="Not Favorite">
            <button onClick={() => handleFavorite(props)}>🤍</button>
          </span>
        )}

        <button onClick={props.onClose}>X</button>
      </div>
      <div className={styles.dataContainer}>
        <Link to={`/detail/${props.detailId}`}>
          <h2>{props.name}</h2>
          <img className={styles.image} src={props.image} alt={props.name} />
          <div className={styles.data}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
          </div>
        </Link>
      </div>
    </div>
  )
 
        }
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function matchDispatchToProps(dispatch) {
  return {
    addFavorites: function (character) {
      dispatch(addFavorites(character));
    },
  
    deleteFavorites: function (id) {
      dispatch(deleteFavorites(id));
    }
  
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(Card);
