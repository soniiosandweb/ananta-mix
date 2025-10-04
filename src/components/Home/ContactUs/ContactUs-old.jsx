import EnquireForm from "../../Layout/EnquireForm/EnquireForm"

const ContactUs = () => {
    return (
        <section className="max-w-5xl m-auto py-10 px-2.5 text-center flex flex-col gap-5" id="contact">

            <div className="flex flex-col md:flex-row items-center p-2.5 gap-5">
                <div className="w-full md:w-1/2 p-2.5 text-left">
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