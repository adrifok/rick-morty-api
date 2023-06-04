import React from "react";
import { connect, useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards} from "../redux/actions";
import styles from "./Favorites.module.css";

export function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector ((s) => s.myFavorites);
  
  function handleClick(e){
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "filter"){
      return dispatch(filterCards(value));
    }
      if (name === "order"){
        dispatch(orderCards(value));
      }
    }
   // })
    // switch (name) {
    //   case "order":
    //     return dispatch(orderCards(value));
    //   case "filter":
    //     return dispatch(filterCards(value));
    //   default:
    //     //handle the default case here
    //     break;
    // }

  return (
    <div>
      <div className={styles.favs}>
        <select name="order" defaultValue={"Default"} onChange={handleClick}>
          <option value="DEFAULT" disabled >Select Order</option>
          <option value="Ascendente">Upward</option>
          <option value="Descendente">Falling</option>
        </select>

        <select name="filter" defaultValue={"Default"} onChange={handleClick}>
          <option value="DEFAULT" disabled >Select Filter</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      
      </div>
      <div className={styles.cards}>
        )
        {myFavorites.map((character) => (
          <Card
            detailId={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => props.onClose(character.id)}
          />
        ))}
      </div>
    </div>
    
  );
        }

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
