import { useLocation } from "react-router-dom";
import Connectivity from "../Home/ProjectConnectivity/ProjectConnectivity.jsx"
import MetaData from '../Layout/MetaData.jsx'
const ConnectivityPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Strategic Location & Connectivity - Ananta Aspire Zirakpur"}
                description={"Benefit from Ananta Aspire's strategic location, offering excellent connectivity to the city’s top landmarks, commercial zones, and recreational facilities. A perfect address for balanced living."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <Connectivity />
        </>
        
    )
}

export default ConnectivityPage