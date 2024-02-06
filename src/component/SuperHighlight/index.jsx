import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";

import { useQuery } from "react-query";
import { getSuperHighlight } from "../../providers/property";
import Loading from "../Loading";

export default function About() {
    const [videoId, setVideoId] = useState(null);
    const [isOpen, setOpen] = useState(false);

    const { data, isLoading } = useQuery('super-highlight', async () => {
        const result = await getSuperHighlight();
  
        if (result?.youtube_video) {
            setVideoId(result.youtube_video.split('v=')[1]);
        }
  
        return result;
    });

    const customContainerStyle = {
        background: '#eeee',
        padding: '3%',
        borderRadius: '1%',
        border: '1px solid #ccc',
        boxShadow: 'rgb(0 0 0 / 11%) 2px 2px 5px',
        width: '100%', 
        maxWidth: '90%', 
        margin: '0 auto', 
    };

    const videoContainerStyle = {
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%', 
        marginBottom: '20px', 
    };

    const videoFrameStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    };

    const saibaMaisButtonStyle = {
        padding: '10px 20px',
        textDecoration: 'none',
    };

    return (
        <>
            {isLoading && (
                <div className="container lg:mt-24 mt-16">
                    <Loading />
                </div>
            )}

            {!isLoading && data && (
                <div className="container lg:mt-24 mt-16" style={customContainerStyle}>
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-7">
                            <div className="relative rounded-xl shadow-md overflow-hidden" style={videoContainerStyle}>
                                <iframe 
                                    src={`https://www.youtube.com/embed/${videoId}?rel=0&amp;autoplay=0&mute=1&controls=1&loop=1`} 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                    style={videoFrameStyle}
                                ></iframe>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Link2 to="#" onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link2>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="lg:ms-4">
                                <h4 className="mb-6 md:text-2xl text-2xl lg:leading-normal leading-normal font-semibold">{data.title}</h4>
                                <p className="text-slate-700 max-w-xl" dangerouslySetInnerHTML={{__html: data.short_description}}></p>

                                <div className="mt-4">
                                    <Link2 to={`/imovel/${data.id}-${data.slug}`} className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md mt-3" style={saibaMaisButtonStyle}>Saiba mais</Link2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ModalVideo
                isOpen={isOpen}
                channel="youtube"
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
