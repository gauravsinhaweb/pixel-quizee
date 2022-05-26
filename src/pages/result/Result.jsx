import React from "react";
import { GiTrophy } from "../../services/icons";
import { useDataContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const Result = () => {
  const navigate = useNavigate();
  const { correctAnswerCount, setQuestionCount, setCorrectAnswerCount } =
    useDataContext();
  const takeAnotherQuiz = () => {
    setQuestionCount(1);
    setCorrectAnswerCount(0);
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="bg-gray-900 mt-16 rounded-lg mb-10 h-340 w-4/5 ">
          <div className="flex flex-col items-center h-full px-12 py-8 w-full">
            <div className="text-8xl text-amber-400 ">
              <span>
                <GiTrophy />
              </span>
            </div>
            <div className="flex flex-col items-center font-light justify-center gap-4 h-full">
              <div className="text-lg text-gray-400">Your score</div>
              <div className="text-5xl "> {correctAnswerCount} points</div>
              <div className="text-lg text-gray-400">Highest</div>
              <div className="text-3xl text-green-500"> 150 points</div>
            </div>
            <button
              onClick={takeAnotherQuiz}
              className="bg-amber-400 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-r  gap-2 "
            >
              <span>Take another</span> <span>🚀</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
