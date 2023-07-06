import React from "react";
import Main from "./src/Main";
import { initialState, reducer, StateProvider } from "./src/contexts/Global";
import i18n, { translations } from "i18n-js";
import * as Localization from "expo-localization";
import Translations from "./src/translations";

/**
 * Language
 */
i18n.translations = Translations;
i18n.locale = "kh";
i18n.fallbacks = true;
function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
}

export default App;
