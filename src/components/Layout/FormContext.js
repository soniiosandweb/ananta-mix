import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [isPriceFormOpen, setIsPriceFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("Ananta Aspire Exclusive Price List!");
  const [subTitle, setSubTitle] = useState("Complete Overview of Current Prices for All Units to Guide Your Property Investment");
  const [buttonText, setButtonText] = useState("Download Price List");
  const [formId, setFormId] = useState("sideFixed");
  const [priceFormOpenedManually, setPriceFormOpenedManually] = useState(false);
  const [priceFormAutoOpened, setPriceFormAutoOpened] = useState(false);

  const openRequestForm = () => {
    setIsPriceFormOpen(false); // close price form if open
    setIsRequestFormOpen(true);
  };

  const closeRequestForm = () => setIsRequestFormOpen(false);

  const openPriceForm = (title = "Ananta Aspire Exclusive Price List!", subTitle= "Complete Overview of Current Prices for All Units to Guide Your Property Investment", buttonText= "Download Price List", formId = "sideFixed", fromAuto = false) => {
    setFormTitle(title);
    setSubTitle(subTitle);
    setButtonText(buttonText);
    setFormId(formId);
    setIsRequestFormOpen(false); // close request form if open

    // If manually opened, record it
    if (!fromAuto) setPriceFormOpenedManually(true);
    if (fromAuto) setPriceFormAutoOpened(true);

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
        priceFormOpenedManually,
        priceFormAutoOpened,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
