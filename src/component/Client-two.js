import React from "react";
import TinySlider from "tiny-slider-react";

import 'tiny-slider/dist/tiny-slider.css';

import { useQuery } from "react-query";
import { getDepoiments } from "../providers/depoiment";

const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
};

export default function ClientTwo() {
    const { data, isLoading, isError, error } = useQuery("depoiments", getDepoiments, {
        retry: 2,
        // refetchOnWindowFocus: true,
        // refetchInterval: 60,
    });

    

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">O que dizem nossos clientes?</h3>

                    <p className="text-slate-700 max-w-xl mx-auto">Veja a opinião de alguns clientes que já experienciaram nossa forma de trabalho.</p>
                </div>

                {isLoading && (
                    <div className="flex justify-center mt-8">
                        <div className="loader"></div>
                    </div>
                )}

                {!isLoading && !isError && data && data.length > 0 && (
                    <div className="flex justify-center relative mt-8">
                        <div className="relative w-full">
                            <div className="tiny-three-item">
                                <TinySlider settings={settings} >
                                    {data.map((el, index) => (
                                        <div className="tiny-slide" key={index}>
                                            <div className="text-center mx-3">
                                                <p className="text-lg text-slate-700 italic"> " {el.description} " </p>

                                                <div className="text-center mt-5">
                                                    {/* <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                    </ul> */}

                                                    {el.avatar_url && (
                                                        <img src={el.avatar_url} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt="Avatar" />
                                                    )}
                                                    <h6 className="mt-2 fw-semibold">{el.name}</h6>
                                                    {/* <span className="text-slate-700 text-sm">{el.designation}</span> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TinySlider>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );

}


