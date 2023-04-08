import { useSelector } from "react-redux";
import { AppState } from "../types/types";
import CvSection from "./CvSection";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

const CvBody = () => {
  const { contactInfo } = useSelector((state: AppState) => state);

  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex flex-col justify-between w-full lg:w-1/2">
          <CvSection title="Personal Info">
            <p>{contactInfo?.personalInfo}</p>
          </CvSection>

          <CvSection title="Skills">
            <ul className="list-disc ml-5 pt-3 mb-8">
              {contactInfo?.skills.map((skill, i) => (
                <li key={i} className="text-tblue dark:text-light">
                  {skill}
                </li>
              ))}
            </ul>
          </CvSection>
        </div>

        <div className="w-full lg:w-1/2">
          <CvSection title="Professional Experiences">
            {contactInfo?.professionalExp.map((exp, i) => (
              <WorkExperience props={{ ...exp }} key={i} />
            ))}
          </CvSection>
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <CvSection title="Courses and certifications">
          {contactInfo?.courses.map((course, i) => (
            <Education props={{ ...course }} key={i} />
          ))}
        </CvSection>

        <CvSection title="Education">
          {contactInfo?.education.map((education, i) => (
            <Education props={{ ...education }} key={i} />
          ))}
        </CvSection>
      </div>
    </>
  );
};

export default CvBody;
