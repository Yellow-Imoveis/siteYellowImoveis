import React from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/01.jpg";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";

export default function Pricing() {
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
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Pricing Plans</h3>
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

                        <div className="rounded-md shadow dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-700 duration-500 ease-in-out">
                            <div className="border-b dark:border-gray-800 p-6 text-center">
                                <div className="w-24 h-24 bg-yellow-500/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                                    <i className="uil uil-trees"></i>
                                </div>
                                <h3 className="text-2xl text-green-600 font-medium mt-4">Basic</h3>

                                <div className="flex justify-center mt-4">
                                    <span className="text-xl">$</span>
                                    <span className="text-3xl font-semibold">19</span>
                                    <span className="text-xl self-end">/month</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h5>Pricing Features:</h5>
                                <ul className="list-none">
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                                </ul>
                                <Link2 to="#" className="btn bg-yellow-500 hover:bg-yellow-600 border-green-600 dark:border-green-600 text-white rounded-md w-full mt-4">Get Started</Link2>
                            </div>
                        </div>

                        <div className="rounded-md shadow dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-700 duration-500 ease-in-out">
                            <div className="border-b dark:border-gray-800 p-6 text-center">
                                <div className="w-24 h-24 bg-yellow-500/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                                    <i className="uil uil-shield"></i>
                                </div>

                                <h3 className="text-2xl text-green-600 font-medium mt-4">Premium</h3>

                                <div className="flex justify-center mt-4">
                                    <span className="text-xl">$</span>
                                    <span className="text-3xl font-semibold">39</span>
                                    <span className="text-xl self-end">/month</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h5>Pricing Features:</h5>

                                <ul className="list-none">
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                                </ul>
                                <Link2 to="#" className="btn bg-yellow-500 hover:bg-yellow-600 border-green-600 dark:border-green-600 text-white rounded-md w-full mt-4">Get Started</Link2>
                            </div>
                        </div>

                        <div className="rounded-md shadow dark:shadow-gray-700 hover:shadow-md dark:hover:shadow-gray-700 duration-500 ease-in-out">
                            <div className="border-b dark:border-gray-800 p-6 text-center">
                                <div className="w-24 h-24 bg-yellow-500/5 text-green-600 flex items-center justify-center text-3xl rounded-full mx-auto">
                                    <i className="uil uil-rocket"></i>
                                </div>

                                <h3 className="text-2xl text-green-600 font-medium mt-4">Business</h3>

                                <div className="flex justify-center mt-4">
                                    <span className="text-xl">$</span>
                                    <span className="text-3xl font-semibold">99</span>
                                    <span className="text-xl self-end">/month</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h5>Pricing Features:</h5>

                                <ul className="list-none">
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Full Access</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Source Files</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Free Appointments</li>
                                    <li className="text-slate-700 mt-2"><span className="text-green-600 text-lg me-2"><i className="uil uil-check-circle align-middle"></i></span>Enhanced Security</li>
                                </ul>
                                <Link2 to="#" className="btn bg-yellow-500 hover:bg-yellow-600 border-green-600 dark:border-green-600 text-white rounded-md w-full mt-4">Get Started</Link2>
                            </div>
                        </div>
                    </div>
                </div>

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

