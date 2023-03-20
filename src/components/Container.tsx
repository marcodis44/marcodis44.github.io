import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/store";
import Header from "./Header";
import Section from "./Section";
import { AppState } from "../types/types";

const AppContainer = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppState) => state.darkMode);

  const toggleDarkMode = () => {
    dispatch(actions.toggleDarkMode());
  };

  return (
    <div className={`w-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-light dark:bg-tblue">
        <div className={`w-3/4 mx-auto`}>
          <Header onToggleDarkMode={toggleDarkMode} />
          <hr className="border-tblue dark:border-light" />
          <Section />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
