import React, { createContext, useContext, useReducer } from "react";
import default_session from "../constants/session";
import { DateUtils } from "../utils";

/**
 * @param state
 * @param action
 * @returns {{isAuthenticated: boolean}|{theme: *}|{theme: *, isAuthenticated: boolean, user: {}}}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "switchTheme":
      return {
        ...state,
        theme: action.theme,
      };
    case "setLogOut":
      return {
        ...state,
        session: default_session,
      };
    case "toggleLoader":
      return {
        ...state,
        showLoader: !state.showLoader,
      };
    case "setSession":
      return {
        ...state,
        session: { ...state.session, ...action.fields },
      };
    case "setDay":
      return {
        ...state,
        day: action.day,
      };
    default:
      return {
        ...state,
      };
  }
};
export const initialState = {
  theme: "dark",
  session: default_session,
  showLoader: false,
  day: DateUtils.toAmerican(new Date()),
};
export const StateContext = createContext(initialState);
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useGlobals = () => useContext(StateContext);
