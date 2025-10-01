import { useLocation } from "react-router-dom";
import FloorPlan from "../Home/FloorPlan/FloorPlan.jsx"
import MetaData from '../Layout/MetaData.jsx'

const FloorPlanPage = () => {

    const location = useLocation();
    
    return(
        <>

            <MetaData 
                title={"Tailored Floor Plans for Premium Living - Ananta Aspire Zirakpur"}
                description={"Discover tailored floor plans at Ananta Aspire Zirakpur, offering the perfect blend of aesthetics and functionality. Find the layout that best fits your vision of a dream home."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <FloorPlan />
        </>
       
    )
}

export default FloorPlanPage