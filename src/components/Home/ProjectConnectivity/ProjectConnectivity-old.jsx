import { faBuilding, faMapMarkerAlt, faPlane, faRoad, faTrain, faUniversity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectConnectivity = () => {

    const accessibility = [
        {
            title: "Mohali International Airport",
            min: "15 Mins",
            icon: faPlane
        },
        {
            title: "VIP Road",
            min: "5 Mins",
            icon: faRoad
        },
        {
            title: "24 Seven",
            min: "15 Mins",
            icon: faRoad
        },
        {
            title: "Ambala Road",
            min: "5 Mins",
            icon: faRoad
        },
        {
            title: "Chandigarh Railway Station",
            min: "20 Mins",
            icon: faTrain
        }
    ]

    const hospitals = [
        {
            title: "AMCARE Hospital",
            min: "5 Mins",
            icon: faBuilding
        },
        {
            title: "Trinity Hospital",
            min: "4 Mins",
            icon: faBuilding
        },
        {
            title: "VCare Hospital",
            min: "2 Mins",
            icon: faBuilding
        },
        {
            title: "SS Multiscpeciality",
            min: "2 Mins",
            icon: faBuilding
        }
    ]

    const education = [
        {
            title: "Bachpan Play School",
            min: "15 Mins",
            icon: faUniversity
        },
        {
            title: "Dikshant Global School",
            min: "9 Mins",
            icon: faUniversity
        },
        {
            title: "St. Xavier International School",
            min: "7 Mins",
            icon: faUniversity
        },
        {
            title: "Glooming Kids Smart School",
            min: "4 Mins",
            icon: faUniversity
        },
        {
            title: "Silver Wings Universal School",
            min: "8 Mins",
            icon: faUniversity
        }
    ]

    const hotel = [
        {
            title: "Elante Mall",
            min: "15 Mins",
            icon: faMapMarkerAlt
        },
        {
            title: "Radisson Hotel",
            min: "01 Min",
            icon: faMapMarkerAlt
        },
        {
            title: "Walmart",
            min: "10 Mins",
            icon: faMapMarkerAlt
        },
        {
            title: "HLP Social Square",
            min: "01 Min",
            icon: faMapMarkerAlt
        },
        {
            title: "D-Mart",
            min: "5 Mins",
            icon: faMapMarkerAlt
        }
    ]

    return(
        <section className="max-w-8xl m-auto pt-10 px-2.5 text-center flex flex-col gap-5" id="connectivity">
            <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-7">Project Connectivity</h3>
            <div className="w-20 h-1 bg-black m-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-5 p-2.5">
                {/* Accessibility */}
                <div className="flex flex-col py-2.5 gap-5 items-center md:items-start">
                    <h4 className="text-2xl text-primary-brown font-semibold">Accessibility</h4>
                    {accessibility.map((item,i) => (
                        <div className="flex flex-col md:flex-row gap-3.5" key={i}>
                            <FontAwesomeIcon icon={item.icon} style={{fontSize: "30px"}}/>
                            <div className="text-center md:text-left text-sm">
                                <p className="font-bold text-primary-brown leading-[1] mb-1">{item.title}</p>
                                <p>{item.min}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hospitals */}
                <div className="flex flex-col py-2.5 gap-5 items-center md:items-start">
                    <h4 className="text-2xl text-primary-brown font-semibold">Hospitals</h4>
                    {hospitals.map((item,i) => (
                        <div className="flex flex-col md:flex-row gap-3.5" key={i}>
                            <FontAwesomeIcon icon={item.icon} style={{fontSize: "30px"}}/>
                            <div className="text-center md:text-left text-sm">
                                <p className="font-bold text-primary-brown leading-[1] mb-1">{item.title}</p>
                                <p>{item.min}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="flex flex-col py-2.5 gap-5 items-center md:items-start">
                    <h4 className="text-2xl text-primary-brown font-semibold">Education</h4>
                    {education.map((item,i) => (
                        <div className="flex flex-col md:flex-row gap-3.5" key={i}>
                            <FontAwesomeIcon icon={item.icon} style={{fontSize: "30px"}}/>
                            <div className="text-center md:text-left text-sm">
                                <p className="font-bold text-primary-brown leading-[1] mb-1">{item.title}</p>
                                <p>{item.min}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hotel / Entertainment */}
                <div className="flex flex-col py-2.5 gap-5 items-center md:items-start">
                    <h4 className="text-2xl text-primary-brown font-semibold">Hotel/Entertainment</h4>
                    {hotel.map((item,i) => (
                        <div className="flex flex-col md:flex-row gap-3.5" key={i}>
                            <FontAwesomeIcon icon={item.icon} style={{fontSize: "30px"}}/>
                            <div className="text-center md:text-left text-sm">
                                <p className="font-bold text-primary-brown leading-[1] mb-1">{item.title}</p>
                                <p>{item.min}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ProjectConnectivity