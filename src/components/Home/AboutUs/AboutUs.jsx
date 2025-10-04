import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../../assests/images/about-us.jpg";

const aboutLists = [
    "Impressive Architecture",
    "Innumerous Amenities",
    "Grandiose Living",
    "State-of-the-Art Facilities",
    "Refined Lifestyle"
]

const AboutUs = () => {
    return (
        <div className="about_us_section padding-top" id="aboutus">
            <Container>
                <Row>
                    <Col>
                        <div className="about_lists_top">
                            {aboutLists.map((item, i) => (
                                <p className="about_lists_item" key={i}>{item}</p>
                            ))}
                        </div>
                        <div className="about_us_flex_div padding-top">
                            <div className="about_us_left">
                                <h2 className="main_heading">About Us</h2>
                                <p className="paragraph mb-4">Discover <a href="/">The Ananta Aspire,</a> a new and luxury residential project in Zirakpur that combines luxury with modern innovation. Spread across 34,050 square yards, our development features 440 exclusive Luxury residential apartments for sale in Zirakpur!</p>
                                <p className="paragraph">The Ananta Aspire flats in Zirakpur seamlessly integrate advanced technology, including smart home systems with voice control and enhanced security, into stylish, spacious apartments. Residents enjoy a range of top-tier amenities, including a fitness center, swimming pool, clubhouse, and children's play area. Experience refined living and serene comfort in a vibrant setting. Welcome to The Ananta Aspire—where luxury, technology, and modern design create your perfect home in the form of 3 BHK Luxury Flats in Zirakpur and 4 BHK Luxury Apartments in Zirakpur!</p>
                            </div>
                            <div className="about_us_right_content">
                                <img src={aboutImg} alt="Ananta Aspire Zirakpur luxury residential project exterior view on NH-7 Patiala Highway" className="about_img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs