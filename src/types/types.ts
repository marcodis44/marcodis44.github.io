import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface HeaderProp {
  showValue: string;
  icon: string | null;
  value: string;
  wrapElement: "a" | "div" | null;
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

export interface ProfessionalExpProps {
  title: string;
  fromTo: string;
  employer: string;
  responsibilities: string[];
}

export interface EduProps {
  school: string;
  date: string;
  description?: string;
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
  personalInfo: string;
  professionalExp: ProfessionalExpProps[];
  skills: string[];
  courses: EduProps[];
  education: EduProps[];
}

export interface AppState {
  isDarkMode: boolean;
  contactInfo: ContactInfoProps | null;
}

export interface IconMappings {
  [key: string]: IconDefinition;
}
