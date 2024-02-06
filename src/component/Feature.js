import React from "react";
import { Hexagon } from "react-feather";
import YellowPin from "../assets/images/yellow-pin.JPG";
import { useQuery } from "react-query";
import { getSetting } from "../providers/setting";
import DOMPurify from "dompurify";

export default function Feature() {

    const { data, isLoading, isError } = useQuery('missaoVisaoValores', async () => {
        const res = await Promise.all([
            getSetting('missao'),
            getSetting('visao'),
            getSetting('valores')
        ]);

        return {
            missao: res[0].value,
            visao: res[1].value,
            valores: res[2].value,
        };
    });

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Missão, Visão e Valores</h3>

                    <p className="text-slate-700 max-w-xl mx-auto">
                        A Yellow Imóveis é a imobiliária ideal, par você comprar, vender e alugar seus imóveis sem burocracia.
                    </p>
                </div>

                {isLoading && (
                    <>
                        <div className="flex justify-center mt-8">
                            <div className="loader"></div>
                        </div>
                    </>
                )}

                {!isLoading && !isError && data?.missao && data?.visao && data?.valores && (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <img src={YellowPin} alt="Pin" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
                                </div>
                            </div>

                            <div className="mt-6">
                                <h5 className="text-xl font-medium">Missão</h5>
                                <div className="text-slate-700 mt-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.missao) }}></div>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <img src={YellowPin} alt="Pin" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="mt-6">
                                <h5 className="text-xl font-medium">Visão</h5>
                                <div className="text-slate-700 mt-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.visao) }}></div>
                            </div>
                        </div>

                        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <img src={YellowPin} alt="Pin" style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
                                </div>
                            </div>

                            <div className="mt-6">
                                <h5 className="text-xl font-medium">Valores</h5>
                                <div className="text-slate-700 mt-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.valores) }}></div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </>
    );
}
