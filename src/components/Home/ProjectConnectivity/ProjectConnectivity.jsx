import "./ProjectConnectivity.css";
import connectivityBg from "../../../assests/images/connectivity/connectivity_bg.jpg";
import mapImg from "../../../assests/images/connectivity/location-map.png";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { faBuilding, faMapMarkerAlt, faRoad, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import planeIcon from "../../../assests/images/connectivity/plane.png";
import trainIcon from "../../../assests/images/connectivity/train.png";

const connectivityData = [
    {
        title: "Accessibility",
        id:"accessibility",
        data: [
            {
                title: "Mohali International Airport",
                min: "15 Mins",
                icon: planeIcon,
                img: true,
            },
            {
                title: "VIP Road",
                min: "5 Mins",
                icon: faRoad
            },
            {
                title: "24 Seven",
                min: "15 Mins",
                icon: faRoad
            },
            {
                title: "Ambala Road",
                min: "5 Mins",
                icon: faRoad
            },
            {
                title: "Chandigarh Railway Station",
                min: "20 Mins",
                icon: trainIcon,
                img: true,
            }
        ]
    },
    {
        title: "Hospitals",
        id:"hospitals",
        data: [
            {
                title: "AMCARE Hospital",
                min: "5 Mins",
                icon: faBuilding
            },
            {
                title: "Trinity Hospital",
                min: "4 Mins",
                icon: faBuilding
            },
            {
                title: "VCare Hospital",
                min: "2 Mins",
                icon: faBuilding
            },
            {
                title: "SS Multiscpeciality",
                min: "2 Mins",
                icon: faBuilding
            }
        ]
    },
    {
        title: "Education",
        id:"education",
        data: [
            {
                title: "Bachpan Play School",
                min: "15 Mins",
                icon: faUniversity
            },
            {
                title: "Dikshant Global School",
                min: "9 Mins",
                icon: faUniversity
            },
            {
                title: "St. Xavier International School",
                min: "7 Mins",
                icon: faUniversity
            },
            {
                title: "Glooming Kids Smart School",
                min: "4 Mins",
                icon: faUniversity
            },
            {
                title: "Silver Wings Universal School",
                min: "8 Mins",
                icon: faUniversity
            }
        ]
    },
    {
        title: "Hotel/Entertainment",
        id:"entertainment",
        data: [
            {
                title: "Elante Mall",
                min: "15 Mins",
                icon: faMapMarkerAlt
            },
            {
                title: "Radisson Hotel",
                min: "01 Min",
                icon: faMapMarkerAlt
            },
            {
                title: "Walmart",
                min: "10 Mins",
                icon: faMapMarkerAlt
            },
            {
                title: "HLP Social Square",
                min: "01 Min",
                icon: faMapMarkerAlt
            },
            {
                title: "D-Mart",
                min: "5 Mins",
                icon: faMapMarkerAlt
            }
        ]
    }
]

const ProjectConnectivity = () => {
    return(
        <div className="project_connectivity_section padding-top padding-bottom" id="connectivity">
            <img src={connectivityBg} alt="Project Connectivity" className="connectivity_section_bg" />
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Project Connectivity</h2>
                        <div className="location_map">
                            <img src={mapImg} alt="Ananta Aspire Zirakpur location map showing prime connectivity to Chandigarh, Mohali, and major landmarks with easy highway access." className="location_map_img" />
                        </div>
                        <Accordion className="connectivity_accordion" defaultActiveKey="accessibility">
                            {connectivityData.map((item, i) => (
                                <Accordion.Item eventKey={item.id} key={i}>
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="connectivity_data_grid">
                                            {item.data.map((list,index) => (
                                                <div className="connectivity_data_item" key={index}>
                                                    {list.img ? 
                                                        <img src={list.icon} alt={list.title} className="connectivity_data_icon" />
                                                    :
                                                        <FontAwesomeIcon icon={list.icon} className="connectivity_data_icon"/>
                                                    }
                                                    <div className="connectivity_data">
                                                        <p className="connectivity_data_title mb-3">{list.title}</p>
                                                        <p className="connectivity_data_title">{list.min}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectConnectivity