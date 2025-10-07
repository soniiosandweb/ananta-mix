import "./FloorPlan.css";
import { Button, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import floor1 from "../../../assests/images/floorplan/4bhk+1.png";
import floor2 from "../../../assests/images/floorplan/3bhk+1.png";
import floor3 from "../../../assests/images/floorplan/3bhk.png";
import floor4 from "../../../assests/images/floorplan/pent-house.png";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import openIcon from "../../../assests/images/open-icon.png";
import EnquireForm from "../../Layout/EnquireForm/EnquireForm";

const FloorPlan = () => {

    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenClose = () => setOpen(false);

    return (
        <>
            <div className="floor_plans_section padding-top padding-bottom" id="floorplan">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="main_heading">Floor Plan</h2>
                            <Tab.Container id="floor_plans_tabs" defaultActiveKey="4+1BHK">
                                <Nav variant="pills" className="flex-row floor_plans_nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="4+1BHK">4 BHK + Study Attendant Room</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3+1BHK">3 BHK + Study Attendant Room</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3BHK">3 BHK Apartment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="penthouse">Pent House / Duplex</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="4+1BHK">
                                        <div className="floor_blans_image">
                                            <img src={floor1} alt="Spacious 4+1 BHK plus study and attendant room layout at Ananta Aspire Zirakpur – luxury apartment design with modern amenities." className="floor_plan_img" onClick={() => setOpenPlan1(true)} />
                                            <Lightbox
                                                open={openPlan1}
                                                close={() => setOpenPlan1(false)}
                                                slides={[
                                                    { src: floor1 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title">4+1 BHK APARTMENT</h3>
                                                <p className="floor_text_content">Super Area - 2900 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 2120 sq.ft.</p>
                                                <p className="floor_text_content">Carpet - 1861 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => handleOpen()}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* 3BKH + 1 */}
                                    <Tab.Pane eventKey="3+1BHK">
                                        <div className="floor_blans_image">
                                            <img src={floor2} alt="Modern 3+1 BHK plus study and attendant room layout at Ananta Aspire Zirakpur – premium luxury flat design with elegant interiors and amenities." className="floor_plan_img" onClick={() => setOpenPlan2(true)} />
                                            <Lightbox
                                                open={openPlan2}
                                                close={() => setOpenPlan2(false)}
                                                slides={[
                                                    { src: floor2 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title">3+1 BHK APARTMENT</h3>
                                                <p className="floor_text_content">Super Area - 2945.45.00 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 2175.95 sq.ft.</p>
                                                <p className="floor_text_content">Carpet - 1868.30 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => handleOpen()}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* 3BHK */}
                                    <Tab.Pane eventKey="3BHK">
                                        <div className="floor_blans_image">
                                            <img src={floor3} alt="Spacious 3BHK apartment layout at Ananta Aspire Zirakpur – modern luxury flat with premium amenities and elegant living space design." className="floor_plan_img" onClick={() => setOpenPlan3(true)} />
                                            <Lightbox
                                                open={openPlan3}
                                                close={() => setOpenPlan3(false)}
                                                slides={[
                                                    { src: floor3 }
                                                ]}
                                                plugins={[Fullscreen, Zoom]}
                                                carousel={{ finite: 1 }}
                                                render={{
                                                    buttonPrev: undefined,
                                                    buttonNext: undefined,
                                                }}
                                                className="single-lightbox"
                                            />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                <h3 className="floor_text_title">3 BHK APARTMENT</h3>
                                                <p className="floor_text_content">Super Area - 1843.00 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 1248.00 sq.ft.</p>
                                                <p className="floor_text_content">Carpet - 1064.00 sq.ft.</p>
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => handleOpen()}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Explore More
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    {/* Pent House */}
                                    <Tab.Pane eventKey="penthouse">
                                        <div className="floor_blans_image">
                                            <img src={floor4} alt="Luxury penthouse duplex at Ananta Aspire Zirakpur – premium rooftop residence with modern interiors, spacious design, and high-end amenities" className="floor_plan_img" onClick={() => handleOpen()} />
                                        </div>
                                        <div className="floor_palns_flex">
                                            <div className="floor_plans_left">
                                                {/* <h3 className="floor_text_title">Pent House / Duplex</h3>
                                                <p className="floor_text_content">Super Area - 2900 sq.ft.</p>
                                                <p className="floor_text_content">Covered Area - 2120 sq.ft.</p>
                                                <p className="floor_text_content">Carpet - 1861 sq.ft.</p> */}
                                            </div>
                                            <div className="floor_plans_right">
                                                <Button className="floor_plans_btn" onClick={() => handleOpen()}>
                                                    <img src={openIcon} alt="open" className="open_icon" />
                                                    Send Request
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Popup */}
                              <Dialog
                                open={open}
                                onClose={handleOpenClose}
                                className="form_popup same"
                                aria-hidden="false"
                                sx={{
                                  "& .MuiDialog-container": {
                                    "& .MuiPaper-root": {
                                        width: "100%",
                                        maxWidth: "450px",
                                        borderRadius: "8px",
                                        borderColor:'#fff',
                                        // border: '4px solid #8f6445',
                                        backgroundColor: "#8F6445E5",
                                        padding: "15px",
                                        boxShadow: '0px 0px 4px 0px #0000001A'
                                    },
                                  },
                                }}
                                aria-modal="true"
                              >
                                <div className="flex flex-col px-2.5 popup-form ">
                                  <div className="flex justify-end btn-icon">
                                    <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleOpenClose} />
                                  </div>
                                  <EnquireForm formId={"floor"} title="Request For Brochure" button="Submit Now" setOpen={setOpen} />
                                </div>
                              </Dialog>
        </>
    )
}

export default FloorPlan