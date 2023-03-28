import { useSelector } from "react-redux";
import { AppState, ContactInfoProps, HeaderProp } from "../types/types";
import ContactDetail from "./ContactDetail";

export const ContactInfo = () => {
  const propsToShow = ["city", "birthDate", "email", "phone"];
  const { contactInfo } = useSelector((state: AppState) => state);
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10">
      <div className="flex flex-col mt-7 lg:mt-10 lg:ml-1 lg:w-96 items-center lg:items-start">
        {propsToShow.map((prop, i) => {
          const info = contactInfo[
            prop as keyof ContactInfoProps
          ] as HeaderProp;
          return <ContactDetail props={info} key={i} />;
        })}
      </div>
      <div className="flex flex-row lg:flex-col mt-7 lg:self-end lg:mt-0 w-full justify-around ">
        {Object.values(contactInfo.language).map((lang, i) => (
          <div className={`flex items-center ${i % 2 !== 0 && "lg:mt-3"}`}>
            <img
              src={lang.flag}
              alt={lang.altText}
              width="24px"
              height="24px"
              className="rounded-full"
            />
            <p className="ml-3">{lang.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
