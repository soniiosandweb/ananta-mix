import "./Banner.css";
import Slider from "react-slick";
import banner1 from "../../../assests/images/banner/banner1.png";
import bannerSmall1 from "../../../assests/images/banner/banner1-small.jpg";
import banner2 from "../../../assests/images/banner/banner2.png";
import bannerSmall2 from "../../../assests/images/banner/banner2-small.jpg";
import banner3 from "../../../assests/images/banner/banner3.png";
import bannerSmall3 from "../../../assests/images/banner/banner3-small.jpg";
import banner4 from "../../../assests/images/banner/banner4.png";
import bannerSmall4 from "../../../assests/images/banner/banner4-small.jpg";
import banner5 from "../../../assests/images/banner/banner5.png";
import bannerSmall5 from "../../../assests/images/banner/banner5-small.jpg";
import { Col, Container, Row } from "react-bootstrap";
import homeIcon from "../../../assests/images/home.png";
import { useState } from "react";

const slides = [
    {
        title: "Families Have Moved In, Happiness Has Begun",
        text: "A new Chapter Begins, Possession Handed over, Families are now Calling it Home",
        subtext: "Move in Today | Be Part Of Our Growing Community",
        image: banner1,
        imageAlt: "Families Have Mooved In",
        smallAlt: "Families Have Mooved In",
        smallImg: bannerSmall1,
    },
    {
        title: "Ananta Aspire is where Luxury Meets Innovation",
        text: "Luxury 3BHK, 4BHK Apartments for Sale",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner2,
        imageAlt: "Ananta Aspire",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall2,
    },
    {
        title: "Make the Ananta Aspire your Gateway to Premium Living",
        text: "440 exclusive luxury residences with integrated smart home feature and unmatched comfort.",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner3,
        imageAlt: "Ananta Aspire",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall3,
    },
    {
        title: "Smart Living Begins at the Ananta Aspire",
        text: "Combining modern technology and premium comfort in zirakpur’s most exclusive address.",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner4,
        imageAlt: "Ananta Aspire",
        smallAlt: "Ananta Aspire",
        smallImg: bannerSmall4,
    },
    {
        title: "Live Smarter, Live Better with the Ananta Aspire",
        text: "Explore Luxury 3 & 4 BHK apartments for sale in zirkapur, ennriched with voice-controlled smart home features.",
        subtext: "Luxury Flats stating at just ₹1.5 Cr",
        image: banner5,
        imageAlt: "Ananta Aspire",
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
                    <div className="banner_slider_item padding-top padding-bottom" key={i}>
                        <img src={item.image} alt={item.imageAlt} className="banner_bg_image" />
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
                        </Container>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Banner