import { Dialog } from "@mui/material";
import { useFormContext } from "../FormContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import EnquireForm from "../EnquireForm/EnquireForm";

const RequestDetailsForm = () => {

    const { isRequestFormOpen, closeRequestForm } = useFormContext();

    return(
        <Dialog
            open={isRequestFormOpen}
            onClose={(event, reason) => {
                // Prevent closing when clicking outside or pressing Esc
                if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
                    closeRequestForm();
                }
            }}
            className="form_popup same"
            aria-hidden="false"
            sx={{
                "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                        width: "100%",
                        maxWidth: "450px",
                        borderRadius: "8px",
                        borderColor:'#fff',
                        // border: '4px solid #8f6445',
                        backgroundColor: "#fff",
                        padding: "15px",
                        boxShadow: '0px 0px 4px 0px #644630'
                    },
                },
            }}
            aria-modal="true"
        >
            <div className="flex flex-col popup-form ">
                <div className="flex justify-end btn-icon">
                    <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={closeRequestForm} />
                </div>
                <EnquireForm formId={"request"} title="Fill in your details to get Broucher" button="Submit Now" />
            </div>
        </Dialog>
    )
}

export default RequestDetailsForm