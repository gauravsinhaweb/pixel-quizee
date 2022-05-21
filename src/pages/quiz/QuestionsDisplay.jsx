import React from "react";
import { useDataContext } from "../../context";

export const QuestionsDisplay = (props) => {
  const { checkedAnswer, setCheckedAnswer } = useDataContext();
  const { question, alphaKey, options, questionCount } = props;

  const getCheckedAnswer = (option) => {
    // will do this work till next PR
  };
  return (
    <>
      <div className="h-full w-full">
        <div className="flex items-baseline text-1xl font-normal text-gray-200 gap-4">
          <span>{questionCount + "."}</span>
          {question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")}
        </div>
        <div className="lg:h-4/5 md:h-4/5 sm:h-4/5 w-full">
          <div className="flex gap-24 justify-center pt-20 items-center flex-wrap ">
            {options &&
              options.map((option, ind) => {
                return (
                  <div
                    onClick={() => getCheckedAnswer(option)}
                    key={ind}
                    className="bg-sky-600 w-1/3 flex rounded h-20 "
                  >
                    <span className="text-white flex justify-center items-center w-20 m-1 text-xl rounded">
                      <p>{alphaKey[ind]}</p>
                    </span>
                    <button className="text-white flex p-4 items-center w-72 bg-sky-100 hover:bg-white focus:bg-gray-400 active:bg-sky-400   capitalize text-gray-800 m-1 text-lg rounded font-bold">
                      <p>
                        {" "}
                        {option
                          .replace(/&quot;/g, '"')
                          .replace(/&#039;/g, "'")
                          .replace(/&amp;/g, "&")
                          .replace(/&lt;/g, "<")
                          .replace(/&gt;/g, ">")}
                      </p>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
