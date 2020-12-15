//Base url
const BASE_URL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth();
  return month < 10 ? `0${month}` : month;
};

const getCurrentDate = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

//today's date
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const poplularGamesUrl = () => `${BASE_URL}${popular_games}`;
export const upcomingGamesUrl = () => `${BASE_URL}${upcoming_games}`;
export const newGamesUrl = () => `${BASE_URL}${newGames}`;

//Game Details
export const gameDetailslUrl = (gameId) => `${BASE_URL}games/${gameId}`;
//Game screenshots
export const screenshotUrl = (gameId) =>
  `${BASE_URL}games/${gameId}/screenshots`;

//Searched games;
export const searchedGameUrl = (name) =>
  `${BASE_URL}games?search=${name}&page_size=9`;
