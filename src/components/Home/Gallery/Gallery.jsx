import './Gallery.css';
import image1 from '../../../assests/images/gallery/image-1.jpg';
import image2 from '../../../assests/images/gallery/image-2.jpeg';
import image3 from '../../../assests/images/gallery/image-3.jpeg';
import image4 from '../../../assests/images/gallery/image-4.jpeg';
import image5 from '../../../assests/images/gallery/image-5.jpeg';
import image6 from '../../../assests/images/gallery/image-6.jpeg';
import image7 from '../../../assests/images/gallery/image-7.jpeg';
import image8 from '../../../assests/images/gallery/image-8.jpeg';
import image9 from '../../../assests/images/gallery/image-9.jpeg';
import image10 from '../../../assests/images/gallery/image-10.jpeg';
import image11 from '../../../assests/images/gallery/image-11.jpeg';
import image12 from '../../../assests/images/gallery/image-12.jpeg';
import image13 from '../../../assests/images/gallery/image-13.jpeg';
import image14 from '../../../assests/images/gallery/image-14.jpeg';
import image15 from '../../../assests/images/gallery/image-15.jpeg';
// import image16 from '../../../assests/images/gallery/image-16.jpg';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import { Counter, Fullscreen, Zoom } from 'yet-another-react-lightbox/plugins';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Gallery = () => {

    const [index, setIndex] = useState(-1);

    const images = [
        {
            src: image1,
            title: "Ananta Aspire Zirakpur luxury 3BHK and 4BHK apartments – modern residential project exterior view",
            rows: 2,
            cols: 2,
        },
        {
            src: image2,
            title: "Ananta Aspire Zirakpur modern 3BHK and 4BHK apartment project with premium lifestyle and smart living features",
        },
        {
            src: image3,
            title: "Ananta Aspire Zirakpur premium 3BHK and 4BHK smart home apartments with modern design and lifestyle amenities",
            rows: 2,
        },
        {
            src: image4,
            title: "Ananta Aspire Zirakpur luxury residential apartments with world-class amenities and elegant architectural design",
        },
        {
            src: image5,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            rows: 2,
        },
        {
            src: image6,
            title: "Ananta Aspire Zirakpur parking area – secure and spacious parking facility for residents of luxury apartments in Zirakpur",
            rows: 2,
            cols: 2,
        },
        {
            src: image7,
            title: "New residential projects and flats for sale in Zirakpur - Ananta Aspire",
        },
        {
            src: image8,
            title: "Ananta Aspire Zirakpur 3BHK and 4BHK luxury flats in Zirakpur – premium apartments for sale in new residential projects in Zirakpur",
            
        },
        {
            src: image9,
            title: "Ananta Aspire Zirakpur children’s play area – safe and fun recreational space in luxury residential apartments in Zirakpur",
        },
        {
            src: image10,
            title: "Ananta Aspire Zirakpur clubhouse living area – modern and luxurious indoor space for residents of premium apartments in Zirakpur",
            rows: 2,
        },
        {
            src: image11,
            title: "Ananta Aspire Zirakpur clubhouse conference room – modern and well-equipped meeting space in luxury residential apartments in Zirakpur",
            rows: 2,
            cols: 2,
        },
        {
            src: image12,
            title: "Ananta Aspire Zirakpur clubhouse with Coffee Club view – premium recreational space in luxury residential apartments in Zirakpur",
        },
        {
            src: image13,
            title: "Ananta Aspire Zirakpur luxury apartments – a woman admiring 3BHK and 4BHK flats in Zirakpur",
          
        },
        {
            src: image14,
            title: "Ananta Aspire Zirakpur swimming pool at night – illuminated luxury pool for residents of 3BHK and 4BHK apartments in Zirakpur",
        },
        // {
        //     src: image16,
        //     title: "front view of the Ananta Apartments",
        //     cols: 2,
        //     rows:2
        // },
        {
            src: image15,
            title: "Ananta Aspire Zirakpur bird's eye view – luxury 3BHK and 4BHK apartments in Zirakpur",
            cols: 2,
            // rows: 1
        },
        
    ]
    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
    return(
        <section className="max-w-8xl m-auto pt-10 px-2.5 text-center flex flex-col gap-5" id="gallery">
            <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-7">Photo Gallery</h3>
            <div className="w-20 h-1 bg-black m-auto"></div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tab grid-flow-row gap-5 p-2.5"> */}
                {/* {images.map((item, i) => (
                    <div className='relative  effect-one effect overflow-hidden rounded-md gallery-image w-full h-full' key={i}>
                        <img
                            src={item.src}
                            alt={item.title}
                            className='rounded-md  object-cover cursor-pointer'
                            onClick={() => setIndex(i)}
                        /> */}
                        {/* <p className='text-xs sm:text-sm font-semibold p-1 absolute bottom-2.5 right-2.5 left-auto text-white w-auto'>*Image shown is for illustration purposes only</p> */}
                    {/* </div>
                ))}
                <Lightbox
                    index={index}
                    slides={images}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Zoom,  Slideshow,Counter,Thumbnails]}
                    counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                /> */}
                <ImageList
                        variant="quilted"
                        cols={4}
                        rowHeight={200}
                        className='gallery-images-list'
                        >
                        {images.map((item,i) => (
                            <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1} className='w-full relative effect-one effect overflow-hidden rounded-md gallery-image'>
                            <img
                                {...srcset(item.src, 121, item.rows, item.cols)}
                                alt={item.title}
                                onClick={() => setIndex(i)}
                                className='rounded-md  object-cover cursor-pointer'
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
                            // slides={advancedSlides}
                            plugins={[Fullscreen, Zoom, Slideshow,Counter,Thumbnails]}
                            counter={{ container: { style: { top: 0, bottom: "unset" } } }}
                        />
                    </ImageList>
            {/* </div> */}
        </section>
    )
}

export default Gallery