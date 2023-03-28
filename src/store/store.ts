import { createSlice, configureStore } from "@reduxjs/toolkit";
import { AppState } from "../types/types";

import {
  faPhone,
  faEnvelope,
  faCakeCandles,
  faCity,
} from "@fortawesome/free-solid-svg-icons";

import itFlag from "../assets/it 2.svg";
import gbFlag from "../assets/gb 2.svg";

const initialState: AppState = {
  isDarkMode: true,
  contactInfo: {
    name: "Marco",
    surname: "Dispoto",
    jobTitle: "Jr. Front-End Developer",
    birthDate: {
      value: "25 febbraio 1993",
      icon: faCakeCandles,
      showValue: "25 febbraio 1993",
      wrapElement: "div",
      action: null,
    },
    city: {
      value: "Bari",
      showValue: "Bari",
      icon: faCity,
      wrapElement: "div",
      action: null,
    },
    email: {
      value: "dispotomarco@gmail.com",
      showValue: "dispotomarco@gmail.com",
      icon: faEnvelope,
      wrapElement: "a",
      action: "mailto",
    },
    phone: {
      value: "+393807056476",
      showValue: "+39 380 70 56 476",
      icon: faPhone,
      wrapElement: "a",
      action: "tel",
    },
    language: {
      it: {
        level: "Madrelingua",
        flag: itFlag,
        altText: "italian flag",
      },
      en: {
        level: "B2.2",
        flag: gbFlag,
        altText: "uk flag",
      },
    },
    personalInfo:
      "I'm a web developer with 2+ years of experience in web-app development. I'm quite curious and dynamic,and I'd like to specialize in front-end development. In the last couple of months I have had the opportunity to get to know and use ReactJS with RTK, Styled-Components and TailwindCSS but I also have a good grasp on Bootstrap.",
    professionalExp: `<h3 className='font-bold'>Web Developer</h3>\n
      The Digital Box S.p.A.\n
      09/2020 - current`,
  },
};

const appSlice = createSlice({
  name: "appslice",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const actions = appSlice.actions;

export default store;
