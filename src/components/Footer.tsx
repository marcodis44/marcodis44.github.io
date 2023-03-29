import { useSelector } from "react-redux";
import { AppState } from "../types/types";
import ContactDetail from "./ContactDetail";

const Footer = () => {
  const {
    contactInfo: { email, phone },
  } = useSelector((state: AppState) => state);

  return (
    <div className="flex flex-col lg:flex-row justify-center text-center lg:justify-around lg:items-center py-4">
      <div className="w-full lg:w-1/3">
        <ContactDetail props={{ ...email }} />
      </div>
      <div className="w-full lg:w-1/3 pt-4 lg:pt-0">
        <ContactDetail props={{ ...phone }} />
      </div>
    </div>
  );
};

export default Footer;
