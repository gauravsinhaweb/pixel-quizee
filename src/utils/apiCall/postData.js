import axios from "axios";

export const postData = async (
  request,
  url,
  video,
  dispatch,
  type,
  setLoading
) => {
  const encodedToken = localStorage.getItem("token");
  axios.defaults.headers.common["authorization"] = encodedToken;
  try {
    const response = await axios({
      method: request,
      url: url,
      data: { video },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    // toast.warn(
    //   "you have already performed this action or you need to login first!"
    // );
  }
};
