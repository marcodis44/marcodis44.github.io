import { useSelector } from "react-redux";
import { AppState } from "../types/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import Picture from "./Picture";
import ContactArea from "./ContactArea";

const Header = ({ onToggleDarkMode }: { onToggleDarkMode: () => void }) => {
  const { isDarkMode } = useSelector((state: AppState) => state);

  return (
    <div className="py-0 xl:py-5">
      <div className="py-5 xl:py-10 px-0 mx-auto xl:px-20 transition-all 1s ease-in-out">
        <div className="flex flex-col xl:flex-row w-full items-center xl:justify-between">
          <div className="flex flex-col xl:flex-row items-center xl:justify-start">
            <Picture />
            <ContactArea />
          </div>
          <div className="absolute block top-5 right-5 xl:flex xl:items-center xl:relative xl:top-[unset] xl:right-[unset]">
            <button
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
