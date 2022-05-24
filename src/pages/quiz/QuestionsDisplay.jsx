import React, { useState } from "react";

export const QuestionsDisplay = (props) => {
  const [checkedAnswer, setCheckedAnswer] = useState(false);
  const [styleCorrectAnswer, setStyleCorrectAnswer] = useState(false);

  const { question, alphaKey, options, questionCount, correct_answer } = props;

  const getCheckedAnswer = (option) => {
    if (option === correct_answer) {
      setCheckedAnswer(true);
    } else if (option !== correct_answer) {
      setCheckedAnswer(false);
    }
    setStyleCorrectAnswer(correct_answer);
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
                    key={ind}
                    className="bg-sky-600 w-1/3 flex rounded h-20 "
                  >
                    <span className="text-white flex justify-center items-center w-20 m-1 text-xl rounded">
                      <p>{alphaKey[ind]}</p>
                    </span>
                    <button
                      onClick={() => getCheckedAnswer(option)}
                      // disabled={styleCorrectAnswer}
                      className={`text-white flex p-4 items-center w-72 bg-sky-100 hover:bg-white ${
                        checkedAnswer
                          ? "focus:bg-green-400 "
                          : "focus:bg-red-400"
                      } active:bg-sky-600 capitalize ${
                        option === styleCorrectAnswer ? "bg-green-500" : ""
                      } text-gray-800 m-1 text-lg rounded font-bold`}
                    >
                      {" "}
                      {option
                        .replace(/&quot;/g, '"')
                        .replace(/&#039;/g, "'")
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")}
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
