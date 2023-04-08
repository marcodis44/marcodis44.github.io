import { useSelector } from "react-redux";
import { AppState, HeaderProp } from "../types/types";
import ContactDetail from "./ContactDetail";
import { useEffect, useState } from "react";

interface FooterProps {
  email: HeaderProp;
  phone: HeaderProp;
}

const Footer = () => {
  const { contactInfo } = useSelector((state: AppState) => state);

  const placeholder: HeaderProp = {
    showValue: "",
    icon: null,
    value: "",
    wrapElement: null,
    action: null,
  };

  const defaultValue: FooterProps = {
    email: {
      ...placeholder,
    },
    phone: {
      ...placeholder,
    },
  };

  const [footerData, setFooterData] = useState(defaultValue);

  useEffect(() => {
    if (contactInfo) {
      setFooterData({
        email: contactInfo.email,
        phone: contactInfo.phone,
      });
    }
  }, [contactInfo]);

  return (
    <div className="flex flex-col lg:flex-row items-center py-4 w-fit mx-auto lg:w-3/4 lg:justify-between">
      <div>
        {footerData.email && <ContactDetail props={footerData.email} />}
      </div>
      <div className="pt-4 lg:pt-0">
        {footerData.phone && <ContactDetail props={footerData.phone} />}
      </div>
    </div>
  );
};

export default Footer;
