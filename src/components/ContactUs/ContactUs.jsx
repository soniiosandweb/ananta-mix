import { useLocation } from "react-router-dom";
import ContactUs from "../Home/ContactUs/ContactUs.jsx"
import MetaData from '../Layout/MetaData.jsx'

const ContactUsPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Connect with Us - Ananta Aspire Zirakpur"}
                description={" Connect with Ananta Aspire Zirakpur to learn more about our luxurious living options. Our representatives are available to provide assistance and detailed project insights. "}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <ContactUs />
        </>
       
    )
}

export default ContactUsPage