import "./ContactUs.css";
import { Col, Container, Row } from "react-bootstrap"
import EnquireForm from "../../Layout/EnquireForm/EnquireForm"

const ContactUs = () => {
    return (
        <div className="contact_us_section padding-top padding-bottom">
            <Container>
                <Row>
                    <Col>
                        <div className="contact_us_flex">
                            <div className="contact_us_left_col">
                                <div className="contact_us_content">
                                    <div className="contact_us_content_text">
                                        <p className="contact_form_text">Contact us today to schedule a visit to the luxury 3 & 4 BHK Apartments for sale in Zirakpur and experience The Ananta Aspire difference.</p>
                                        <p className="contact_form_text">Contact us at:</p>
                                        <p className="contact_form_text"><a href="mailto:contact@anantaaspirezirakpur.co">contact@anantaaspirezirakpur.co</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_us_right_col">
                                <div className="contact_section_form">
                                    <EnquireForm title="Connect With Our Team" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs