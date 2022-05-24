import React from "react";
import { shuffle, Timer } from "../../utils/util-index";
import { QuestionsDisplay } from "./QuestionsDisplay";
import { BiTimer } from "react-icons/bi";
import { GrNext, GrPrevious } from "react-icons/gr";

export const QuizDisplay = (props) => {
  const {
    questionCount,
    questions,
    questionDecrement,
    questionIncrement,
    submitHandler,
  } = props;
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="bg-gray-900 mt-16 rounded-lg mb-10 h-340 w-4/5 ">
          <div className="flex justify-between text-yellow-300 px-12 py-4">
            <div className="flex items-center gap-2 justify-center">
              <span>
                <BiTimer />
              </span>
              <span>
                <Timer />
              </span>
            </div>
            <div>{`${questionCount}/10`}</div>
            <div className="italic">point 5</div>
          </div>
          <div className="flex h-full px-12 py-4 w-full">
            {questions &&
              questions.map(
                ({ question, correct_answer, incorrect_answers, alphaKey }) => {
                  const options = incorrect_answers.concat(correct_answer);
                  shuffle(options);
                  return (
                    <QuestionsDisplay
                      key={question}
                      question={question}
                      alphaKey={alphaKey}
                      options={options}
                      questionCount={questionCount}
                      correct_answer={correct_answer}
                    />
                  );
                }
              )}
          </div>
        </div>
        <div className="inline-flex">
          {questionCount === 10 ? (
            <>
              <button
                onClick={questionDecrement}
                className="bg-amber-400 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-l flex items-center gap-2 justify-center"
              >
                <span>
                  <GrPrevious />
                </span>
                <span>Prev</span>
              </button>
              <button
                onClick={submitHandler}
                className="bg-amber-400 hover:bg-green-600 text-gray-800 font-bold py-2 px-4 rounded-r flex items-center gap-2 justify-center"
              >
                <span>Submit</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={questionDecrement}
                className="bg-amber-400 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-l flex items-center gap-2 justify-center"
              >
                <span>
                  <GrPrevious />
                </span>
                <span>Prev</span>
              </button>
              <button
                onClick={questionIncrement}
                className="bg-amber-400 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-r flex items-center gap-2 justify-center"
              >
                <span>Next</span>{" "}
                <span>
                  <GrNext />
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
