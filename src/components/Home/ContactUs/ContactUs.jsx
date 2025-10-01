import EnquireForm from "../../Layout/EnquireForm/EnquireForm"

const ContactUs = () => {
    return (
        <section className="max-w-5xl m-auto py-10 px-2.5 text-center flex flex-col gap-5" id="contact">
            {/* <h3 className="text-3xl uppercase font-semibold text-primary-brown pt-7">Please Fill In Your Details</h3> */}
            {/* <div className="w-20 h-1 bg-black m-auto"></div> */}

            <div className="flex flex-col md:flex-row items-center p-2.5 gap-5">
                <div className="w-full md:w-1/2 p-2.5 text-left">
                    {/* <iframe 
                        src="https://maps.google.com/maps?q=Ananta%20Aspire%20NH%207%2C%20Patiala%20Rd%2C%20Utrathiya%2C%20Zirakpur%2C%20Nabha%2C%20Punjab%20140603&t=m&z=18&output=embed&iwloc=near" 
                        title="Ananta Aspire NH 7, Patiala Rd, Utrathiya, Zirakpur, Nabha, Punjab 140603" 
                        aria-label="Ananta Aspire NH 7, Patiala Rd, Utrathiya, Zirakpur, Nabha, Punjab 140603"
                        width="100%"
                        height="300"
                    ></iframe> */}
                    <p className="text-xl leading-relaxed">Contact us today to schedule a visit to the <b>luxury 3 & 4 BHK Apartments for
                        sale in Zirakpur</b> and experience The Ananta Aspire difference.
                    </p>
                    <p className="text-xl leading-relaxed mt-5">Contact us at: <a className="text-brown break-all" href="mailto:contact@anantaaspirezirakpur.co">  <span> </span>contact@anantaaspirezirakpur.co</a></p>
                </div>
                <div className="w-full md:w-1/2 p-2.5">
                    <div className="p-4 sm:p-8" style={{ boxShadow: "0px 0px 4px 0px #0000001A" }}>
                        <EnquireForm title="Get In Touch" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs