import { useLocation } from "react-router-dom";
import Gallery from "../Home/Gallery/Gallery.jsx"
import MetaData from '../Layout/MetaData.jsx'

const GalleryPage = () => {

    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Discover Our Spaces - Ananta Aspire Zirakpur Gallery"}
                description={"Discover the exclusive spaces at Ananta Aspire Zirakpur through our photo gallery. View images of our contemporary designs, green landscapes, and luxurious amenities."}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />
            <Gallery />
        </>
       
    )
}

export default GalleryPage