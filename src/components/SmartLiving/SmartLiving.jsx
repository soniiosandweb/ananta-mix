import { useLocation } from "react-router-dom";
import SmartLiving from "../Home/SmartLiving/SmartLiving"
import MetaData from '../Layout/MetaData'

const SmartLivingPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Smart Living Solutions for Modern Homes - Ananta Aspire"}
                description={"Live smarter at Ananta Aspire Zirakpur with integrated smart home solutions. Enjoy automated controls, advanced security features, and efficient energy management designed to elevate your lifestyle.."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <SmartLiving />
        </>
    )
}

export default SmartLivingPage