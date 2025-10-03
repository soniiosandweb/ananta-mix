import floorPlan1 from '../../../assests/images/floorplan/3-BHK-1830-Sq.-feet.jpeg';
import floorPlan2 from '../../../assests/images/floorplan/3-BHK-1830-Sq.-feet.jpeg';
import floorPlan3 from '../../../assests/images/floorplan/41-BHK-2900-sq-feet.jpeg';
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

const FloorPlan = () => {
    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    return(
        <section className="max-w-5xl m-auto pt-16 pb-5 px-2.5 text-center flex flex-col gap-5" id="floorplan">
            <h3 className="text-3xl uppercase font-semibold text-primary-brown">Floor Plan</h3>
            <div className="w-20 h-1 bg-black m-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 p-2.5">
                {/* Plan 1 */}
                <div className="p-3.5 border-primary-brown border-2 rounded-tl-3xl rounded-br-3xl flex flex-col gap-5 items-center justify-between">
                    <img
                        src={floorPlan1}
                        alt="Ananta Aspire Zirakpur 3BHK apartment 1830 sq. ft. luxury flats in Zirakpur with modern amenities"
                        className="p-2.5 cursor-pointer"
                        onClick={() => setOpenPlan1(true)}
                    />
                    <Lightbox
                        open={openPlan1}
                        close={() => setOpenPlan1(false)}
                        slides={[
                            { src: floorPlan1 }
                        ]}
                        plugins={[Fullscreen, Zoom]}
                        carousel={{ finite: 1 }}
                        render={{
                            buttonPrev: undefined,
                            buttonNext: undefined,
                        }}
                        className="single-lightbox"
                    />
                    <button className="rounded-tl-3xl rounded-br-3xl border-primary-brown border-2 py-3 px-6 text-sm font-medium text-white bg-primary-brown hover:bg-white hover:text-primary-brown leading-4">3 BHK (1830 sq. feet)</button>
                </div>

                {/* Plan 2 */}
                <div className="p-3.5 border-primary-brown border-2 rounded-tl-3xl rounded-br-3xl flex flex-col gap-5 items-center justify-between">
                    <img
                        src={floorPlan2}
                        alt="Ananta Aspire Zirakpur 3BHK 1830 sq.ft. luxury apartment with modern amenities in Zirakpur"
                        className="p-2.5 cursor-pointer"
                        onClick={() => setOpenPlan2(true)}
                    />
                    <Lightbox
                        open={openPlan2}
                        close={() => setOpenPlan2(false)}
                        slides={[
                            { src: floorPlan2 }
                        ]}
                        plugins={[Fullscreen, Zoom]}
                        carousel={{ finite: 1 }}
                        render={{
                            buttonPrev: undefined,
                            buttonNext: undefined,
                        }}
                        className="single-lightbox"
                    />
                    <button className="rounded-tl-3xl rounded-br-3xl border-primary-brown border-2 py-3 px-6 text-sm font-medium text-white bg-primary-brown hover:bg-white hover:text-primary-brown leading-4">3+1 BHK (2245 sq. feet)</button>
                </div>

                {/* Plan 3 */}
                <div className="p-3.5 border-primary-brown border-2 rounded-tl-3xl rounded-br-3xl flex flex-col gap-5 items-center justify-between">
                    <img
                        src={floorPlan3}
                        alt="Ananta Aspire Zirakpur 4BHK 2900 sq.ft. luxury apartment with premium amenities in Zirakpur"
                        className="p-2.5 cursor-pointer"
                        onClick={() => setOpenPlan3(true)}
                    />
                    <Lightbox
                        open={openPlan3}
                        close={() => setOpenPlan3(false)}
                        slides={[
                            { src: floorPlan3 }
                        ]}
                        plugins={[Fullscreen, Zoom]}
                        carousel={{ finite: 1 }}
                        render={{
                            buttonPrev: undefined,
                            buttonNext: undefined,
                        }}
                        className="single-lightbox"
                    />
                    <button className="rounded-tl-3xl rounded-br-3xl border-primary-brown border-2 py-3 px-6 text-sm font-medium text-white bg-primary-brown hover:bg-white hover:text-primary-brown leading-4">4+1 BHK (2900 sq. feet)</button>
                </div>
                
            </div>
        </section>
    )
}

export default FloorPlan