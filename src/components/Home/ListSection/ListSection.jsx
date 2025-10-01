import './ListSection.css';

const ListSection = () => {
    return(
        <section className="max-w-5xl m-auto pt-12 px-2.5">
           <ul className="flex justify-center items-center list-sections flex-wrap">
                <li className="px-7 relative">Impressive Architecture</li>
                <li className="px-7 relative">Innumerous Amenities</li>
                <li className="px-7 relative">Grandiose Living</li>
                <li className="px-7 relative">State-of-the-Art Facilities</li>
                <li className="px-7 relative">Refined Lifestyle</li>
            </ul> 
        </section>
    )
}

export default ListSection