import axios from "axios";
import { gameDetailslUrl, screenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailslUrl(id));
  const screenshots = await axios.get(screenshotUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshots.data,
    },
  });
};
