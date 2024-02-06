import React from "react";
import { Link as Link2 } from "react-router-dom";
import Navbar from "../component/Navbar";

import Poperty1Image from "../assets/images/property/1.jpg";
import Poperty2Image from "../assets/images/property/2.jpg";
import Poperty3Image from "../assets/images/property/3.jpg";
import Poperty4Image from "../assets/images/property/4.jpg";
import Poperty5Image from "../assets/images/property/5.jpg";
import Poperty6Image from "../assets/images/property/6.jpg";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";

import { Linkedin, Facebook, Twitter, Instagram, GitHub, Gitlab, Youtube } from 'react-feather';

export default function BlogSidebar() {

    const blogList = [
        {
            title: "Skills That You Can Learn In The Real Estate Market",
            date: "3rd March, 2023",
            type: 'Industrial',
            image: Poperty1Image
        },
        {
            title: "Learn The Truth About Real Estate Industry",
            date: "3rd March, 2023",
            type: 'Industrial',
            image: Poperty2Image
        },
        {
            title: "10 Quick Tips About Business Development",
            date: "3rd March, 2023",
            type: 'Industrial',
            image: Poperty3Image
        },
        {
            title: "14 Common Misconceptions About Business Development",
            date: "3rd March, 2023",
            type: 'Industrial',
            image: Poperty4Image
        },
        {
            title: "10 Things Your Competitors Can Teach You About Real Estate",
            date: "3rd March, 2023",
            type: 'Industrial',
            image: Poperty5Image
        },
        {
            title: "Why We Love Real Estate",
            date: "3rd March, 2023",
            type: 'Industrial',
            image: Poperty6Image
        }
    ]


    return (
        <>
            <Navbar />
            {/* <!-- Start Hero --> */}
            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/01.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Blogs & News</h3>
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

            {/* <!-- Start --> */}

            <section className="relative md:py-24 py-16" >
                <div className="container">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:order-1 order-2">

                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]" >
                                {blogList.map((item, index) => (
                                    <div key={index} className="group relative h-fit hover:-mt-[5px] overflow-hidden bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 transition-all duration-500">
                                        <div className="relative overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute end-4 top-4">
                                                <span className="bg-yellow-500 text-white text-[14px] px-2.5 py-1 font-medium rounded-full h-5">{item.type}</span>
                                            </div>
                                        </div>

                                        <div className="relative p-6">
                                            <div className="">
                                                <div className="flex justify-between mb-4">
                                                    <span className="text-slate-700 text-sm"><i className="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>{item.date}</span>
                                                    <span className="text-slate-700 text-sm ms-3"><i className="uil uil-clock text-slate-900 dark:text-white me-2"></i>5 min read</span>
                                                </div>

                                                <Link2 to="/blog-detail" className="title text-xl font-medium hover:text-green-600 duration-500 ease-in-out">{item.title}</Link2>

                                                <div className="mt-3">
                                                    <Link2 to="/blog-detail" className="btn btn-link hover:text-green-600 after:bg-yellow-500 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></Link2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="lg:col-span-4 md:order-2 order-1">
                            <div className="sticky top-20">
                                <form>
                                    <div>
                                        <label htmlFor="searchname" className="font-medium text-lg">Search Properties</label>
                                        <div className="relative mt-2">
                                            <i className="uil uil-search text-lg absolute top-[8px] start-3"></i>
                                            <input name="search" id="searchname" type="text" className="form-input border border-slate-100 dark:border-slate-800 ps-10" placeholder="Search" />
                                        </div>
                                    </div>
                                </form>

                                <h5 className="font-medium text-lg mt-[30px]">Recent post</h5>
                                <div className="flex items-center mt-4">
                                    <img src={Poperty6Image} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link2 to="#" className="font-medium hover:text-green-600">10 Things You About Real Estate</Link2>
                                        <p className="text-sm text-slate-700">2nd March 2023</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={Poperty3Image} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link2 to="#" className="font-medium hover:text-green-600">Why We Love Real Estate</Link2>
                                        <p className="text-sm text-slate-700">2nd March 2023</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={Poperty5Image} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link2 to="#" className="font-medium hover:text-green-600">110 Quick Tips About Real Estate</Link2>
                                        <p className="text-sm text-slate-700">2nd March 2023</p>
                                    </div>
                                </div>

                                <h5 className="font-medium text-lg mt-[30px]">Social sites</h5>
                                <ul className="list-none mt-4">
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><Facebook className="h-4 w-4" /> </Link2></li>
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><Instagram className="h-4 w-4" /> </Link2></li>
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><Twitter className="h-4 w-4" /></Link2></li>
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><Linkedin className="h-4 w-4" /></Link2></li>
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><GitHub className="h-4 w-4" /> </Link2></li>
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><Youtube className="h-4 w-4" /></Link2></li>
                                    <li className="inline ms-1"><Link2 to="#" className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-700 hover:border-green-600 hover:text-white hover:bg-yellow-500"><Gitlab className="h-4 w-4" /></Link2></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Switcher />
            <Footer />

        </>
    );

}

