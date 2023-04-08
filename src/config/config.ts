import {
  faPhone,
  faEnvelope,
  faCakeCandles,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { IconMappings } from "../types/types";

export const config = {
  be: {
    url: process.env.REACT_APP_BE_URL,
  },
  iconsMapping: {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faCakeCandles: faCakeCandles,
    faCity: faCity,
  } as IconMappings,
};
