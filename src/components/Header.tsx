import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../types/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faBars } from "@fortawesome/free-solid-svg-icons";

import Picture from "./Picture";
import ContactArea from "./ContactArea";

import itFlag from "../assets/it 2.svg";
import gbFlag from "../assets/gb 2.svg";
import { actions } from "../store/store";

const Header = ({ onToggleDarkMode }: { onToggleDarkMode: () => void }) => {
  const dispatch = useDispatch();
  const { isDarkMode, language } = useSelector((state: AppState) => state);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSwitchLanguage = (lang: string) => {
    console.log(`Language is ${language}. Switching to ${lang}`);
    dispatch(actions.switchLanguage(lang));
  };

  return (
    <div className="py-0 xl:py-5">
      <div className="py-5 xl:py-10 px-0 mx-auto xl:px-20 transition-all 1s ease-in-out">
        <div className="flex flex-col xl:flex-row w-full items-center xl:justify-between relative">
          <div className="flex flex-col xl:flex-row items-center xl:justify-start">
            <Picture />
            <ContactArea />
          </div>
          <div
            className={`absolute flex flex-col top-5 right-5 xl:top-1/2 xl:-translate-x-1/2 xl:right-0 border-2 border-tblue dark:border-light rounded-full p-3 justify-center`}
          >
            <button
              className="items-center text-tblue dark:text-light"
              style={{ justifySelf: "flex-end" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} size="2x" fixedWidth />
            </button>
            {isOpen && (
              <div className="flex flex-col mt-3">
                <button
                  className="border-none bg-transparent text-tblue dark:text-orange cursor-pointer transition-all 1s ease-in-out"
                  onClick={onToggleDarkMode}
                  style={{ justifySelf: "flex-end" }}
                >
                  {isDarkMode ? (
                    <FontAwesomeIcon
                      icon={faCircleHalfStroke}
                      flip="horizontal"
                      className="w-[1.75rem] h-[1.75rem]"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleHalfStroke}
                      className="w-[1.75rem] h-[1.75rem]"
                    />
                  )}
                </button>
                {language === "en" ? (
                  <button
                    className="flex justify-center items-center mt-3"
                    onClick={() => handleSwitchLanguage("it")}
                  >
                    <img
                      src={itFlag}
                      alt=""
                      className={`rounded-full w-[1.75rem] h-[1.75rem] border-2 border-tblue dark:border-light`}
                    />
                  </button>
                ) : (
                  <button
                    className="flex justify-center items-center mt-3"
                    onClick={() => handleSwitchLanguage("en")}
                  >
                    <img
                      src={gbFlag}
                      alt=""
                      className={`rounded-full w-[1.75rem] h-[1.75rem] border-2 border-tblue dark:border-light`}
                    />
                  </button>
                )}
              </div>
            )}

            {/* <button
              className="border-none bg-transparent text-tblue dark:text-orange cursor-pointer transition-all 1s ease-in-out"
              onClick={onToggleDarkMode}
              style={{ justifySelf: "flex-end" }}
            >
              {isDarkMode ? (
                <FontAwesomeIcon
                  icon={faCircleHalfStroke}
                  size="2x"
                  flip="horizontal"
                />
              ) : (
                <FontAwesomeIcon icon={faCircleHalfStroke} size="2x" />
              )}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
