import axios from "axios";

export const getData = async (request, url, dispatch) => {
  try {
    const res = await axios({
      method: request,
      url: url,
    });
    if (res.status === 200 || res.status === 201) {
      dispatch({ type: "GET_DATA", payload: res.data.categories });
    }
  } catch (error) {
    console.log(error);
  }
};
