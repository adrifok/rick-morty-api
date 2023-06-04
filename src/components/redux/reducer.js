import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from './types';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case DELETE_FAVORITES:
      const filtered = state.myFavorites.filter((ch) => {
        return ch.id !== payload;
      });
      return {
        ...state,
        myFavorites: filtered,
        allCharacters: filtered,
      };

    case FILTER:
      const filterCopy = [...state.myFavorites];
      const filter = filterCopy.filter((ch) => ch.gender === payload);
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER:
      const orderCopy = [...state.allCharacters];
      const order = orderCopy.sort((a, b) => {
        if (payload === "Ascending") return a.id - b.id;
        if (payload === "Descending") return b.id - a.id;
        else return 0;
      });
      return {
        ...state,
        myFavorites: order,
      };

    default:
      return state;
  }
}
