import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export const useApp = () => {
  return useContext(AppContext);
};
