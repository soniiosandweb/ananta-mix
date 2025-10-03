import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import Amenities from "./Amenities/Amenities"
import Banner from "./banner/Banner"
import ContactUs from "./ContactUs/ContactUs"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import ProjectConnectivity from "./ProjectConnectivity/ProjectConnectivity"
import SmartLiving from "./SmartLiving/SmartLiving"

const Home = () => {

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Ananta Aspire Zirakpur",
        "url": "https://anantaaspirezirakpur.co/",
        "logo": "https://anantaaspirezirakpur.co/static/media/logo.png",
        "description": "Discover luxury flats in Zirakpur at Ananta Aspire – 3BHK, 3+1 & 4BHK luxury apartments in Zirakpur. New residential projects with world-class amenities, rooftop pool, sports arena & EV charging. Flats for sale in Zirakpur near Chandigarh and Mohali.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "NH 7, Patiala Rd, Utrathiya",
            "addressLocality": "Zirakpur",
            "addressRegion": "Punjab",
            "postalCode": "140603",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8609000900",
            "contactType": "Sales",
            "email": "contact@anantaaspirezirakpur.co",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "openingHours": "Mo-Su 09:00-19:00"
        }

    return(
        <>
            <MetaData 
                title={"Ananta Aspire Zirakpur | Buy 3BHK & 4BHK Luxury Apartments"} 
                description={"Discover luxury flats in Zirakpur at Ananta Aspire – 3BHK, 3+1 & 4BHK luxury apartments in Zirakpur. New residential projects with world-class amenities, rooftop pool, sports arena & EV charging. Flats for sale in Zirakpur near Chandigarh and Mohali."} 
                keywords={"The Ananta Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Ananta Aspire Zirakpur, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
            />

            {/* <BannerSlider /> */}
            <Banner />
            {/* <ListSection /> */}
            <AboutUs />
            <FloorPlan />
            <SmartLiving />
            <Amenities />
            <ProjectConnectivity />
            <Gallery />
            <ContactUs />
        </>
    )
}

export default Home