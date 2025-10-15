import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [isPriceFormOpen, setIsPriceFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("Ananta Aspire Exclusive Price List!");
  const [subTitle, setSubTitle] = useState("Complete Overview of Current Prices for All Units to Guide Your Property Investment");
  const [buttonText, setButtonText] = useState("Enquire Now");
  const [formId, setFormId] = useState("price");

  const openRequestForm = () => {
    setIsPriceFormOpen(false); // close price form if open
    setIsRequestFormOpen(true);
  };

  const closeRequestForm = () => setIsRequestFormOpen(false);

  const openPriceForm = (title = "Ananta Aspire Exclusive Price List!", subTitle= "Complete Overview of Current Prices for All Units to Guide Your Property Investment", buttonText= "Enquire Now", formId = "price") => {
    setFormTitle(title);
    setSubTitle(subTitle);
    setButtonText(buttonText);
    setFormId(formId);
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
        subTitle,
        buttonText,
        formId,
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
