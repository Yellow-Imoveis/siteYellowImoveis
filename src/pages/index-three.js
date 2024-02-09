import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import properties from "../config/grid-data";
import Client from "../component/Client";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";

import Member1 from "../assets/images/client/04.jpg";
import Member2 from "../assets/images/client/05.jpg";
import Member3 from "../assets/images/client/06.jpg";
import Member4 from "../assets/images/client/07.jpg";

import { Facebook, Instagram, Linkedin, Search } from "react-feather";

export default function IndexThree() {

    return (
        <>
            <Navbar />
            {/* <!-- Google Map --> */}
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

            <div className="container relative -mt-[25px]">
                <div className="grid grid-cols-1">
                    <div className="subcribe-form z-1">
                        <form className="relative max-w-2xl mx-auto">
                            <Search className="w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                            <input type="name" id="search_name" name="name" className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ps-12" placeholder="City, Address, Zip :" />
                            <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- Google Map --> */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                        {properties.map((item, index) => (
                            <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 w-full mx-auto lg:max-w-2xl">
                                <div className="md:flex">
                                    <div className="relative md:shrink-0">
                                        <img className="h-full w-full object-cover md:w-48" src={item.image} alt="" />
                                        <div className="absolute top-4 end-4">
                                            <Link to="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="md:pb-4 pb-6">
                                            <Link to={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</Link>
                                        </div>

                                        <ul className="md:py-4 py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                            <li className="flex items-center me-4">
                                                <i className="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                                                <span>{item.square}sqf</span>
                                            </li>

                                            <li className="flex items-center me-4">
                                                <i className="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                                                <span>{item.beds} Beds</span>
                                            </li>

                                            <li className="flex items-center">
                                                <i className="uil uil-bath text-2xl me-2 text-green-600"></i>
                                                <span>{item.baths} Baths</span>
                                            </li>
                                        </ul>

                                        <ul className="md:pt-4 pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-700">Price</span>
                                                <p className="text-lg font-medium">${item.price}</p>
                                            </li>

                                            <li>
                                                <span className="text-slate-700">Rating</span>
                                                <ul className="text-lg font-medium text-amber-400 list-none">
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="md:flex justify-center text-center mt-6">
                        <div className="md:w-full">
                            <Link to="/list" className="btn btn-link text-green-600 hover:text-green-600 after:bg-yellow-500 transition duration-500">View More Properties <i className="uil uil-arrow-right ms-1"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="container lg:mt-24 mt-16 lg:pt-24 pt-16">
                    <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                    <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trusted by more than 10K users</h3>

                        <p className="text-slate-700 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-700 dark:text-white"><span className="counter-value" data-target="1548">1548</span>+</h1>
                            <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-700 dark:text-white"><span className="counter-value" data-target="25">25</span>+</h1>
                            <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-700 dark:text-white"><span className="counter-value" data-target="9">9</span>+</h1>
                            <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet The Agent Team</h3>

                        <p className="text-slate-700 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={Member1} className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Facebook className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Instagram className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Linkedin className="h-4 w-4" /></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Jack John</Link>
                                    <p className="text-slate-700">Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={Member2} className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Facebook className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Instagram className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Linkedin className="h-4 w-4" /></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Krista John</Link>
                                    <p className="text-slate-700">Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={Member3} className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Facebook className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Instagram className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Linkedin className="h-4 w-4" /></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Roger Jackson</Link>
                                    <p className="text-slate-700">Designer</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <img src={Member4} className="" alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Facebook className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Instagram className="h-4 w-4" /></Link></li>
                                        <li className="inline ms-1"><Link to="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-yellow-500 hover:border-green-600 hover:bg-yellow-500 text-white"><Linkedin className="h-4 w-4" /></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                    <Link to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">Johnny English</Link>
                                    <p className="text-slate-700">Designer</p>
                                </div>
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
                            <Link to="#" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</Link>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
            <Switcher />
        </>
    );
}

