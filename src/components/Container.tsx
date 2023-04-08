import { useSelector } from "react-redux";
import { actions, fetchContactInfo, useAppDispatch } from "../store/store";
import Header from "./Header";
import { AppState } from "../types/types";
import CvBody from "./CvBody";
import Footer from "./Footer";
import { useEffect } from "react";

const AppContainer = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useSelector((state: AppState) => state);

  const toggleDarkMode = () => {
    dispatch(actions.toggleDarkMode());
  };

  useEffect(() => {
    dispatch(fetchContactInfo());
  }, []);

  return (
    <div className={`w-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-light dark:bg-tblue">
        <div className={`w-full lg:w-3/4 mx-auto p-10 lg:p-0`}>
          <Header onToggleDarkMode={toggleDarkMode} />
          <hr className="border-tblue dark:border-light" />
          <CvBody />
          <hr className="border-tblue dark:border-light" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
