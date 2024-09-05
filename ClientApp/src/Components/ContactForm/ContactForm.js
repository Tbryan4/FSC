import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

export const ContactSection = ({
                                   tagline = "",
                                   heading = "Contact us",
                                   description = "If you have any questions don't be afraid to reach out!",
                                   contacts = [
                                       {
                                           icon: <BiEnvelope color="red" className="size-12" />,
                                           title: "Email",
                                           description: "For registration & general inquiries contact us by email for fastest response",
                                           link: {
                                               label: "federationskating@gmail.com",
                                               url: "#",
                                           },
                                       },
                                       {
                                           icon: <BiPhone color="red" className="size-12" />,
                                           title: "Phone",
                                           description: "Voice mail Messages only",
                                           link: {
                                               label: "825-512-8616",
                                               url: "#",
                                           },
                                       },
                                       {
                                           icon: <BiMap color="red" className="size-12" />,
                                           title: "Mailing Address",
                                           description: "This is our mailing address",
                                           link: {
                                               label: "PO Box 25526\n" +
                                                   "\n" +
                                                   "RPO West Drive Thru \n" +
                                                   "\n" +
                                                   "Edmonton, Alberta T5T 7E7",
                                               url: "#",
                                           },
                                       },
                                   ],
                               }) => {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mb-12 md:mb-18 lg:mb-20 text-center">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="md:text-md">{description}</p>
                </div>
                <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {contacts.map((contact, index) => (
                        <div key={index}>
                            <div className="justify-content-center d-flex">
                                <div className="mb-5 md:mb-6">{contact.icon}</div>
                            </div>
                            <h3 className="text-center mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                {contact.title}
                            </h3>
                            <p className="text-center mb-5 md:mb-6">{contact.description}</p>
                            <div className="justify-content-center d-flex">

                            <a className="text-center underline" href={contact.link.url}>
                                {contact.link.label}
                            </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
