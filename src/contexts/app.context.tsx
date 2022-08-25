import * as React from 'react';

/**
 * Application context.
 * Note: for this specific task it's not that important, but I prefer to use it to avoid component drilling.
 */
interface AppContextInterface {
  darkMode: Boolean;
  search: String;
  setDarkMode: (enabled: Boolean) => void;
  setSearch: (value: String) => void;
}

const defaults: AppContextInterface = {
  darkMode: false,
  search: '',
  setDarkMode: (enabled: Boolean) => {
  },
  setSearch: (value: String) => {
  }
};


export const AppContext = React.createContext(defaults);

export const AppContextProvider = (props: any) => {

  const [darkMode, setDarkMode] = React.useState<Boolean>(false);
  const [search, setSearch] = React.useState<String>('');

  const value = {
    darkMode,
    setDarkMode,
    search,
    setSearch
  };

  return (
      <AppContext.Provider value={value}>
        {props.children}
      </AppContext.Provider>
  );
};
