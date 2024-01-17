import React from "react";
import { Link as Link2 } from "react-router-dom";

import Navbar from "../component/Navbar";
import BackgroudImage from "../assets/images/bg/07.png";
import About from "../component/About";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";

import { useQuery } from "react-query";
import { getUsers } from "../providers/user";

export default function Aboutus() {

    const { isLoading, data, isError } = useQuery('membrosDoTime', async () => {
        const res = await getUsers();
        console.log("resultado", res);
        return { users: res };

    }, {});
    
    return (
        <>
            <Navbar navClass="navbar-white" />
            {/* <!-- Start Hero --> */}
            <section
                style={{ backgroundImage: `url(${BackgroudImage})` }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Sobre nós</h3>
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
            <section className="relative md:pb-24 pb-16">
                <About />
            </section>
            
            <section className="relative md:pb-24 pb-16">
                <div className="container mt-16 lg:mt-4">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Conheça nosso Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">A Yellow imóveis tem foco na excelencia, e pensando nisso temos os melhores profissionais do mercado.</p>
                    </div>

                    {isLoading && (
                        <div className="flex justify-center mt-8">
                            <div className="loader"></div>
                        </div>
                    )}
                    
                    {!isLoading && !isError && data?.users && data?.users?.length > 0 && (
                        <>
                            <div className="grid md:grid-cols-12 grid-cols-2 gap-[30px]">
                                {data?.users?.map((el, index) => (
                                    <div className="lg:col-span-2 md:col-span-4" key={index}>
                                        <div className="group text-center">
                                            <div className="relative inline-block mx-auto h-36 w-36 rounded-full overflow-hidden">
                                                {el.photo_url && (
                                                    <img src={el.photo_url} className="" alt="" />
                                                )}

                                                {!el.photo_url && (
                                                    <img src="https://via.placeholder.com/150" className="" alt="" />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
                                            </div>

                                            <div className="content mt-3">
                                                <Link2 to="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out">{el.name}</Link2>
                                                <p className="text-slate-400 text-xs">{el.role}</p>
                                                {el.creci && (
                                                    <p className="text-sm">{el.creci}</p>
                                                )}

                                                {!el.creci && (
                                                    <p className="text-sm">&nbsp;</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="container my-8">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Ainda tem dúvidas? Fale conosco!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Teremos o maior prazer em ajuda-lo na sua jornada de venda, compra ou locação de um imóvel.</p>

                        <div className="mt-6">
                            <Link2 to="/fale-conosco" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Fale conosco</Link2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    );

}
