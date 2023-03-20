import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface HeaderProp {
  showValue: string;
  icon: IconDefinition;
  value: string;
  wrapElement: "a" | "div";
  action: "tel" | "mailto" | null;
}

export interface LanguageProps {
  level: string;
  flag: string;
  altText: string;
}

export interface LanguagePropsElem {
  [key: string]: LanguageProps;
}

export interface ContactInfoProps {
  name: string;
  surname: string;
  jobTitle: string;
  birthDate: HeaderProp;
  city: HeaderProp;
  email: HeaderProp;
  phone: HeaderProp;
  language: LanguagePropsElem;
}

export interface AppState {
  darkMode: boolean;
  contactInfo: ContactInfoProps;
}
