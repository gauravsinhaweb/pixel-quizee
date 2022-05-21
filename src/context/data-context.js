import React, { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/index";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [checkedAnswer, setCheckedAnswer] = useState([]);

  const [dataState, dataDispatch] = useReducer(dataReducer, {
    categories: [],
    rules: "",
    questions: [],
  });

  const value = {
    dataState,
    dataDispatch,
    loading,
    setLoading,
    isOpen,
    setIsOpen,
    checkedAnswer,
    setCheckedAnswer,
    questionCount,
    setQuestionCount,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
