import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";
import logo from "../../../assests/images/logo.png";
import EnquireForm from "../EnquireForm/EnquireForm";
import { useFormContext } from "../FormContext";

const PriceDetailsForm = () => {

    const { isPriceFormOpen, closePriceForm, subTitle, formTitle, buttonText, formId } = useFormContext();

    return(
        <Dialog
            open={isPriceFormOpen}
            onClose={(event, reason) => {
                // Prevent closing when clicking outside or pressing Esc
                if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
                    closePriceForm();
                }
            }}
            className="price_list_popup_dialog"
            aria-hidden="false"
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        borderRadius: "8px",
                        borderColor:'#fff',
                        backgroundColor: "#fff",
                        boxShadow: '0px 0px 4px 0px #644630'
                    },
                },
            }}
            aria-modal="true"
        >
            <div className="price_list_heading_block">
                <img src={logo} alt="Ananta Aspire Logo" className="form_logo" />
                <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={closePriceForm} />
            </div>
            <div className="price_list_form_flex">
                <p className="price_list_heading">{formTitle ? formTitle : "Ananta Aspire Exclusive Price List!"}</p>
                <p className="price_list_subtext">{subTitle ? subTitle : "Complete Overview of Current Prices for All Units to Guide Your Property Investment"}</p>
                <div className="price_list_form_col">
                    <EnquireForm showSide={true} formId={formId ? formId : "request"} title="Ananta Aspire Price List" button={`${buttonText ? buttonText : "Download Price List"}`} />
                </div>
            </div>
        </Dialog>
    )
}

export default PriceDetailsForm