import { Typography } from "@material-tailwind/react";
import {RefundPolicyDialog} from "../Dialogs/RefundPolicy";
import {CreditPolicyDialog} from "../Dialogs/CreditRefundPolicy";
import {FaFacebook, FaInstagram} from "react-icons/fa";

const LINKS = [
    {
        title: "Programs",
        items: [
            { name: "CanSkate", link: "/canskate" },
            { name: "CanPower", link: "/canpowerskate" },
            { name: "Intro To Figure Skating", link: "/introtofigureskating" },
            { name: "StarSkate", link: "/starskate" }
        ],
    },
    {
        title: "Company",
        items: [
            { name: "About Us", link: "/aboutus" },
            { name: "Coaching Team", link: "/coach" },
            { name: "Executive Team", link: "/executives" },
        ],
    },
    {
        title: "Resource",
        items: [
            { name: "Contact Us", link: "/contactus" },
            { name: "Schedule", link: "/schedule" },
            { name: "Events", link: "/events" },
        ],
    },
    {
        title: "Policy",
        items: [
            { name: "Refund Policy", component: <RefundPolicyDialog /> },
            { name: "Credit Policy", component: <CreditPolicyDialog /> },
        ],
    },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
    return (
        <footer className="mt-6 relative w-full">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography variant="h5" className="mb-6">
                        Federation Skating Club
                    </Typography>
                    <div className="grid grid-cols-4 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-3 font-medium opacity-40"
                                >
                                    {title}
                                </Typography>
                                {items.map(({ name, link, component }) => (
                                    <li key={name}>
                                        {link ? (
                                            <Typography
                                                as="a"
                                                href={link}
                                                color="gray"
                                                className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                                            >
                                                {name}
                                            </Typography>
                                        ) : (
                                            component
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div
                    className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">Federation Skating Club</a>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" href="https://www.facebook.com/federationskatingclub/"
                                    className="opacity-80 transition-opacity hover:opacity-100">
                            <FaFacebook className="h-5 w-5"/>
                        </Typography>

                        <Typography as="a" href="https://www.instagram.com/federationskatingclub/"
                                    className="opacity-80 transition-opacity hover:opacity-100">
                            <FaInstagram className="h-5 w-5"/>
                        </Typography>
                    </div>
            </div>
        </div>
</footer>
)
    ;
}
