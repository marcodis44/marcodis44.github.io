import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/store";
import Header from "./Header";
import Section from "./Section";
import { AppState } from "../types/types";
import CVSection from "./CVSection";

const AppContainer = () => {
  const dispatch = useDispatch();
  const { isDarkMode, contactInfo } = useSelector((state: AppState) => state);

  const toggleDarkMode = () => {
    dispatch(actions.toggleDarkMode());
  };

  return (
    <div className={`w-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-light dark:bg-tblue">
        <div className={`w-3/4 mx-auto`}>
          <Header onToggleDarkMode={toggleDarkMode} />
          <hr className="border-tblue dark:border-light" />
          <div className="flex">
            <CVSection title="Personal Info">
              <p>{contactInfo.personalInfo}</p>
            </CVSection>

            <CVSection title="Professional Experiences">
              <p>{contactInfo.professionalExp}</p>
            </CVSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
