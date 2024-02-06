import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import { Search } from "react-feather";

import BackgroundImage from "../assets/images/bg/05.jpg";
import ResidentialImage from "../assets/images/property/residential.jpg";
import LandImage from "../assets/images/property/land.jpg";
import CommercialImage from "../assets/images/property/commercial.jpg";
import InvestmentImage from "../assets/images/property/investment.jpg";
import IndustrialImage from "../assets/images/property/industrial.jpg";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Navbar from "../component/Navbar";
import Client from "../component/Client";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import PropertyTwo from "../component/Property-two";
import Switcher from "../component/Switcher";

export default function IndexFive() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar />
            {/* Hero Start  */}
            <section className="relative md:pt-44 pt-36 bg-gradient-to-b from-slate-50 dark:from-slate-800 to-transparent">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Are you ready to find your dream home</h1>
                            <p className="text-slate-700 mx-auto text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="subcribe-form relative z-1 mt-8">
                                <form className="relative max-w-2xl mx-auto">
                                    <Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                                    <input type="name" id="search_name" name="name" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                                    <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">Search</button>
                                </form>
                            </div>
                        </div>
                        <div className="relative -mt-[25px]">
                            <img src={BackgroundImage} className="rounded-xl shadow-md dark:shadow-gray-700" alt="" />
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link2 href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Listing Categories</h3>

                        <p className="text-slate-700 max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-8 md:gap-[30px] gap-3">
                        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <img src={ResidentialImage} alt="" />
                            <div className="p-4">
                                <Link2 href="#" className="text-xl font-medium hover:text-green-600">Residential</Link2>
                                <p className="text-slate-700 text-sm mt-1">46 Listings</p>
                            </div>
                        </div>

                        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <img src={LandImage} alt="" />
                            <div className="p-4">
                                <Link2 href="#" className="text-xl font-medium hover:text-green-600">Land</Link2>
                                <p className="text-slate-700 text-sm mt-1">124 Listings</p>
                            </div>
                        </div>

                        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <img src={CommercialImage} alt="" />
                            <div className="p-4">
                                <Link2 href="#" className="text-xl font-medium hover:text-green-600">Commercial</Link2>
                                <p className="text-slate-700 text-sm mt-1">265 Listings</p>
                            </div>
                        </div>

                        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <img src={IndustrialImage} alt="" />
                            <div className="p-4">
                                <Link2 href="#" className="text-xl font-medium hover:text-green-600">Industrial</Link2>
                                <p className="text-slate-700 text-sm mt-1">452 Listings</p>
                            </div>
                        </div>

                        <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <img src={InvestmentImage} alt="" />
                            <div className="p-4">
                                <Link2 href="#" className="text-xl font-medium hover:text-green-600">Investment</Link2>
                                <p className="text-slate-700 text-sm mt-1">12 Listings</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero End */}
                <About />
                <Feature />
                <PropertyTwo />
                <Client />
                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                        <p className="text-slate-700 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                        <div className="mt-6">
                            <Link2 to="/contact" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</Link2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="yba7hPeTSjk"
                onClose={() => setOpen(false)}
            />
            {/* <!-- End --> */}
        </>
    );

}
