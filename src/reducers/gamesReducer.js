const initialState = {
  popularGames: [],
  newGames: [],
  upComingGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames: action.payload.popular,
        newGames: action.payload.newGames,
        upComingGames: action.payload.upComingGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searchedGames: action.payload.searchedGames,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searchedGames: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
