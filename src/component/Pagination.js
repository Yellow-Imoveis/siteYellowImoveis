import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Pagination({ pages, currentPage }) {
    const pageButtons = Array.from({ length: pages }, (_, i) => i + 1).map(
        pageNum => (
            <li>
                <Link 
                    to="#" 
                    className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-700 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"
                >
                    {pageNum}
                </Link>
            </li>
        )
    );

    return (
        <>
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav>
                        <ul className="inline-flex items-center -space-x-px">
                            <li><Link to="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-700 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><i className="uil uil-angle-left text-[20px]"></i></Link></li>
                            {pageButtons}
                            <li><Link to="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-700 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><i className="uil uil-angle-right text-[20px]"></i></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );

}

