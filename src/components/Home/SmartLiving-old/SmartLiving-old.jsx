import './SmartLiving.css';

const SmartLiving = () => {

    const smartLiving = [
        {
            title: "Control with Voice Commands",
            description: "Step into your home and effortlessly control your environment with voice commands for instant comfort.",
        },
        {
            title: "Smart Lighting",
            description: "Effortlessly control your home’s ambience with voice commands or a mobile app.",
        },
        {
            title: "Climate Control",
            description: "Adjust your home’s temperature effortlessly with smart controls.",
        },
        {
            title: "Enhanced Security",
            description: "Ensure your safety with smart home systems that offer remote monitoring, access control, real-time alerts, etc.",
        },
        {
            title: "Scheduling Made Easy",
            description: "Time-based event control allows you to automate routines and simplify your daily life.",
        },
        {
            title: "Motion Sensors",
            description: "Motion sensors that detect your presence and automatically activate the lights.",
        },
        {
            title: "Mobile App Control",
            description: "Monitor your home, adjust settings, and even troubleshoot any minor issues remotely.",
        }
    ]

    return (
        <section className="max-w-8xl m-auto py-12 px-2.5 text-center flex flex-col gap-5 mt-5 text-white relative" id="smartliving">
            <div className='max-w-5xl m-auto flex flex-col gap-5'>
                <h3 className="text-3xl uppercase font-semibold mt-7">Step into Smart Living</h3>
                <div className="w-20 h-1 bg-white m-auto"></div>
                <p>Ananta Aspire redefines modern living not just with spacious homes and
                    stunning amenities, but also with cutting-edge technology integrated
                    seamlessly into your <b>luxury flats in Zirakpur!</b> Invest in your future. Invest in a life of comfort, luxury, and innovation.Choose The Ananta Aspire <b>flats for sale in Zirakpur</b></p>
                <div className="flex flex-wrap gap-5 lg:gap-8 justify-center p-2.5">
                    {smartLiving.map((item, i) => (
                        <div className='flex flex-col items-center p-5 bg-white text-primary-brown basis-full md:basis-1/3 lg:basis-1/4 smart-living-items group relative overflow-hidden cursor-pointer' key={i}>
                            <h4 className='w-max mx-auto relative z-10 text-80 block group-hover:hidden'>
                                <span className='font-rubik font-extrabold capitalize text-transparent'>
                                    <span className='bg-primary-bg rounded-full size-10 absolute -left-5 top-0 -z-10'></span>
                                    {i + 1}
                                </span>
                            </h4>
                            <p className='text-xl font-bold group-hover:hidden'>{item.title}</p>
                            <p className='hidden group-hover:flex h-full items-center text-white z-10'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className='text-xs sm:text-sm font-semibold p-1 absolute bottom-2.5 right-2.5 left-auto text-white w-max'>*Image shown is for illustration purposes only</p>
        </section>
    )
}

export default SmartLiving