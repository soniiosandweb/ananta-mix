import "./SmartLiving.css";
import { Col, Container, Row } from "react-bootstrap";
import smartLivingImg from "../../../assests/images/smart-living.jpg";
import smartLivingSmall from "../../../assests/images/smart-image.png";
import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Control with Voice Commands",
    description:
      "Step into your home and effortlessly control your environment with voice commands for instant comfort."
  },
  {
    id: 2,
    title: "Smart Lighting",
    description:
      "Adjust the lighting in your home to match your mood and save energy with smart lighting."
  },
  {
    id: 3,
    title: "Climate Control",
    description:
      "Easily manage the temperature of your home for maximum comfort and efficiency."
  },
  {
    id: 4,
    title: "Enhanced Security",
    description:
      "Keep your home safe with enhanced security systems that you can control from anywhere."
  },
  {
    id: 5,
    title: "Schedule Made Easy",
    description:
      "Automate daily tasks and routines with customizable schedules that fit your lifestyle."
  },
  {
    id: 6,
    title: "Motion Sensors",
    description:
      "Use motion sensors to enhance security and convenience in your smart home."
  },
  {
    id: 7,
    title: "Mobile App Control",
    description:
      "Take full control of your smart home directly from your mobile device."
  }
];

const SmartLiving = () => {

    const [active, setActive] = useState(1);

    return(
        <div className="smart_living_section padding-top padding-bottom">
            <img src={smartLivingImg} alt="Smart Living" className="smart_living_section_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="smart_living_flex">
                            <div className="smart_living_col">
                                <h2 className="smart_living_heading">Step into <br/>Smart Living</h2>
                                <p className="paragraph">Ananta Aspire redefines modern living not just with spacious homes and stunning amenities, but also with cutting-edge technology integrated seamlessly into your luxury flats in Zirakpur! Invest in your future. Invest in a life of comfort, luxury, and innovation.Choose The Ananta Aspire flats for sale in Zirakpur</p>
                                <img src={smartLivingSmall} alt="Smart Living" className="smart_living_img" />
                            </div>
                            <div className="smart_living_col_right">
                                <div className="smart_living_grid">
                                    {features.slice(0, 6).map((item,i) => (
                                        <div className={`smart_living_list_item ${active === item.id && 'active'}`} key={item.id} onClick={() => setActive(item.id)}>
                                            <h3 className="smart_living_box_title">{item.id}</h3>
                                            <p className="smart_living_box_text">{item.title}</p>
                                        </div>
                                    ))}
                                    <div className="feature-description">
                                        <h4 className="description_title">{active}. {features.find((f) => f.id === active).title}</h4>
                                        <p className="description_content">{features.find((f) => f.id === active).description}</p>
                                    </div>
                                    <div
                                        className={`smart_living_list_item ${active === 7 ? "active" : ""}`}
                                        onClick={() => setActive(7)}
                                    >
                                        <h3 className="smart_living_box_title">{features[6].id}</h3>
                                        <p className="smart_living_box_text">{features[6].title}</p>
                                    </div>
                                </div>
                                <img src={smartLivingSmall} alt="Smart Living" className="smart_living_img bottom_mobile_img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SmartLiving