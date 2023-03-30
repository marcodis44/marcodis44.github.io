import { useSelector } from "react-redux";
import { AppState } from "../types/types";
import ContactDetail from "./ContactDetail";

const Footer = () => {
  const {
    contactInfo: { email, phone },
  } = useSelector((state: AppState) => state);

  return (
    <div className="flex flex-col lg:flex-row items-center py-4 w-fit mx-auto lg:w-3/4 lg:justify-between">
      <div>
        <ContactDetail props={{ ...email }} />
      </div>
      <div className="pt-4 lg:pt-0">
        <ContactDetail props={{ ...phone }} />
      </div>
    </div>
  );
};

export default Footer;
