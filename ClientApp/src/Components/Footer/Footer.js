import { Typography } from "@material-tailwind/react";
import {RefundPolicyDialog} from "../Dialogs/RefundPolicy";
import {CreditPolicyDialog} from "../Dialogs/CreditRefundPolicy";

const LINKS = [
    {
        title: "Programs",
        items: [
            { name: "CanSkate", link: "/canskate" },
            { name: "CanPowerSkate", link: "/canpowerskate" },
            { name: "Intro To Figure Skating", link: "/introtofigureskating" },
        ],
    },
    {
        title: "Company",
        items: [
            { name: "About us", link: "/aboutus" },
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
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">Federation Skating Club</a>. All Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        {/* Social Links */}
                        <Typography as="a" href="https://www.facebook.com/federationskatingclub/" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography as="a" href="https://www.instagram.com/federationskatingclub/" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06zM12 0c-2.55 0-2.87.01-3.872.057-1.041.048-1.873.223-2.5.464a6.692 6.692 0 00-2.553 1.516A6.692 6.692 0 002.464 3.872C2.223 4.5 2.048 5.232 2 6.273 1.99 7.275 1.98 7.595 1.98 10.16v.68c0 2.576.01 2.887.057 3.873.048 1.041.223 1.873.464 2.5a6.692 6.692 0 001.516 2.553 6.692 6.692 0 001.516 2.553c.636.247 1.359.416 2.5.464 1.002.047 1.322.057 3.872.057h.98c2.55 0 2.87-.01 3.872-.057 1.041-.048 1.873-.223 2.5-.464a6.692 6.692 0 002.553-1.516 6.692 6.692 0 001.516-2.553c.247-.636.416-1.359.464-2.5.047-1.002.057-1.322.057-3.872v-.98c0-2.55-.01-2.87-.057-3.872-.048-1.041-.223-1.873-.464-2.5a6.692 6.692 0 00-1.516-2.553A6.692 6.692 0 0016.136 2.5C15.5 2.223 14.772 2.048 13.731 2 12.73 1.99 12.41 1.98 10.06 1.98h-.08zM12 5.842a6.158 6.158 0 100 12.316A6.158 6.158 0 0012 5.842zm0 10.787a4.63 4.63 0 110-9.26 4.63 4.63 0 010 9.26zm4.949-10.74a1.278 1.278 0 11-2.556 0 1.278 1.278 0 012.556 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                        {/* More social links */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
