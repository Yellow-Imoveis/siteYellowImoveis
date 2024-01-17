// import properties from "./data";
import { getHighlightProperties } from "../../providers/property";
import { useQuery } from "react-query";
import CardProperty from "../CardProperty";
import TinySlider from "tiny-slider-react";
import { useEffect, useState } from "react";

const settings = {
    items: 4,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
};

export default function Property() {

    const [sliderSettings, setSliderSettings] = useState(settings);
    
    useEffect(() => {
        if (window.innerWidth < 768) {
            setSliderSettings({
                ...settings,
                items: 1,
            });
        }
    }, []);

    const {data: res, isLoading, isError, error} = useQuery("highlights", getHighlightProperties);
    
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Imóveis em destaque</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">
                        A Yellow Imóveis tem o imóvel que você procura, com o melhor preço e sem burocracia.
                    </p>
                </div>

                {isLoading && (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        <div className="animate-pulse group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <div className="relative">
                                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-[300px]"></div>
                            </div>
                        </div>
                        <div className="animate-pulse group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <div className="relative">
                                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-[300px]"></div>
                            </div>
                        </div>
                        <div className="animate-pulse group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                            <div className="relative">
                                <div className="animate-pulse bg-gray-300 dark:bg-gray-700 w-full h-[300px]"></div>
                            </div>
                        </div>
                    </div>
                )}

                {!isLoading && (
                    <>
                        <div className="tiny-single-item">
                            <TinySlider settings={sliderSettings} >
                                {res && res.map((item, index) => (
                                    <div className="tiny-slide" key={index}>
                                        <CardProperty property={item} />
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </>
                )}

                {isError && (
                    <div className="text-center text-red-500">
                        <p className="text-lg">Ooops! Houve um erro ao carregar os imoveis em detaque</p>
                        <p className="text-sm">{error}</p>
                    </div>
                )}
            </div>
        </>
    );

}

