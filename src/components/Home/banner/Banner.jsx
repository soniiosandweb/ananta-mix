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
import logo from "../../../assests/images/logo.png";

import telephone from "../../../assests/images/telephone.png";
import appIcon from "../../../assests/images/app-icon.png";
import rupee from "../../../assests/images/rupee.png";
import business from "../../../assests/images/businessman.png";
import operator from "../../../assests/images/operator.png";
import carIcon from "../../../assests/images/car-icon.png";

const weGetOptions = [
    {
        icon: telephone,
        text: "Quick Call Back by Our Expert Consultant",
    },
    {
        icon: carIcon,
        text: "Free Site Visit with Pickup & Drop Service",
    },
    {
        icon: appIcon,
        text: "Brochure, Floor Plans & Pricing on WhatsApp",
    },
    {
        icon: rupee,
        text: "Best Price Guarantee – Direct from Developer",
    },
    {
        icon: business,
        text: "Dedicated Luxury Property Advisor",
    },
    {
        icon: operator,
        text: "Assistance with Home Loans & Legal Formalities",
    }
]

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
        autoplay: true,
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
                                                    <Button className="right_fixed_schedule" onClick={() => openPriceForm("Schedule Your Free Site Visit with Pickup & Drop Service", "Experience Ananta Aspire firsthand. Share your details to book a personalized tour.", "Schedule Visit", "schedule")}>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        Schedule a Free Site Visit
                                                    </Button>
                                                </div>
                                            </div>
                                            {/* <div className="banner_small_image">
                                                <img src={item.smallImg} alt={item.smallAlt} className="banner_small_img" />
                                            </div> */}
                                            
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Container>
                            
                            
                        </div>
                        <div className="banner_text_gradient"></div>
                    </div>
                ))}
            </Slider>
            <div className="right_fixed_sidebar">
                <div className="bottom_fixed_sidebar">
                    <div className="price_list_heading_block">
                        <img src={logo} alt="Ananta Aspire Logo" className="form_logo" />
                    </div>
                    <p className="price_list_heading">Ananta Aspire Exclusive Price List!</p>
                    <p className="price_list_subtext">Complete Overview of Current Prices for All Units to Guide Your Property Investment</p>
                    <EnquireForm formId={"sideFixed"} title="Ultra-Luxurious 3, 3+1, and 4+1 BHK Flats & Penthouses/Duplexes | Starting at ₹ 1.5 Cr*" button="Download Price List" />
                    <div className="py-2 form-row we_get_row">
                        <p className='form_label'>What You Get</p>
                        <div className='we_get_div_grid'>
                            {weGetOptions.map((item,i) => (
                                <div className='we_get_div_item' key={i}>
                                    <img src={item.icon} alt={item.text} className='we_get_icon' />
                                    <p className='we_get_text'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner