import React, { useState } from "react";
import { useDataContext } from "../../context";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Modal = (props) => {
  const { IsOpen, setIsOpen } = props;
  const { dataState } = useDataContext();
  const [checked, setChecked] = useState(false);

  const rules = dataState.rules;

  const startHandler = (e) => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="fixed backdrop inset-0 z-10 flex items-center justify-center backdrop-background">
        <div className="absolute p-8 bg-gray-900 px-12 rounded max-w-2xl">
          <h1 className="text-2xl">Instructions:</h1>

          <ul className="mt-12 text-lg font-light">
            {rules &&
              rules.map((rule) => (
                <li className="py-2 flex gap-4  items-baseline" key={rule}>
                  <span className="text-sm text-yellow-400">
                    <HiOutlineArrowNarrowRight />
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
          </ul>
          <div className="flex justify-center items-center mt-4">
            <input
              onChange={(e) => setChecked(e.target.checked)}
              id="check"
              type="checkbox"
            />
            <label htmlFor="check" className="px-2 font-normal">
              I've read all the instructions carefully.
            </label>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              disabled={!checked}
              onClick={(e) => startHandler(e)}
              className={`${
                checked ? "bg-amber-400 active:bg-yellow-600" : "bg-gray-400 "
              } text-gray-800 font-bold py-1 px-4 rounded flex items-center gap-2 justify-center`}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
