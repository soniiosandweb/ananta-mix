import './Header.css';
import logo from "../../../assests/images/logo-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import EnquireForm from '../EnquireForm/EnquireForm';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");

  const [scrollClass, setScrollClass] = useState('scroll');
  const [showsidePopup, setshowsidePopup] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const [locationPath, setLocationPath] = useState(false);


  const menuLinks = [
    {
      name: "About Us",
      redirect: "/aboutus",
      id: "aboutus",
    },
    {
      name: "Floor Plan",
      redirect: "/floorplan",
      id: "floorplan",
    },
    {
      name: "Smart Living",
      redirect: "/smartliving",
      id: "smartliving",
    },
    {
      name: "Amenities",
      redirect: "/amenities",
      id: "amenities",
    },
    {
      name: "Connectivity",
      redirect: "/connectivity",
      id: "connectivity",
    },
    {
      name: "Gallery",
      redirect: "/gallery",
      id: "gallery",
    },
    {
      name: "Contact Us",
      redirect: "/contact",
      id: "contact",
    },
  ];

  // handle menu click
  const handleMenuClick = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
console.log(id,'click')
    const element = document.getElementById(id);
    if (element) {
      element.style.scrollMarginTop = '50px';
      element.scrollIntoView({ behavior: 'smooth' });

    }

  }

  const newSidePopUpClose = (e) => {
    e.preventDefault();
    setshowsidePopup(false)
  }

  useEffect(() => {
    const listenScrollEvent = () => {
      if (locationValue[1] === "" ||  menuLinks.some(item => item.id === locationValue[1])) {
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

    if(menuLinks.some(item => item.id === location.pathname.split("/")[1]) && location.pathname.split("/")[1] !== locationPath){
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowsidePopup(true);
    }, 5000); 
    console.log(timer)

  
    // return () => clearTimeout(timer);
  }, []);
 
  

  return (
    <>
      {/* Header */}
      <header className={`bg-primary-bg top-0 z-20 w-full ${scrollClass} ${locationValue[1] === "" ||  menuLinks.some(item => item.id === locationValue[1]) ? 'sticky home-header' : 'sticky'}`}>
     
        <div className="px-0 sm:px-5 py-2.5 flex items-center">
          <div className="w-1/4 lg:w-1/6 xl:w-1/4 px-2.5">
            <NavLink to="/" className="block w-auto sm:w-max" reloadDocument={true}>
              <LazyLoadImage
                src={logo}
                alt="The Ananta Aspire Logo"
                style={{ width: "100px" }}
                className='header-logo'
              />
            </NavLink>
          </div>
          <div className="hidden lg:block w-3/6 xl:w-2/4 px-2.5">
            <div className='flex gap-1.5 xl:gap-[14px] items-center justify-center flex-wrap'>
              {locationValue[1] === "" ?

                menuLinks.map((item, i) => (
                  <Link smooth="true" to={item.redirect} key={i} className="text-xs xl:text-[14px] font-medium hover:text-primary-brown header-nav-link f" data-id={item.id} onClick={(e) => handleMenuClick(e)}>{item.name}</Link>
                ))
                :
                menuLinks.map((item, i) => (
                  <Link smooth="true" to={item.redirect} key={i} className="text-xs 1xl:text-sm font-medium hover:text-primary-brown header-nav-link" >{item.name}</Link>
                ))

              }
            </div>
          </div>
          <div className="pre-rera w-5/6 lg:w-2/6 xl:w-1/4 flex justify-end items-center gap-x-1 gap-y-2.5 sm:gap-x-4 px-0 xsm:px-1.5 sm:px-2.5 flex-wrap ">
            <div className="rera-contact-wrapper flex gap-2 flex-row">
              <NavLink to='tel:+918609000900' className="text-xxs sm:text-md flex  items-center font-medium header-nav-link font-semibold blink "><FontAwesomeIcon icon={faPhone} className="text-primary-brown pr-1" /> +91 8609000900</NavLink>
              {/* <NavLink className="text-xxxs sm:text-xs m-auto w-full text-right font-medium header-nav-link font-semibold text-primary-brown">PBRERA-SAS79-PR0777</NavLink> */}

              <button tabIndex='-1' className="text-xxs sm:text-xs font-semibold capitalize cursor-pointer bg-primary-brown py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8 rounded-md text-white enquire-btn" onClick={handleOpen}>Enquire Now</button>
            </div>

            <NavLink className="text-xxxs sm:text-xs m-auto w-full text-right font-medium header-nav-link font-semibold text-primary-brown">PBRERA-SAS79-PR0777</NavLink>
          </div>
          <button className="lg:hidden p-2 text-primary-brown hamberger" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          {mobileMenuOpen && (
            <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md z-30">
              <div className="flex justify-end p-4">
                <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              </div>
              <nav className="flex flex-col items-center mt-4">
                {menuLinks.map((item, i) => (
                  <Link key={i} to={item.redirect} className="text-lg font-medium py-2 px-4 hover:text-primary-brown" onClick={toggleMobileMenu}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>

      </header>

      {/* Whatsapp Button */}
      {/* <NavLink to='https://api.whatsapp.com/send?phone=919888877182' target="_blank" className="fixed z-20 bg-white text-primary-lightGreen text-md font-medium px-5 py-2 flex gap-2.5 rounded-full items-center border-2 border-primary-lightGreen font-semibold overflow-hidden" style={{ left: "20px", bottom: "24px" }}>
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl pulso-animation" />
        Whats App Now
      </NavLink> */}

      {/* Download Brochure Button */}
      <div className='sticky h-0 z-20' style={{ top: "45%" }}><button tabIndex='-1' className="w-max text-xs font-medium capitalize cursor-pointer bg-primary-brown p-2 sm:p-2.5 rounded-md text-white absolute -rotate-90 download-broucher-btn" style={{ right: "-46px" }} onClick={handleOpen}>Download Brochure</button>
      </div>

      {/* Popup */}
      <Dialog
        open={open}
        onClose={handleClose}
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
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>
          <EnquireForm title="Request For Brochure" button="Submit Now" setOpen={setOpen} />
        </div>
      </Dialog>
      <div className={` side-popup-form ${showsidePopup ? 'flex' : 'hidden'} border-4 border-primary-brown `}>
        <div className="flex justify-end btn-icon">
          <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={newSidePopUpClose} />
        </div>
        <EnquireForm title="Ananta Aspire Price List" button="Get New Price List" />
      </div>
    </>
  );
};

export default Header;
