import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";

import "../../node_modules/react-modal-video/scss/modal-video.scss";
import { useQuery } from "react-query";
import { getSetting } from "../providers/setting";
import DOMPurify from "dompurify";

export default function About() {
    const [isOpen, setOpen] = useState(false)

    const { isLoading, data, isError } = useQuery('dadosDaEmpresa', async () => {
        const res = await getSetting('sobre-nos');
        console.log("resultado", res);

        return { setting: res };

    }, {})

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                {isLoading && (
                    <>
                        <div className="flex justify-center mt-8">
                            <div className="loader"></div> Carregando...
                        </div>
                    </>
                )}

                {!isLoading && !isError && data?.setting && (
                    <div className="grid md:grid-cols-12 grid-cols-1 items-start gap-[30px]">
                        <div className="md:col-span-12">
                            <div className="flex justify-center items-center mb-16">
                                
                                <div className="relative">
                                    <img src="https://i.ytimg.com/vi/oz6mCiWYfnk/hqdefault.jpg" alt="Vídeo institucional" />

                                    {/* put a play button in the middle */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <button onClick={() => setOpen(true)} className="bg-red-600 border-2 border-red-600 rounded-lg h-16 w-24 flex items-center justify-center">
                                            <i className="mdi mdi-play text-white text-4xl"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="hidden md:block">
                                    <video width="890" height="440" controls autoPlay={false} className="mb-8">
                                        <source src="https://yellowimoveis.s3.amazonaws.com/videos/yellow-video-sobre-nos.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                
                                <div className="block md:hidden">
                                    <video width="100%" height="440" controls autoPlay={false} className="mb-8">
                                        <source src="https://yellowimoveis.s3.amazonaws.com/videos/yellow-video-sobre-nos.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div> */}
                                
                                {/* <Link2 to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="yba7hPeTSjk"
                                    className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-4xl"></i>
                                </Link2>
                                
                                <div className="my-3">Veja o vídeo acima</div> */}
                            </div>
                            <div className="lg:ms-4 about-content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data?.setting?.value ) }}></div>
                        </div>
                    </div>
                )}
            </div>
            {/* <ModalVideo
                isOpen={isOpen}
                channel="custom"
                url="https://yellowimoveis.s3.amazonaws.com/videos/yellow-video-sobre-nos.mp4"
                onClose={() => setOpen(false)}
            /> */}
            <ModalVideo
                isOpen={isOpen}
                channel="youtube"
                videoId="oz6mCiWYfnk"
                onClose={() => setOpen(false)}
                width={1200}
            />
        </>
    );

}
