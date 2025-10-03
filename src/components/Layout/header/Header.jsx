import "./Header.css";
import logo from "../../../assests/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import EnquireForm from '../EnquireForm/EnquireForm';
// import ScrollToSection from "../../../ScrollLink";
import phoneIcon from "../../../assests/images/phone.png";
import menuIcon from "../../../assests/images/menus.png";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { Dialog } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
// import whatsappIcon from "../../assests/images/whatsapp.png";
// import downloadIcon from "../../assests/images/download.png";

const Header = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const locationValue = pathname.split("/");

    const [scrollClass, setScrollClass] = useState('scroll');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showsidePopup, setshowsidePopup] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpenClose = () => setOpen(false);
    const [locationPath, setLocationPath] = useState(false);

    const menuLists = [
        {
            title: "About Us",
            link: "#aboutus",
            id: "aboutus",
            redirect: "/aboutus",
        },
        {
            title: "Floor Plan",
            link: "#floorplan",
            id: "floorplan",
            redirect: "/floorplan",
        },
        {
            title: "Living Amenities",
            redirect: "/amenities",
            link: "#amenities",
            id: "amenities",
        },
        {
            title: "Connectivity",
            link: "#connectivity",
            redirect: "/connectivity",
            id: "connectivity",
        },
        {
            title: "Gallery",
            link: "#gallery",
            redirect: "/gallery",
            id: "gallery",
        },
        {
            title: "Contact Us",
            link: "#contact",
            redirect: "/contact",
            id: "contact",
        }
    ]
    
    useEffect(() => {
        const listenScrollEvent = () => {
            if (locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1])) {
                const newScrollClass = window.scrollY > 50 ? '' : 'scroll';
                setScrollClass(newScrollClass);
            } else {
                setScrollClass('scroll');
            }
        };

        window.addEventListener("scroll", listenScrollEvent);

        // eslint-disable-next-line
    },[locationValue]);

    // Show popup automatic
    useEffect(() => {
        setTimeout(() => {
            setshowsidePopup(true);
        }, 5000); 

    
        // return () => clearTimeout(timer);
    }, []);

    const newSidePopUpClose = (e) => {
        e.preventDefault();
        setshowsidePopup(false)
    }

    useEffect(() => {
        const listenScrollEvent = () => {
          if (locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1])) {
            const newScrollClass = window.scrollY > 50 ? 'scrolledHeader' : 'scroll';
            setScrollClass(newScrollClass);
          } else {
            setScrollClass('scroll');
          }
        };
    
    
        window.addEventListener("scroll", listenScrollEvent);
    
        if (location.hash && location.hash.slice(1) !== locationPath) {
          const element = document.getElementById(location.hash.slice(1));
          if (element) {
            setLocationPath(location.hash.slice(1))
            element.style.scrollMarginTop = '50px';
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        // console.log(location.pathname.split("/"))
    
        if(menuLists.some(item => item.id === location.pathname.split("/")[1]) && location.pathname.split("/")[1] !== locationPath){
          const path = location.pathname.split("/")[1];
          const element = document.getElementById(path);
    
          if (element) {
            setLocationPath(path)
            element.style.scrollMarginTop = '50px';
            element.scrollIntoView({ behavior: 'smooth' });
            
          }
        }
    
        // eslint-disable-next-line
      }, [location, locationValue, locationPath]);

      // handle menu click
  const handleMenuClick = (e) => {
    e.preventDefault();
    setShow(false)

    const { id } = e.target.dataset;
console.log(id,'click')
    const element = document.getElementById(id);
    if (element) {
      element.style.scrollMarginTop = '50px';
      element.scrollIntoView({ behavior: 'smooth' });

    }

  }

    return(
        <>
            <div className={`main_header ${scrollClass} ${locationValue[1] === "" ||  menuLists.some(item => item.id === locationValue[1]) ? "home_header" : ""}`}>
                <Navbar key={"lg"} expand={"lg"}>
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img src={logo} alt="Ananta Aspire Logo" className="logo_header" />
                        </Navbar.Brand>
                        
                        <Navbar.Offcanvas
                            show={show}
                            onHide={handleClose}
                            id={`header_offcanvas`}
                            aria-labelledby={`header_label_offcanvas`}
                            placement="end"
                            className="header_offcanvas"
                        >
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="flex-grow-1">

                                    {locationValue[1] === "" ?
                                    
                                        menuLists.map((item, i) => (
                                            
                                            <Link
                                                to={item.redirect}
                                                key={i}
                                                onClick={(e) => handleMenuClick(e)}
                                                smooth="true" 
                                                data-id={item.id}
                                                className="nav-link"
                                            >
                                                {item.title}
                                            </Link>
                                        ))
                                                    :
                                        menuLists.map((item, i) => (
                                            <Link
                                                to={item.redirect}
                                                key={i}
                                                onClick={handleClose}
                                                smooth="true" 
                                                className="nav-link"
                                            >
                                                {item.title}
                                            </Link>
                                            
                                        ))
                                    
                                    }
                                </Nav>
                                
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        <div className="header_right">
                            <div className="header_right_top">
                                <Link to={"tel:+918609000900"} className="header_call">
                                    <img src={phoneIcon} alt="Phone" className="phone_icon" />
                                    +91 8609000900
                                </Link>
                                <Button className="header_request_btn" onClick={handleOpen}>Request Details</Button>
                            </div>
                            <p className="header_rera_number">PBRERA-SAS79-PR0777</p>
                        </div>

                        <Navbar.Toggle aria-controls={`header_offcanvas`} onClick={handleShow}>
                            <img src={menuIcon} alt="menu" className="menu_icon" />
                        </Navbar.Toggle>

                    </Container>
                </Navbar>
            </div>

        
            {/* Download Brochure Button */}
                  <div className='sticky h-0 z-20' style={{ top: "45%" }}><button tabIndex='-1' className="w-max text-xs font-medium capitalize cursor-pointer bg-primary-brown p-2 sm:p-2.5 rounded-md text-white absolute -rotate-90 download-broucher-btn" style={{ right: "-46px" }} onClick={handleOpen}>Download Brochure</button>
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
                          borderRadius: "0px",
                          borderColor:'#8f6445',
                          // border: '4px solid #8f6445',
                          backgroundColor: "#f7f7f7",
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
                      <EnquireForm title="Request For Brochure" button="Submit Now" setOpen={setOpen} />
                    </div>
                  </Dialog>
                  <div className={` side-popup-form ${showsidePopup ? 'flex' : 'hidden'} border-3 border-primary-brown `}>
                    <div className="flex justify-end btn-icon">
                      <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={newSidePopUpClose} />
                    </div>
                    <EnquireForm title="Ananta Aspire Price List" button="Get New Price List" />
                  </div>
        </>
    )
}

export default Header