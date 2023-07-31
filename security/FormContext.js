import React, { createContext, useState } from "react";
const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <FormContext.Provider value={{ isFormValid, setIsFormValid }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
