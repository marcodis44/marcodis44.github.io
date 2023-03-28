import { useSelector } from "react-redux";
import { AppState } from "../types/types";
import { ContactInfo } from "./ContactInfo";

const ContactArea = () => {
  const { contactInfo } = useSelector((state: AppState) => state);

  return (
    <div className="ml-0 lg:ml-20 flex flex-col">
      <div className="w-fit flex flex-col self-center lg:self-start">
        <h1 className="text-5xl text-tblue dark:text-light pt-10 drop-shadow-md text-center lg:text-left">
          {contactInfo.name}
          <span className="uppercase font-normal">
            {` ${contactInfo.surname}`}
          </span>
        </h1>
        <p className="text-xl text-right">{`-- ${contactInfo.jobTitle}`}</p>
      </div>
      <ContactInfo />
    </div>
  );
};

export default ContactArea;
