import './Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assests/images/logo.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const menuLinks = [
        // {
        //   name: "About Us",
        //   redirect: "/about-us",
        //   id: "about-us",
        // },
        {
          name: "Floor Plan",
          redirect: "/floor-plan",
          id: "floorplan",
        },
        {
          name: "Smart Living",
          redirect: "/smart-living",
          id: "smartliving",
        },
        {
          name: "Amenities",
          redirect: "/amenity",
          id: "amenities",
        },
        {
          name: "Connectivity",
          redirect: "/connectivities",
          id: "connectivity",
        },
        {
          name: "Gallery",
          redirect: "/galleries",
          id: "gallery",
        },
        {
          name: "Contact Us",
          redirect: "/contactus",
          id: "contact",
        },

    ];

    const social = [
        {
            icon: faFacebookF,
        },
        {
            icon: faTwitter,
        },
        {
            icon: faYoutube,
        },
    ]
    return(
        <footer className="bg-primary-bg text-sm pt-6 md:pt-16 footer_main">
            <Container>
                <Row>
                    <Col>
                    <div className='py-10 flex flex-col md:gap-5'>
                        <div className="flex flex-col md:flex-row gap-[20px] justify-between pb-16">
                            <div className="w-full md:w-1/2 flex flex-col gap-[15px] md:pr-2 md:border-r border-primary-brown">
                                <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
                                    <LazyLoadImage
                                        src={logo}
                                        alt="Vamana Arvindam"
                                        className='header-logo w-40 footer_logo'
                                    />
                                </NavLink>
                                <p className="footer-text text-sm">We are the Authorized Channel Partner of 'The Ananta Aspire'. <br />
                                This website is not the official website of developer & property, it belongs to authorized channel partner and it is for the information purpose only. <br />All rights for logo & images are reserved to developer.</p>
                                <p className='footer-text text-sm text-primary-brown font-semibold '>RERA Number : PBRERA-SAS79-PR0777</p>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-[20px] justify-between">

                                <div className="w-full md:w-auto flex flex-col gap-[15px] overflow-hidden items-start md:items-center md:ml-auto footer_menu_block">
                                    <h6 className="footer-text text-lg font-bold text-center">Useful Links</h6>
                                    <ul className="footer_menus grid grid-cols-[auto,auto] md:grid-cols-[auto] lg:grid-cols-[auto,auto] justify-center gap-x-[20px]">
                                        <li><NavLink smooth="true" to='/aboutus' className="text-sm font-medium hover:text-primary-brown" ><FontAwesomeIcon icon={faAngleRight} className="text-primary-brown pr-1.5"/> About Us</NavLink></li>
                                        {menuLinks.map((item, i) => (
                                            <li key={i}><NavLink smooth="true" to={item.redirect} className="text-sm font-medium hover:text-primary-brown" target="_blank"><FontAwesomeIcon icon={faAngleRight} className="text-primary-brown pr-1.5"/> {item.name}</NavLink></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-full md:w-auto flex flex-col gap-[15px] md:ml-auto">
                                    <h6 className="footer-text text-lg font-bold">Follow Us On</h6>
                                    <ul className="flex flex-row gap-[20px] footer_social_blocks">
                                        {social.map((item, i) =>(
                                            <li key={i} className="bg-primary-brown rounded-full size-[30px] flex items-center justify-center"><FontAwesomeIcon icon={item.icon} className="text-base text-white"/></li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-col items-center text-center gap-1.5 ">
                            {/* <p className='text-md'><strong>We are the Authorized Channel Partner of 'The Ananta Aspire'. <br />
                            This website is not the official website of developer & property, it belongs to authorized channel partner and it is for the information purpose only. <br />All rights for logo & images are reserved to developer.</strong></p>
                            <p className='text-md'>Channel Partner RERA Number : Coming Soon</p>
                            <p className='text-md text-brown font-semibold mt-5'>Project RERA Number : PBRERA-SAS79-PR0777</p> */}
                            <p className='text-lg font-semibold md:mt-5 text-brown'>Disclaimer:</p>
                            <p className='mt-1.5 text-[10px]'> <b>1.</b> The images shown are for illustration purposes only and may not be an exact representation of the product</p>
                            <p className='mt-1.5 text-[10px]'><b>2.</b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us.</p>
                            <p className='mt-1.5 text-[10px]'><b>3.</b>All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws.
                            For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
                            <p className='mt-1.5 text-[10px]'><NavLink to='/terms-conditions' target='_blank' className='text-primary-brown font-semibold'>Terms & Conditions</NavLink> and <NavLink to='/privacy-policy' target='_blank' className='text-primary-brown font-semibold'>Privacy Policy</NavLink></p>
                            <p className='mt-1.5 text-[10px]'>Crafted By: <NavLink to='https://iosandweb.net/' target='_blank' className='hover:text-primary-brown'>IosAndWeb Technologies</NavLink></p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}

export default Footer