import React from 'react';
import logo from "../../assets/logos/instagram.png"
import twitter from "../../assets/logos/twitter.png"
import facebook from "../../assets/logos/facebook.png"
const ContactSection = () => {
    return (
        <section className="bg-white mb-20 dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <p className="font-medium text-red-500 dark:text-red-400">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Get in
                        touch</h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-400">Our friendly team would love to hear from
                        you.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
                        <div className="d-flex md:justify-center lg:justify-normal align-items-center">
                             <span
                                 className="mr-5 inline-block p-3 text-red-500 rounded-full bg-red-100/80 dark:bg-gray-800">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                  stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                    </span>
                            <div>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here
                                    to help.</p>
                                <a href="mailto:federationskating@gmail.com"
                                   className="mt-2 text-sm text-red-500 dark:text-red-400">
                                    federationskating@gmail.com
                                </a></div>
                        </div>

                        <div className="d-flex  md:justify-center lg:justify-normal align-items-center">
                            <span
                                className="inline-block p-3 mr-5 text-red-500 rounded-full bg-red-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                </svg>
                            </span>
                            <div>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Mailing
                                    Address</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our
                                    office
                                    HQ.</p>
                                <p className="mt-2 text-sm text-red-500 dark:text-red-400">PO Box 25526 RPO West Drive
                                    Thru Edmonton, Alberta T5T 7E7</p>
                            </div>
                        </div>

                        <div className="d-flex md:justify-center lg:justify-normal align-items-center">
                            <span
                                className="inline-block mr-5 p-3 text-red-500 rounded-full bg-red-100/80 dark:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                </svg>
                            </span>
                            <div>
                                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Voice mail messages only - email is preferred 
                                    </p>
                                <p className="mt-2 text-sm text-red-500 dark:text-red-400">825-512-8616</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.978394084363!2d-113.51670332326206!3d53.45097247231992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f6cb25a56cf%3A0x73c5128c64459928!2sFederation%20Skating%20Club!5e0!3m2!1sen!2sca!4v1722894142882!5m2!1sen!2sca"
                        ></iframe>
                    </div>
                </div>
            </div>

            <section className="px-[5%] py-12 md:py-16 lg:py-20">
                <div className="container">
                    <h1 className="mx-auto mb-8 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-10 md:text-md md:leading-[1.2] lg:mb-12">
                       Connect with us on social media
                    </h1>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                        <a href="https://www.instagram.com/federationskating/">
                            <div
                                className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
                                <img src={logo} className="max-h-12 md:max-h-14" alt="instagram-logo"/>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/federationskatingclub/">
                            <div
                                className="flex w-full items-start justify-center justify-self-center bg-neutral-lightest px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]">
                                <img src={facebook} className="max-h-12 md:max-h-14" alt="facebook-logo"/>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default ContactSection;