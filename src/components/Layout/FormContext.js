import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [isPriceFormOpen, setIsPriceFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("Vamana Residence Exclusive Price List!");

  const openRequestForm = () => {
    setIsPriceFormOpen(false); // close price form if open
    setIsRequestFormOpen(true);
  };

  const closeRequestForm = () => setIsRequestFormOpen(false);

  const openPriceForm = (title = "Vamana Residence Exclusive Price List!") => {
    setFormTitle(title);
    setIsRequestFormOpen(false); // close request form if open
    setIsPriceFormOpen(true);
  };

  const closePriceForm = () => setIsPriceFormOpen(false);

  return (
    <FormContext.Provider
      value={{
        isRequestFormOpen,
        isPriceFormOpen,
        formTitle,
        openRequestForm,
        closeRequestForm,
        openPriceForm,
        closePriceForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
