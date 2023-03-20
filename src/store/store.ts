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
  darkMode: true,
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
  },
};

const appSlice = createSlice({
  name: "appslice",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const actions = appSlice.actions;

export default store;
