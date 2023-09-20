import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
  });

  const changeValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, changeValue];
};

export default useLocalStorage;
