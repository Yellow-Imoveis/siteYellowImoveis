import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { Search } from "react-feather";
import Image from "../assets/images/hero.jpg";

import Navbar from "../component/Navbar";
import Client from "../component/Client";
import Property from "../component/Properties/property";
import Footer from "../component/Footer";
import About from "../component/About";
import Feature from "../component/Feature";
import Switcher from "../component/Switcher";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

export default function IndexFour() {
    const [isOpen, setOpen] = useState(false)

    const [activeTabIndex, setActiveIndex] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveIndex(tabIndex);
    };

    return (
        <>
            <Navbar />
            {/* Hero Start  */}

            <section className="relative py-40 lg:h-screen flex justify-center items-center bg-yellow-500/10">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-[30px] mt-10 items-center">
                        <div className="ltr:md:text-left rtl:md:text-right text-center">
                            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Find Your <span className="text-green-600">Perfect <br /> & Wonderful</span> Home</h1>
                            <p className="text-slate-700 text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div className="relative mt-8">
                                <div className="grid grid-cols-1">
                                    <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl shadow dark:shadow-gray-700" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-yellow-500' : 'hover:text-green-600'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
                                        </li>
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => handleTabClick(1)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 1 ? 'text-white bg-yellow-500' : 'hover:text-green-600'}`} id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">Sell</button>
                                        </li>
                                        <li role="presentation" className="inline-block">
                                            <button onClick={() => handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-yellow-500' : 'hover:text-green-600'}`} id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Rent</button>
                                        </li>
                                    </ul>

                                    <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow dark:shadow-gray-700">
                                        {activeTabIndex === 0 && (
                                            <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                                                <div className="subcribe-form z-1">
                                                    <form className="relative max-w-2xl mx-auto">
                                                        <Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                                                        <input type="name" id="search_name" name="name" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                                                        <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">Find Out</button>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                        {activeTabIndex === 1 && (
                                            <div id="sell-home" role="tabpanel" aria-labelledby="sell-home-tab">
                                                <div className="subcribe-form z-1">
                                                    <form className="relative max-w-2xl mx-auto">
                                                        <Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                                                        <input type="name" id="search_name" name="name" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                                                        <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">Find Out</button>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                        {activeTabIndex === 2 && (
                                            <div id="rent-home" role="tabpanel" aria-labelledby="rent-home-tab">
                                                <div className="subcribe-form z-1">
                                                    <form className="relative max-w-2xl mx-auto">
                                                        <Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                                                        <input type="name" id="search_name" name="name" className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                                                        <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">Find Out</button>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:ms-10">
                            <div className="p-5 shadow dark:shadow-gray-700 rounded-t-full bg-white dark:bg-slate-900">
                                <img src={Image} className="shadow-md rounded-t-full rounded-md" alt="" />
                            </div>
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link2 href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero End */}

            <section className="relative md:pb-24 pb-16">
                <About />
                <Feature />
                <Property />
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
