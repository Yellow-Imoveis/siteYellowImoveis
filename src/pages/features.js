import React from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import { Hexagon } from 'react-feather';
import Client from "../component/Client";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";

export default function Features() {
    return (
        <>
            <Navbar />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: `url(${BackgroudImage})` }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Services / Features</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            {/* <!-- End Hero --> */}

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-[50px]">

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-cards-heart"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Comfortable</Link2>
                                <p className="text-slate-700 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-shield-sun"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Extra Security</Link2>
                                <p className="text-slate-700 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-star"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Luxury</Link2>
                                <p className="text-slate-700 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-currency-usd"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Best Price</Link2>
                                <p className="text-slate-700 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-map-marker"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Stratagic Location</Link2>
                                <p className="text-slate-700 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5"></Hexagon>
                                <div className="absolute top-[50%] -translate-y-[50%] start-[45px] text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="mdi mdi-chart-arc"></i>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link2 to="#" className="text-xl hover:text-green-600 font-medium">Efficient</Link2>
                                <p className="text-slate-700 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
                            </div>
                        </div>

                    </div>
                </div>

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
        </>
    );

}
