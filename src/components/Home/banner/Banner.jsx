import "./Banner.css";
import Slider from "react-slick";
import banner1 from "../../../assests/images/banner/banner1.jpg";
import bannerSmall1 from "../../../assests/images/banner/banner1-small.jpg";
import banner2 from "../../../assests/images/banner/banner2.png";
import bannerSmall2 from "../../../assests/images/banner/banner2-small.jpg";
import banner3 from "../../../assests/images/banner/banner3.png";
import bannerSmall3 from "../../../assests/images/banner/banner3-small.jpg";
import banner4 from "../../../assests/images/banner/banner4.png";
import bannerSmall4 from "../../../assests/images/banner/banner4-small.jpg";
import banner5 from "../../../assests/images/banner/banner5.png";
import bannerSmall5 from "../../../assests/images/banner/banner5-small.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import homeIcon from "../../../assests/images/home.png";
import { useState } from "react";
import EnquireForm from "../../Layout/EnquireForm/EnquireForm";
import { useFormContext } from "../../Layout/FormContext";
import whatsappIcon from "../../../assests/images/whatsapp.png";

const slides = [
    {
        title: "Families Have Moved In, Happiness Has Begun",
        text: "A new Chapter Begins, Possession Handed over, Families are now Calling it Home",
        subtext: "Move in Today | Be Part Of Our Growing Community",
        image: banner1,
        imageAlt: "Families have moved into 3 BHK luxury flats in Zirakpur at Ananta Aspire, showcasing happy residents and modern living spaces.",
        smallAlt: "Families Have Mooved In",
        smallImg: bannerSmall1,
    },
    {
        title: "Ananta Aspire is where Luxury Meets Innovation",
        text: "Luxury 3BHK, 4BHK Apartments for Sale",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner2,
        imageAlt: "Modern and spacious flats for sale in Zirakpur at Ananta Aspire, offering premium amenities and comfortable living spaces.",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall2,
    },
    {
        title: "Make the Ananta Aspire your Gateway to Premium Living",
        text: "440 exclusive luxury residences with integrated smart home feature and unmatched comfort.",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner3,
        imageAlt: "Couple relaxing and enjoying the night at Ananta Aspire, part of new residential projects in Zirakpur with modern amenities and serene surroundings.",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall3,
    },
    {
        title: "Smart Living Begins at the Ananta Aspire",
        text: "Combining modern technology and premium comfort in zirakpur’s most exclusive address.",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner4,
        imageAlt: "Flats for sale in Zirakpur at Ananta Aspire surrounded by lush greenery, offering a serene and eco-friendly living environment.",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall4,
    },
    {
        title: "Live Smarter, Live Better with the Ananta Aspire",
        text: "Explore Luxury 3 & 4 BHK apartments for sale in zirkapur, ennriched with voice-controlled smart home features.",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner5,
        imageAlt: "Night view of Ananta Aspire with sparkling lights and large landscaped gardens, showcasing 3 BHK luxury flats for sale in Zirakpur.",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall5,
    }
]

const listsItem = [
    "3 BHK Apartments",
    "3+1 BHK Apartments",
    "4+1 BHK Apartments",
    "Pent House/Duplex",
]

const Banner = () => {

    const { openPriceForm } = useFormContext();

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        lazyLoad: "progressive",
        beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    };

    return(
        <div className="banner_slider_section">
            <Slider {...settings}>
                {slides.map((item,i) => (
                    <div className="banner_slider_item" key={i}>
                        <img src={item.image} alt={item.imageAlt} className="banner_bg_image" />
                        <div className="banner_context_form_flex">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <div className="banner_sliders_flex">
                                            <div className="banner_slider_text_block">
                                                <div className="booking_text_banner">Booking Open</div>
                                                <div className="banner_slider_text_bg">
                                                    {activeSlide === i ? 
                                                        <h1 className="banner_slider_heading">{item.title}</h1>
                                                    :
                                                        <h2 className="banner_slider_heading">{item.title}</h2>
                                                    }
                                                    
                                                    <h2 className="banner_slider_subtext">{item.text}</h2>
                                                    <p className="banner_slider_red_text">{item.subtext}</p>
                                                    <div className="banner_slider_icons_lists">
                                                        {listsItem.map((list,index) => (
                                                            <div className="banner_slider_lists_item" key={index}>
                                                                <img src={homeIcon} alt="Home" className="home_icon" />
                                                                <p className="banner_slider_lists_text">{list}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="banner_small_image">
                                                <img src={item.smallImg} alt={item.smallAlt} className="banner_small_img" />
                                            </div> */}
                                            
                                        </div>
                                    </Col>
                                </Row>
                                <div className="banner_text_gradient"></div>
                            </Container>

                            <div className="right_fixed_sidebar">
                                <Button className="right_fixed_schedule" onClick={openPriceForm}>Schedule a Free Site Visit</Button>
                                <div className="bottom_fixed_sidebar">
                                    <EnquireForm formId={"fixed"} title="Ultra-Luxurious 3, 3+1, and 4+1 BHK Flats & Penthouses/Duplexes | Starting at ₹1.5 Cr*" button="Enquire Now" />
                                    <div className="whatsapp_link_sidebar">
                                        <a href="https://wa.me/+918609000900" rel="noreferrer" target="_blank">
                                            <img src={whatsappIcon} alt="Whatsapp" className="header_btns_float whatsapp" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Banner