import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal/Modal";
import { useDataContext } from "../../context";
import { QuizDisplay } from "./QuizDisplay";

export const Quiz = () => {
  const { dataState, isOpen, setIsOpen, questionCount, setQuestionCount } =
    useDataContext();
  const navigation = useNavigate();
  const questions = dataState.questions.slice(
    Number(questionCount - 1),
    Number(questionCount)
  );

  const questionIncrement = () => {
    if (questionCount < 10) {
      setQuestionCount(questionCount + 1);
    }
  };
  const questionDecrement = () => {
    if (questionCount > 1) {
      setQuestionCount(questionCount - 1);
    }
  };
  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == "37") {
      questionDecrement();
    } else if (e.keyCode == "39") {
      questionIncrement();
    } else if (e.keyCode == "32") {
      questionIncrement();
    }
  }
  useEffect(() => {
    if (questions.length === 0) {
      navigation("/");
    }
  }, []);
  const submitHandler = () => {
    // will do this work till next PR
  };
  return (
    <>
      <QuizDisplay
        questionCount={questionCount}
        questions={questions}
        questionDecrement={questionDecrement}
        questionIncrement={questionIncrement}
        submitHandler={submitHandler}
      />
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};
