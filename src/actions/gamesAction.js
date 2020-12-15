import axios from "axios";
import {
  poplularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchedGameUrl,
} from "../api";

//Action:- object that describes what we gonna do.
//Dispatch :- used to send action to the reducer.
//Action creator :- that returns action.
export const loadGames = () => async (dispatch) => {
  //Fetch data with axios
  const popularGames = await axios.get(poplularGamesUrl());
  const upcomingGames = await axios.get(upcomingGamesUrl());
  const newGames = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      newGames: newGames.data.results,
      upComingGames: upcomingGames.data.results,
    },
  });
};

export const fetchSearch = (name) => async (dispatch) => {
  const searchedGames = await axios.get(searchedGameUrl(name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searchedGames: searchedGames.data.results,
    },
  });
};
