import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import properties from "../config/grid-data";
import Pagination from "../component/Pagination";
import Switcher from "../component/Switcher";

export default function GridSidebar() {
    return (
        <>
            <Navbar />
            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Grid View Layout</h3>
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

            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="shadow dark:shadow-gray-700 p-6 rounded-xl bg-white dark:bg-slate-900 sticky top-20">
                                <form>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label htmlFor="searchname" className="font-medium">Search Properties</label>
                                            <div className="relative mt-2">
                                                <i className="uil uil-search text-lg absolute top-[8px] start-3"></i>
                                                <input name="search" id="searchname" type="text" className="form-input border border-slate-100 dark:border-slate-800 ps-10" placeholder="Search" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium">Categories</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="re">Residential</option>
                                                <option value="la">Land</option>
                                                <option value="co">Commercial</option>
                                                <option value="ind">Industrial</option>
                                                <option value="inv">Investment</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-medium">Location</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="NY">New York</option>
                                                <option value="MC">North Carolina</option>
                                                <option value="SC">South Carolina</option>
                                            </select>
                                        </div>

                                        <div>
                                            <input type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 border-green-600 hover:border-green-700 text-white rounded-md w-full" value="Apply Filter" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-6">
                            <Pagination itemsPerPage={6} items={properties} gridClass={`grid lg:grid-cols-2 grid-cols-1 gap-[30px]`} />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End --> */}
            <Footer />
            <Switcher />
        </>
    );

}

