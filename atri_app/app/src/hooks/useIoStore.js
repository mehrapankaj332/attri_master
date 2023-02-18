import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "About": {},
  "Pages": {},
  "Menu": {},
  "Cart": {}
}});

export default useIoStore;
