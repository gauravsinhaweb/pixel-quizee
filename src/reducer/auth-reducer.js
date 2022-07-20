export const authReducer = (authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...authState, isUserLoggedIn: action.payload };
    case "SET_VIDEOS":
      return { ...authState, videos: action.payload };
    case "SET_CATEGORIES":
      return { ...authState, categories: action.payload };
    default:
      return authState;
  }
};
