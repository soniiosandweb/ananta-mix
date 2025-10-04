import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./Gallery.css";
import { useState } from "react";
import gallery1 from "../../../assests/images/gallery/new-gallery/gallery1.jpg";
import gallery2 from "../../../assests/images/gallery/new-gallery/gallery2.jpg";
import gallery3 from "../../../assests/images/gallery/new-gallery/gallery3.jpg";
import gallery4 from "../../../assests/images/gallery/new-gallery/gallery4.jpg";
import gallery5 from "../../../assests/images/gallery/new-gallery/gallery5.jpg";
import gallery6 from "../../../assests/images/gallery/new-gallery/gallery6.jpg";
import gallery7 from "../../../assests/images/gallery/new-gallery/gallery7.jpg";
import gallery8 from "../../../assests/images/gallery/new-gallery/gallery8.jpg";
import gallery9 from "../../../assests/images/gallery/new-gallery/gallery9.jpg";
import { ImageList, ImageListItem } from "@mui/material";
import Lightbox from 'yet-another-react-lightbox';
import { Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Interior Images
import interior1 from "../../../assests/images/gallery/new-gallery/interior1.jpg";
import interior2 from "../../../assests/images/gallery/new-gallery/interior2.jpg";
import interior3 from "../../../assests/images/gallery/new-gallery/interior3.jpg";
import interior4 from "../../../assests/images/gallery/new-gallery/interior4.jpg";
import interior5 from "../../../assests/images/gallery/new-gallery/interior5.jpg";
import interior6 from "../../../assests/images/gallery/new-gallery/interior6.png";
import interior7 from "../../../assests/images/gallery/new-gallery/interior7.jpg";
import interior8 from "../../../assests/images/gallery/new-gallery/interior8.jpg";
import interior9 from "../../../assests/images/gallery/new-gallery/interior9.jpg";

// Bedroom Images
import bedroom1 from "../../../assests/images/gallery/new-gallery/bedroom1.png";
import bedroom2 from "../../../assests/images/gallery/new-gallery/bedroom2.png";
import bedroom3 from "../../../assests/images/gallery/new-gallery/bedroom3.png";
import bedroom4 from "../../../assests/images/gallery/new-gallery/bedroom4.png";
import bedroom5 from "../../../assests/images/gallery/new-gallery/bedroom5.jpg";
import bedroom6 from "../../../assests/images/gallery/new-gallery/bedroom6.jpg";
import bedroom7 from "../../../assests/images/gallery/new-gallery/bedroom7.png";
import bedroom8 from "../../../assests/images/gallery/new-gallery/bedroom8.png";
import bedroom9 from "../../../assests/images/gallery/new-gallery/bedroom9.jpg";

// Living Room Images
import livingRoom1 from "../../../assests/images/gallery/new-gallery/living-rrom1.jpg";
import livingRoom2 from "../../../assests/images/gallery/new-gallery/living-rrom2.png";
import livingRoom3 from "../../../assests/images/gallery/new-gallery/living-rrom3.jpg";
import livingRoom4 from "../../../assests/images/gallery/new-gallery/living-rrom4.jpg";
import livingRoom5 from "../../../assests/images/gallery/new-gallery/living-rrom5.jpg";
import livingRoom6 from "../../../assests/images/gallery/new-gallery/living-rrom6.jpg";
import livingRoom7 from "../../../assests/images/gallery/new-gallery/living-rrom7.png";
import livingRoom8 from "../../../assests/images/gallery/new-gallery/living-rrom8.png";
import livingRoom9 from "../../../assests/images/gallery/new-gallery/living-rrom9.jpg";

// Kitchen Images
import kitchen1 from "../../../assests/images/gallery/new-gallery/kitchen1.png";
import kitchen2 from "../../../assests/images/gallery/new-gallery/kitchen2.png";
import kitchen3 from "../../../assests/images/gallery/new-gallery/kitchen3.png";
import kitchen4 from "../../../assests/images/gallery/new-gallery/kitchen4.png";
import kitchen5 from "../../../assests/images/gallery/new-gallery/kitchen5.jpg";
import kitchen6 from "../../../assests/images/gallery/new-gallery/kitchen6.png";

// Lobby Images
import lobb1 from "../../../assests/images/gallery/new-gallery/lobby1.png";
import lobb2 from "../../../assests/images/gallery/new-gallery/lobby2.png";
import lobb3 from "../../../assests/images/gallery/new-gallery/lobby3.jpg";
import lobb4 from "../../../assests/images/gallery/new-gallery/lobby4.jpg";
import lobb5 from "../../../assests/images/gallery/new-gallery/lobby5.jpg";
import lobb6 from "../../../assests/images/gallery/new-gallery/lobby6.png";

// Pool Image
import pool1 from "../../../assests/images/gallery/new-gallery/pool1.png";
import pool2 from "../../../assests/images/gallery/new-gallery/gallery8.jpg";

const Gallery = () => {

    const [key, setKey] = useState('exterior');

    const [index, setIndex] = useState(-1);
    
    const images = [
        {
            src: gallery1,
            title: "Gallery showcasing modern exteriors and elegant design at Ananta Aspire Zirakpur, highlighting luxury flats in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery2,
            title: "Spacious parking facility at Ananta Aspire Zirakpur with organized layout and modern design, highlighting flats for sale in Zirakpur.",
        },
        {
            src: gallery3,
            title: "Residents walking along the poolside at Ananta Aspire Zirakpur, enjoying landscaped surroundings and serene outdoor amenities.",
        },
        {
            src: gallery4,
            title: "Children’s swing and play area at Ananta Aspire Zirakpur, highlighting safe and fun amenities in Zirakpur 3BHK flats.",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery5,
            title: "People sitting near trees and relaxing at Ananta Aspire Zirakpur, enjoying the landscaped outdoor spaces and serene surroundings.",
            cols: 2,
        },
        {
            src: gallery6,
            title: "Modern office space at Ananta Aspire Zirakpur with contemporary design and professional ambiance, part of new residential projects in Zirakpur.",
            cols: 2,
        },
        {
            src: gallery7,
            title: "Shaded seating area in landscaped park at Ananta Aspire Zirakpur, providing relaxing spots for residents, highlighting Ananta Aspire flats in Zirakpur.",
        },
        {
            src: gallery8,
            title: "Swimming pool area at Ananta Aspire Zirakpur with modern design and relaxing ambiance, part of 3 BHK luxury flats in Zirakpur.",  
        },
        {
            src: gallery9,
            title: "Night view of Ananta Aspire flats in Zirakpur with a girl standing near a flowing fountain, showcasing elegant lighting and ambiance, highlighting Ananta Aspire flats for sale.",
            cols: 2,
        }
    ]

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const [interiorIndex, setInteriorIndex] = useState(-1);

    const interiorImages = [
        {
            src: interior1,
            title: "Stylish living room interior at Ananta Aspire Zirakpur showcasing modern décor, spacious layout, and premium luxury apartment design.",
            rows: 2,
            cols: 2,
        },
        {
            src: interior2,
            title: "Luxury apartment interior at Ananta Aspire Zirakpur featuring modern design, elegant furnishings, and premium living space ambiance.",
        },
        {
            src: interior3,
            title: "Spacious bedroom with elegant decor in luxury flats in Zirakpur, offering comfort and modern living ambiance.",
        },
        {
            src: interior4,
            title: "Elegant living room at Ananta Aspire Zirakpur featuring a stylish sofa set and modern dining table in a spacious, well-designed interior.",
            rows: 2,
            cols: 2,
        },
        {
            src: interior5,
            title: "Experience premium living at AnantaAspire flats in Zirakpur with a stylish LED TV setup, elegant dining table, luxury sofa set, and stunning outside view that defines modern comfort and elegance.",
            cols: 2,
        },
        {
            src: interior6,
            title: "Modern living room at Ananta Aspire Zirakpur featuring a white sofa set and LED TV unit, highlighting luxury interiors and premium apartment design.",
            cols: 2,
        },
        {
            src: interior7,
            title: "Modern kitchen design at Ananta Aspire Zirakpur showcasing sleek interiors and premium fittings in luxury flats in Zirakpur.",
        },
        {
            src: interior8,
            title: "Spacious living area at Ananta Aspire featuring modern interiors and premium amenities, showcasing luxury flats for sale in Zirakpur.",  
        },
        {
            src: interior9,
            title: "Elegant 3BHK Zirakpur flat interior at Ananta Aspire featuring modern décor, spacious layout, and premium lifestyle amenities.",
            cols: 2,
        }
    ]

    const [bedroomIndex, setBedroomIndex] = useState(-1);

    const bedroomImages = [
        {
            src: bedroom1,
            title: "Luxury bedroom interior at Ananta Aspire showcasing elegant design and comfort, part of new residential projects in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: bedroom2,
            title: "Modern bedroom with green bed design at Ananta Aspire, highlighting stylish interiors and premium luxury flats in Zirakpur.",
        },
        {
            src: bedroom3,
            title: "Beautiful bedroom with brown bed, LCD unit, and elegant curtains at Ananta Aspire, showcasing premium 3 BHK luxury flats in Zirakpur.",
        },
        {
            src: bedroom4,
            title: "Spacious bedroom with beige and white tones at Ananta Aspire featuring modern décor and elegant furnishings, highlighting Ananta Aspire flats for sale in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: bedroom5,
            title: "Elegant bedroom interior with modern furnishings and neutral tones at Ananta Aspire, showcasing 4BHK luxury apartments in Zirakpur.",
            cols: 2,
        },
        {
            src: bedroom6,
            title: "Modern bedroom interior with stylish décor and cozy ambiance at Ananta Aspire, highlighting Zirakpur flats 3BHK with premium amenities",
            cols: 2,
        },
        {
            src: bedroom7,
            title: "Modern bedroom interior in 4BHK luxury apartments in Zirakpur at Ananta Aspire featuring a brown bed, stylish curtains, contemporary furnishings, and cozy ambiance.",
        },
        {
            src: bedroom8,
            title: "Elegant bedroom interior at Ananta Aspire featuring a beige bed, modern furnishings, and stylish curtains, highlighting flats for sale in Zirakpur.",  
        },
        {
            src: bedroom9,
            title: "Modern kitchen interior at Ananta Aspire showcasing sleek design, premium fittings, and contemporary style in 3 BHK luxury flats in Zirakpur.",
            cols: 2,
        }
    ]

    // Living Room
    const [livingIndex, setLivingIndex] = useState(-1);

    const livingImages = [
        {
            src: livingRoom1,
            title: "Spacious living room interior at Ananta Aspire with modern furnishings, cozy ambiance, and high-speed WiFi connectivity for residents.",
            rows: 2,
            cols: 2,
        },
        {
            src: livingRoom2,
            title: "Stylish living room at Ananta Aspire featuring a modern sofa set and elegant décor, part of 3 BHK luxury flats in Zirakpur.",
        },
        {
            src: livingRoom3,
            title: "Cozy and contemporary living area at Ananta Aspire featuring a stylish sofa set, designed for comfort in Zirakpur 3BHK flats.",
        },
        {
            src: livingRoom4,
            title: "Modern and spacious living room interior at Ananta Aspire with elegant furnishings and décor, part of new residential projects in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: livingRoom5,
            title: "Legant living room interior at Ananta Aspire featuring modern furniture and stylish décor, showcasing 4BHK luxury apartments in Zirakpur.",
            cols: 2,
        },
        {
            src: livingRoom6,
            title: "Contemporary living room interior at Ananta Aspire featuring modern décor and furnishings, part of 3 BHK luxury flats in Zirakpur.",
            cols: 2,
        },
        {
            src: livingRoom7,
            title: "Spacious and modern living room interior at Ananta Aspire featuring stylish furniture, elegant décor, and premium apartment design in Zirakpur.",
        },
        {
            src: livingRoom8,
            title: "Elegant living room interior at Ananta Aspire featuring contemporary furniture and décor, highlighting luxury flats in Zirakpur.",  
        },
        {
            src: livingRoom9,
            title: "Luxurious and inviting living room at Ananta Aspire Zirakpur featuring elegant furnishings, cozy ambiance, and premium design, perfect for 4BHK luxury apartments.",
            cols: 2,
        }
    ]

    // Kitchen Images
    const [kitchenIndex, setKitchenIndex] = useState(-1);

    const kitchenImages = [
        {
            src: kitchen1,
            title: "Sleek and modern kitchen at Ananta Aspire Zirakpur with premium fittings and stylish design, ideal for luxury flats in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen2,
            title: "Stylish and contemporary kitchen at Ananta Aspire Zirakpur with modern fittings, elegant countertops, and premium design, perfect for flats for sale in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen3,
            title: "Modern and fully-equipped kitchen at Ananta Aspire Zirakpur featuring sleek countertops and contemporary design, ideal for Zirakpur 3BHK flats.",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen4,
            title: "Elegant and modern kitchen interior at Ananta Aspire featuring premium fittings, spacious design, and contemporary style, part of new residential projects in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen5,
            title: "Spacious and modern kitchen at Ananta Aspire Zirakpur with premium fixtures and stylish design, showcasing 4BHK luxury apartments in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen6,
            title: "Contemporary kitchen interior at Ananta Aspire Zirakpur featuring sleek countertops, modern fittings, and elegant design, ideal for 3 BHK luxury flats in Zirakpur.",
            rows: 2,
            cols: 2,
        }
    ]

    // Lobby Images
    const [lobbyIndex, setLobbyIndex] = useState(-1);

    const lobbyImages = [
        {
            src: lobb1,
            title: "Grand and welcoming lobby at Ananta Aspire Zirakpur featuring modern décor, elegant seating, and premium ambiance, highlighting Ananta Aspire flats in Zirakpur.",
            rows: 3,
            cols: 2,
        },
        {
            src: lobb2,
            title: "Stylish lobby interior at Ananta Aspire Zirakpur featuring elegant chairs, modern décor, and a welcoming ambiance, highlighting Ananta Aspire flats for sale.",
            rows: 2,
            cols: 2,
        },
        {
            src: lobb3,
            title: "Elegant and spacious lobby at Ananta Aspire Zirakpur with modern décor, comfortable seating, and luxurious ambiance, showcasing luxury flats in Zirakpur.",
            rows: 2,
            cols: 2,
        },
        {
            src: lobb4,
            title: "Modern and inviting lobby at Ananta Aspire Zirakpur featuring stylish furnishings and elegant décor, highlighting flats for sale in Zirakpur.",
            cols: 1,
        },
        {
            src: lobb5,
            title: "Contemporary lobby interior at Ananta Aspire Zirakpur featuring stylish seating and modern décor, showcasing Zirakpur flats 3BHK.",
            cols: 1,
        },
        {
            src: lobb6,
            title: "Spacious and elegant lobby at Ananta Aspire Zirakpur with modern décor and premium design, part of new residential projects in Zirakpur.",
            cols: 2,
        }
    ]

    // Pool Images
    const [poolIndex, setPoolIndex] = useState(-1);

    const poolImages = [
        {
            src: pool1,
            title: "Swimming pool at Ananta Aspire Zirakpur with people sitting in a shaded seating area, surrounded by landscaped amenities and relaxing ambiance.",
            rows: 3,
            cols: 3,
        },
        {
            src: pool2,
            title: "Night view of the swimming pool at Ananta Aspire Zirakpur with illuminated water, ambient lighting, and relaxing surroundings for residents.",
            rows: 3,
            cols: 3,
        }
    ]

    return(
        <section className="gallery_section padding-top padding-bottom" id="gallery">
            <Container>
                <Row>
                    <Col>
                        <h2 className="main_heading">Gallery</h2>
                        <Tabs
                            id="gallery_tabs"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="gallery_tabs"
                        >
                            {/* Exterior Tab */}
                            <Tab eventKey="exterior" title="Exterior">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {images.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={index}
                                        slides={images}
                                        open={index >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Interior */}
                            <Tab eventKey="interior" title="Interior">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {interiorImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setInteriorIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={interiorIndex}
                                        slides={interiorImages}
                                        open={interiorIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setInteriorIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Bedroom */}
                            <Tab eventKey="bedrooms" title="Bedrooms">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {bedroomImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setBedroomIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={bedroomIndex}
                                        slides={bedroomImages}
                                        open={bedroomIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setBedroomIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Living Rooms */}
                            <Tab eventKey="living_rooms" title="Living Rooms">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {livingImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setLivingIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={livingIndex}
                                        slides={livingImages}
                                        open={livingIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setLivingIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Kitchen Images */}
                            <Tab eventKey="kitchen" title="Kitchen">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {kitchenImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setKitchenIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={kitchenIndex}
                                        slides={kitchenImages}
                                        open={kitchenIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setKitchenIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Lobby Images */}
                            <Tab eventKey="lobby" title="Lobby">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {lobbyImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setLobbyIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={lobbyIndex}
                                        slides={lobbyImages}
                                        open={lobbyIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setLobbyIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>

                            {/* Pool Images */}
                            <Tab eventKey="pool" title="Pool">
                                <ImageList
                                    variant="quilted"
                                    cols={6}
                                    gap={8}
                                    rowHeight={250}
                                    className='gallery-images-list'
                                >
                                    {poolImages.map((item,i) => (
                                        <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className={`w-full relative effect-one effect overflow-hidden gallery-image gallery_${i}`}>
                                            <img
                                                {...srcset(item.src, 121, item.rows, item.cols)}
                                                alt={item.title}
                                                onClick={() => setPoolIndex(i)}
                                                className={`object-cover cursor-pointer`}
                                            />
                                        </ImageListItem>
                                    ))}
                                
                                    <Lightbox
                                        index={poolIndex}
                                        slides={poolImages}
                                        open={poolIndex >= 0}
                                        styles={{slide: { marginTop: "20px" },  toolbar: {background: '#00000054', width: '100%'}, icon:{color: '#fff'} }}
                                        controller={{ closeOnBackdropClick: true }}
                                        close={() => setPoolIndex(-1)}
                                        plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                                        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                                    />
                                </ImageList>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Gallery