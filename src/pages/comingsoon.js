import React, { useState, useEffect } from "react";
import { Link as Link2 } from "react-router-dom";
import LogoLight from "../assets/images/logo-icon-64.png";
import BackgroundImage from "../assets/images/bg/01.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Switcher from "../component/Switcher";

export default function Comingsoon() {

    const particlesInit = async (main) => {
        console.log(main);
        // initialize the tsParticles instance
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light')


        const interval = setInterval(() => {
            let startDate = new Date('June 25, 2023 16:37:52');
            let currentDate = new Date();
            const diff = startDate.getTime() - currentDate.getTime();

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            setTime({ hours, minutes, seconds, days });
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);


    return (
        <>

            <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"
                    options={{
                        "particles": {
                            "number": {
                                "value": 250,
                                "density": {
                                    "enable": false,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 36
                                },
                                "image": {
                                    "src": "",
                                    "width": 1000,
                                    "height": 1000
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 0.5,
                                    "opacity_min": 1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3.2,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 20,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "distance": 100,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 2
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "bottom",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 800,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 200,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 71,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                />
                <div className="container-fluid relative z-3">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                            <div className="text-center">
                                <Link2 to="/"><img src={LogoLight} className="mx-auto" alt="" /></Link2>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                                <p className="text-white/70 text-lg max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                                <div id="countdown">
                                    <ul className="count-down list-none inline-block text-white text-center mt-8 m-6">
                                        <li id="days" className="count-number inline-block m-2">{time.days}
                                            <p className="count-head">Days</p>
                                        </li>
                                        <li id="hours" className="count-number inline-block m-2"> {time.hours}
                                            <p className="count-head">Hours</p>
                                        </li>
                                        <li id="mins" className="count-number inline-block m-2">{time.minutes}
                                            <p className="count-head">Mins</p>
                                        </li>
                                        <li id="secs" className="count-number inline-block m-2">{time.seconds}
                                            <p className="count-head">Secs</p>
                                        </li>
                                        <li id="end" className="h1"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-slate-400">© {(new Date().getFullYear())}{" "} Hously. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link2 to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link2>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end section --> */}
            <Switcher />
        </>
    );

}
