import { createContext, useContext, useState } from "react";

export const ApplicationContext = createContext<any | null>([]);

export const useApplicationContext = () => {
  return useContext(ApplicationContext);
};

const ApplicationContextProvider:React.FC<React.ReactNode> = ({ children }) => {
  const [sharedValue, setSharedValue] = useState([]);

  return (
    // @ts-ignore
    <ApplicationContext.Provider value={{ sharedValue: sharedValue, setSharedValue: setSharedValue }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
