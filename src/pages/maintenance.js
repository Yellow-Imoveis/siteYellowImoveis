import React, { useState, useEffect } from "react";
import LogoLight from "../assets/images/logo-icon-64.png";
import BackgroundImage from "../assets/images/bg/01.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Switcher from "../component/Switcher";

export default function Maintenance() {
    const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const particlesInit = async (main) => {
        console.log(main);
        // initialize the tsParticles instance
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
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
                <div className="container relative z-3 text-center">

                    <div className="grid grid-cols-1">
                        <img src={LogoLight} className="mx-auto" alt="" />
                        <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                    </div>
                    <div className="grid grid-cols-1 mt-10">
                        <div className="text-center">
                            <span id="maintenance" className="timer text-white text-[56px] tracking-[1px]">{minutes}:{remainingSeconds}</span>
                            <span className="block text-base font-semibold uppercase text-white">Minutes</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mt-8">
                        <div className="text-center subcribe-form">
                            <form className="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border dark:border-gray-700" placeholder="Enter your email id.." />
                                <button type="submit" className="btn absolute top-[2px] end-[3px] h-[46px] bg-yellow-500 hover:bg-yellow-600 border-green-600 hover:border-green-700 text-white rounded-full">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end section --> */}
            <Switcher />
        </>
    );

}