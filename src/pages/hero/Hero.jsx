import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryCard } from "../../components";
import { useDataContext } from "../../context";
import { getData } from "../../utils/util-index";

export const Hero = () => {
  const { dataState, dataDispatch } = useDataContext();
  const categoryData = dataState.categories;
  const navigate = useNavigate();

  useEffect(() => {
    getData("get", "/api/categories", dataDispatch);
  }, []);
  const categoryCardHandler = (rules, categoryNumber, questions) => {
    dataDispatch({ type: "SET_RULE", payload: rules });
    dataDispatch({ type: "SET_QUESTIONS", payload: questions });

    navigate(`/category/${categoryNumber}/question/1`);
  };

  return (
    <>
      <div className="px-28 py-8">
        <h1 className="font-light  text-white text-4xl uppercase cursor-pointer">
          Welcome to
          <span className="cursive text-yellow-400 px-4 font-bold tracking-normal">
            quizee
          </span>
        </h1>
      </div>

      <section>
        <div className="flex justify-center py-8 flex-wrap gap-8">
          {categoryData &&
            categoryData.map(
              ({ category, categoryNumber, image, rules, questions }, ind) => (
                <div
                  key={ind}
                  onClick={() =>
                    categoryCardHandler(rules, categoryNumber, questions)
                  }
                  className="border-4 lato border-transparent relative w-60 h-30 cursor-pointer will-change-auto  rounded-xl overflow-hidden hover:border-4 hover:border-yellow-600 shadow-lg transition-all duration-200 ease-in-out"
                >
                  <CategoryCard category={category} image={image} />
                </div>
              )
            )}
        </div>
      </section>
    </>
  );
};
//
