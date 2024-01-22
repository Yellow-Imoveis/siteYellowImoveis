import React from "react";
import TinySlider from "tiny-slider-react";

import 'tiny-slider/dist/tiny-slider.css';

import { useQuery } from "react-query";
import { getDepoiments } from "../providers/depoiment";
import { data } from "autoprefixer";

const settings = {
    items: 1,
    controlsText: ['<', '>'],
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 10000,
    navPosition: "bottom",
    animateDelay: 3000,
};

export default function Client() {

    const { data, isLoading, isError, error } = useQuery("depoiments", getDepoiments, {
        retry: 2,
        // refetchOnWindowFocus: true,
        // refetchInterval: 60,
    });

    if (isError) {
        return <div>Erro ao carregar os depoiments: {error.message}</div>;
    }

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">O que dizem nossos clientes ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">
                        Veja o que nossos clientes estão dizendo sobre nós.
                    </p>
                </div>

                <div className="flex justify-center relative mt-16">
                    <div className="relative lg:w-1/3 md:w-1/2 w-full">
                        <div className="absolute -top-20 md:-start-24 -start-0">
                            <i className="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                        </div>

                        <div className="absolute bottom-28 md:-end-24 -end-0">
                            <i className="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                        </div>

                        {isLoading && (
                            <>
                                <div className="animate-pulse group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                    <div className="relative">
                                        <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-[300px]"></div>
                                    </div>
                                </div>
                            </>
                        )}

                        {!isLoading && (
                            <div className="tiny-single-item">
                                <TinySlider settings={settings} >
                                    {data && data.map((el, index) => (
                                        <div className="tiny-slide" key={index}>
                                            <div className="text-center">
                                                <p className="text-xl text-slate-400 italic"> " {el.description} " </p>

                                                <div className="text-center mt-5">
                                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    </ul>

                                                    {el.avatar_url && (
                                                        <img src={el.avatar_url} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="Avatar" />
                                                    )}
                                                    <h6 className="mt-2 fw-semibold">{el.name}</h6>
                                                    {/* <span className="text-slate-400 text-sm">{el.designation}</span> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TinySlider>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    );

}
