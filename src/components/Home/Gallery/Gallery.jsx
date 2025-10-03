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
import interior5 from "../../../assests/images/gallery/new-gallery/interior5.png";
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
import pool2 from "../../../assests/images/gallery/new-gallery/pool2.jpg";

const Gallery = () => {

    const [key, setKey] = useState('exterior');

    const [index, setIndex] = useState(-1);
    
    const images = [
        {
            src: gallery1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
        },
        {
            src: gallery3,
            title: "Ananta Aspire Zirakpur premium 3BHK and 4BHK smart home apartments with modern design and lifestyle amenities",
        },
        {
            src: gallery4,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
            rows: 2,
            cols: 2,
        },
        {
            src: gallery5,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            cols: 2,
        },
        {
            src: gallery6,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            cols: 2,
        },
        {
            src: gallery7,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
        },
        {
            src: gallery8,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",  
        },
        {
            src: gallery9,
            title: "Ananta Aspire Zirakpur children’s play area – safe and fun recreational space in luxury residential apartments in Zirakpur",
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
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 2,
            cols: 2,
        },
        {
            src: interior2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
        },
        {
            src: interior3,
            title: "Ananta Aspire Zirakpur premium 3BHK and 4BHK smart home apartments with modern design and lifestyle amenities",
        },
        {
            src: interior4,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
            rows: 2,
            cols: 2,
        },
        {
            src: interior5,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            cols: 2,
        },
        {
            src: interior6,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            cols: 2,
        },
        {
            src: interior7,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
        },
        {
            src: interior8,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",  
        },
        {
            src: interior9,
            title: "Ananta Aspire Zirakpur children’s play area – safe and fun recreational space in luxury residential apartments in Zirakpur",
            cols: 2,
        }
    ]

    const [bedroomIndex, setBedroomIndex] = useState(-1);

    const bedroomImages = [
        {
            src: bedroom1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 2,
            cols: 2,
        },
        {
            src: bedroom2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
        },
        {
            src: bedroom3,
            title: "Ananta Aspire Zirakpur premium 3BHK and 4BHK smart home apartments with modern design and lifestyle amenities",
        },
        {
            src: bedroom4,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
            rows: 2,
            cols: 2,
        },
        {
            src: bedroom5,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            cols: 2,
        },
        {
            src: bedroom6,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            cols: 2,
        },
        {
            src: bedroom7,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
        },
        {
            src: bedroom8,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",  
        },
        {
            src: bedroom9,
            title: "Ananta Aspire Zirakpur children’s play area – safe and fun recreational space in luxury residential apartments in Zirakpur",
            cols: 2,
        }
    ]

    // Living Room
    const [livingIndex, setLivingIndex] = useState(-1);

    const livingImages = [
        {
            src: livingRoom1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 2,
            cols: 2,
        },
        {
            src: livingRoom2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
        },
        {
            src: livingRoom3,
            title: "Ananta Aspire Zirakpur premium 3BHK and 4BHK smart home apartments with modern design and lifestyle amenities",
        },
        {
            src: livingRoom4,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
            rows: 2,
            cols: 2,
        },
        {
            src: livingRoom5,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            cols: 2,
        },
        {
            src: livingRoom6,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            cols: 2,
        },
        {
            src: livingRoom7,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
        },
        {
            src: livingRoom8,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",  
        },
        {
            src: livingRoom9,
            title: "Ananta Aspire Zirakpur children’s play area – safe and fun recreational space in luxury residential apartments in Zirakpur",
            cols: 2,
        }
    ]

    // Kitchen Images
    const [kitchenIndex, setKitchenIndex] = useState(-1);

    const kitchenImages = [
        {
            src: kitchen1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen3,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen4,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen5,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            rows: 2,
            cols: 2,
        },
        {
            src: kitchen6,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
            rows: 2,
            cols: 2,
        }
    ]

    // Lobby Images
    const [lobbyIndex, setLobbyIndex] = useState(-1);

    const lobbyImages = [
        {
            src: lobb1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 3,
            cols: 2,
        },
        {
            src: lobb2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
            rows: 2,
            cols: 2,
        },
        {
            src: lobb3,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
            rows: 2,
            cols: 2,
        },
        {
            src: lobb4,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            cols: 1,
        },
        {
            src: lobb5,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            cols: 1,
        },
        {
            src: lobb6,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
            cols: 2,
        }
    ]

    // Pool Images
    const [poolIndex, setPoolIndex] = useState(-1);

    const poolImages = [
        {
            src: pool1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 3,
            cols: 3,
        },
        {
            src: pool2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
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