export const dataReducer = (dataState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...dataState, categories: action.payload };
    case "SET_RULE":
      return { ...dataState, rules: action.payload };
    case "SET_QUESTIONS":
      return { ...dataState, questions: action.payload };
    default:
      return dataState;
  }
};
