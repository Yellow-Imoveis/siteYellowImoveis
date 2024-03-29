import React from "react";
import { Link as Link2 } from "react-router-dom";
import LogoLight from "../assets/images/logo-rodape.png";
import { MapPin, Mail, Phone, Dribbble, Linkedin, Facebook, Twitter, Instagram, ShoppingCart, Youtube } from 'react-feather';
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { sendSubscribe } from "../providers/contact";


export default function Footer() {

    const { register, reset, handleSubmit } = useForm();
    const mutation = useMutation({
        mutationFn: async ({ email }) => {
            return sendSubscribe(email);
        },
        onSuccess: (data) => {
            console.log(data);
            reset();
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const doSubmit = (data) => {
        mutation.mutate(data);
    }

    return (
        <>
            <footer className="relative bg-gray-950 mt-24">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="relative py-16">
                            {/* <!-- Subscribe --> */}
                            <div className="relative w-full">
                                <div className="relative -top-40 bg-white dark:bg-gray-950 lg:px-8 px-6 py-10 rounded-md shadow-lg dark:shadow-gray-700 overflow-hidden">
                                    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                        <div className="ltr:md:text-left rtl:md:text-right text-center z-1">
                                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Fique por dentro das novidades!</h3>
                                            <p className="text-slate-700 max-w-xl mx-auto">Inscreva-se para acompanhar as novidades.</p>
                                        </div>

                                        <div className="flex justify-center subcribe-form z-1">
                                            {mutation.isSuccess && (
                                                <div className="alert alert-success" role="alert">
                                                  Inscrição realizada com sucesso.
                                                </div>
                                            )}

                                            {mutation.isError && (
                                                <div className="alert alert-danger" role="alert">
                                                    {mutation.error.message}
                                                </div>
                                            )}

                                            {mutation.isLoading && (
                                                <div className="alert alert-info" role="alert">
                                                    Enviando...
                                                </div>
                                            )}
                                            <form onSubmit={handleSubmit(doSubmit)} className="flex flex-col gap-y-4 relative max-w-lg md:ms-auto">
                                                <input 
                                                    type="email" 
                                                    id="subcribe" 
                                                    name="email" 
                                                    className="px-8 md:pr-40 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" 
                                                    placeholder="Informe seu melhor e-mail :" 
                                                    {...register('email', { required: true, email: true })}
                                                />
                                                <button type="submit" className="btn bg-yellow-500 static md:absolute hover:bg-yellow-600 text-white rounded-md">Inscrever-se</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="absolute -top-5 -start-5">
                                        <div className="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
                                    </div>

                                    <div className="absolute -bottom-5 -end-5">
                                        <div className="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                                    <div className="flex flex-col items-center lg:col-span-4 md:col-span-12">
                                        <Link2 to="#" className="text-[22px] focus:outline-none">
                                            <img src={LogoLight} alt="" />
                                        </Link2>
                                        <p className="text-center mt-6 text-gray-300">Yellow Imóveis fazendo o futuro acontecer.</p>
                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">A Empresa</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link2 to="/sobre-nos" className="video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500"><i className="uil uil-angle-right-b me-1 video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500"></i> Sobre nós</Link2></li>
                                            {/* <li className="mt-[10px]"><Link2 to="/features" className="text-slate-300 hover:text-slate-700 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Serviços</Link2></li> */}
                                            {/* <li className="mt-[10px]"><Link2 to="/pricing" className="text-slate-300 hover:text-slate-700 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Pricing</Link2></li> */}
                                            {/* <li className="mt-[10px]"><Link2 to="/blog" className="text-slate-300 hover:text-slate-700 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Blog</Link2></li> */}
                                            {/* <li className="mt-[10px]"><Link2 to="/auth-login" className="text-slate-300 hover:text-slate-700 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Login</Link2></li> */}
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Links úteis</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {/* <li><Link2 to="/terms" className="text-slate-300 hover:text-slate-700 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Termos de seviços</Link2></li> */}
                                            {/* <li className="mt-[10px]"><Link2 to="/privacy" className="text-slate-300 hover:text-slate-700 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Política de Privacidade</Link2></li> */}
                                            <li className="mt-[10px]"><Link2 to="/favoritos"  className="video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500"><i className="uil uil-angle-right-b me-1 video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500"></i> Lista de imóveis</Link2></li>
                                            <li className="mt-[10px]"><Link2 to="/fale-conosco"  className="video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500"><i className="uil uil-angle-right-b me-1 video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500"></i> Fale conosco</Link2></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Detalhes de contato</h5>
                                        <div className="flex mt-6">
                                            <MapPin className="w-5 h-5 text-green-600 me-3"></MapPin>
                                            <div className="">
                                                <h6 className="text-gray-300 mb-2">Estr. de Santa Isabel, 2320 <br />Jardim Fazenda Rincao - Arujá - SP <br /></h6>
                                                <button 
                                                onClick={() => window.open("https://www.google.com/maps/place/Yellow+Im%C3%B3veis/@-23.4176738,-46.3289174,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7cf3e73126db:0x17c8e156136c3853!8m2!3d-23.4176738!4d-46.3263425!16s%2Fg%2F11g8dkkkf3?entry=ttu", "_blank")} 
                                                className="btn bg-yellow-500 hover:bg-yellow-600 border-yellow-500 dark:border-yellow-500 text-white rounded-md"
                                            >
                                                Ver no Google Maps
                                            </button>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <Mail className="w-5 h-5 text-green-600 me-3"></Mail>
                                            <div className="">
                                                <a href="mailto:contact@example.com" className="video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500">contato@yellowimoveis.com.br</a>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                                            <div className="">
                                                <a href="tel:+152534-468-854" className="video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500">+55 (11) 4654-3334</a><br />
                                                <a href="https://wa.me/5511996800593" className="video-play-icon read-more lightbox btn btn-link text-yellow-500  after:bg-yellow-500 transition duration-500" target="_blank" rel="noreferrer">+55 (11) 99680-0593</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- Subscribe --> */}
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <div className="ltr:md:text-left rtl:md:text-right text-center">
                                <p className="mb-0 text-gray-300">© <script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/d87d581f/www-widgetapi.vflset/www-widgetapi.js"></script><script id="iframe_api" src="https://www.youtube.com/iframe_api"></script>{(new Date().getFullYear())}{" "} Yellow Imóveis.</p>
                            </div>

                            <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                                {/* <li className="inline ms-1"><Link2 to="https://1.envato.market/hously-react" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><ShoppingCart className="h-4 w-4"></ShoppingCart></Link2></li> */}
                                {/* <li className="inline ms-1"><Link2 to="https://dribbble.com/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><Dribbble className="h-4 w-4"></Dribbble></Link2></li> */}
                                {/* <li className="inline ms-1"><Link2 to="https://www.behance.net/shreethemes" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><i className="uil uil-behance align-baseline"></i></Link2></li> */}
                                {/* <li className="inline ms-1"><Link2 to="http://linkedin.com/company/yellowimoveis" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover: dark:hover: hover:bg-yellow-500 dark:hover:bg-yellow-500"><Linkedin className="h-4 w-4"></Linkedin></Link2></li> */}
                                <li className="inline ms-1"><Link2 to="https://www.facebook.com/yellowimoveis.com.br" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover: dark:hover: hover:bg-yellow-500 dark:hover:bg-yellow-500"><Facebook className="h-4 w-4"></Facebook></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://www.instagram.com/yellowimoveis.oficial" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover: dark:hover: hover:bg-yellow-500 dark:hover:bg-yellow-500"><Instagram className="h-4 w-4"></Instagram></Link2></li>
                                <li className="inline ms-1"><Link2 to="https://www.youtube.com/@yellowimoveis8156/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover: dark:hover: hover:bg-yellow-500 dark:hover:bg-yellow-500"><Youtube className="h-4 w-4"></Youtube></Link2></li>
                              {/* <li className="inline ms-1"><Link2 to="https://twitter.com/yellowimoveis" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-yellow-500 dark:hover:bg-yellow-500"><Twitter className="h-4 w-4"></Twitter></Link2></li> */}
                                <li className="inline ms-1"><Link2 to="mailto:contato@yellowimoveis.com.br" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover: dark:hover: hover:bg-yellow-500 dark:hover:bg-yellow-500"><Mail className="h-4 w-4"></Mail></Link2></li>
                            </ul>
                        </div>
                    </div>
</div>
            </footer>
        </>
    );

}