import useLocalStorage from "./useLocalStorage";

const useGeceModu = (initialValue) => {
  const [geceModu, setGeceModu] = useLocalStorage("Dark Mode", initialValue);

  const customizeValue = (value) => {
    setGeceModu(value);
  };

  return [geceModu, customizeValue];
};
export default useGeceModu;
