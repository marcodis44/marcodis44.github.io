import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { config } from "../config/config";
import { AppState, ContactInfoProps } from "../types/types";
import { useDispatch } from "react-redux";

const initialState: AppState = {
  isDarkMode: true,
  contactInfo: null,
};

export const fetchContactInfo = createAsyncThunk(
  "contactInfo/get",
  (_a, { getState }): Promise<ContactInfoProps> => {
    return new Promise((resolve, reject) => {
      const url = `${config.be.url}/contactInfo`;
      fetch(url)
        .then((res) => res.json())
        .then((data: ContactInfoProps) => {
          return resolve(data);
        })
        .catch((err) => {
          console.error("rejecting", err);
          return reject(err);
        });
    });
  }
);

const appSlice = createSlice({
  name: "appslice",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactInfo.fulfilled, (state, action) => {
      state.contactInfo = action.payload as ContactInfoProps;
    });
  },
});

const store = configureStore({
  reducer: appSlice.reducer,
});

export const actions = appSlice.actions;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
