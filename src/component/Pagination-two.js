import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function PaginationTwo({ itemsPerPage, items, gridClass }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (event) => {
        const newPage = Number(event.target.value);
        setCurrentPage(newPage);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    const numPages = Math.ceil(items.length / itemsPerPage);

    const pageButtons = Array.from({ length: numPages }, (_, i) => i + 1).map(
        pageNum => (
            <button
                className='w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500'
                key={pageNum}
                value={pageNum}
                onClick={handlePageClick}
                disabled={currentPage === pageNum}
            >
                {pageNum}
            </button>
        )
    );

    return (
        <>
            <div className={gridClass}>
                {currentItems.map((item, index) => (
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
                                        <span className="text-slate-400">Price</span>
                                        <p className="text-lg font-medium">${item.price}</p>
                                    </li>

                                    <li>
                                        <span className="text-slate-400">Rating</span>
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
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav>
                        <ul className="inline-flex items-center -space-x-px">
                            <li><Link to="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><i className="uil uil-angle-left text-[20px]"></i></Link></li>
                            <li>
                                {pageButtons}
                            </li>
                            <li><Link to="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><i className="uil uil-angle-right text-[20px]"></i></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}
