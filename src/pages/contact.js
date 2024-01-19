import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import ContactImage from "../assets/images/svg/contact.svg";
import Switcher from "../component/Switcher";
import { Hexagon } from "react-feather";
import { useMutation } from "react-query";
import { sendContact } from "../providers/contact";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Contact() {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();


    const mutation = useMutation({
        mutationFn: async ({ name, email, subject, message }) => {
            return sendContact(name, email, subject, message);
        },
        onSuccess: (data) => {
            console.log(data);
            reset();

            // redirect to success page
            navigate('/obrigado');
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    }

    return (
        <>
            <Navbar />
            {/* <!-- Google Map --> */}
            <div className="container-fluid relative mt-20">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe title="contact-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.185402588585!2d-46.32891742573805!3d-23.41766885632689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7cf3e73126db%3A0x17c8e156136c3853!2sYellow%20Im%C3%B3veis!5e0!3m2!1sen!2sbr!4v1691578354890!5m2!1sen!2sbr" style={{ border: '0' }} className="w-full h-[500px]" allowFullScreen></iframe>
                        {/* <iframe title="contact-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: '0' }} className="w-full h-[500px]" allowFullScreen></iframe> */}
                    </div>
                </div>
            </div>
            {/* <!-- Google Map --> */}

            {/* <!-- Start Section--> */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img src={ContactImage} alt="" />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">

                                    {mutation.isSuccess && (
                                        <div className="text-center mb-4">
                                            <div className="text-green-500">
                                                <i className="uil uil-check-circle text-5xl"></i>
                                                Contato enviado com sucesso!
                                            </div>
                                        </div>
                                    )}
                                    
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Entre em contato !</h3>

                                    {!mutation.isLoading && (
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className="mb-0" id="error-msg"></p>
                                            <div id="simple-msg"></div>
                                            <div className="grid lg:grid-cols-12 lg:gap-6">
                                                <div className="lg:col-span-6 mb-5">
                                                    <label htmlFor="name" className="font-medium">Nome:</label>
                                                    <input 
                                                        name="name" 
                                                        id="name" 
                                                        type="text" 
                                                        className="form-input mt-2" 
                                                        placeholder="Nome :"
                                                        {...register("name", { required: true })} 
                                                    />
                                                </div>

                                                <div className="lg:col-span-6 mb-5">
                                                    <label htmlFor="email" className="font-medium">Email:</label>
                                                    <input 
                                                        name="email" 
                                                        id="email" 
                                                        type="email" 
                                                        className="form-input mt-2" 
                                                        placeholder="Email :" 
                                                        {...register("email", { required: true })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1">
                                                <div className="mb-5">
                                                    <label htmlFor="subject" className="font-medium">Assunto:</label>
                                                    <input 
                                                        name="subject" 
                                                        id="subject" 
                                                        className="form-input mt-2" 
                                                        placeholder="Assunto :" 
                                                        {...register("subject", { required: true })}
                                                    />
                                                </div>

                                                <div className="mb-5">
                                                    <label htmlFor="message" className="font-medium">Mensagem:</label>
                                                    <textarea 
                                                        name="message" 
                                                        id="message" 
                                                        className="form-input mt-2 textarea" 
                                                        placeholder="Mensagem :"
                                                        {...register("message", { required: true })}
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <button 
                                                type="submit" 
                                                id="submit" 
                                                name="send" 
                                                className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
                                            >
                                                Enviar
                                            </button>
                                        </form>
                                    )}

                                    {mutation.isLoading && (
                                        <div className="text-center">
                                            <div className="spinner-border text-yellow-500" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            Enviando dados...
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="uil uil-phone"></i>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Telefone</h5>
                                <p className="text-slate-400 mt-3">
                                    Entre em contato conosco através dos telefones abaixo.
                                </p>

                                <div className="mt-5">
                                    <a href="tel:+551146543334" className="btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">(11) 4654-3334</a> <br />
                                    <a href="tel:+5511996800593" className="btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">(11) 99680-0593</a> <br />
                                    <a href="tel:+5511996800593" className="btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">(11) 95372-6237</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="uil uil-envelope"></i>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Email</h5>
                                <p className="text-slate-400 mt-3">
                                    Entre em contato conosco através dos emails abaixo.
                                </p>

                                <div className="mt-5">
                                    <a href="mailto:contato@yellowimoveis.com.br" className="btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">contato@yellowimoveis.com.br</a>
                                    <a href="mailto:sac@yellowimoveis.com.br" className="btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">sac@yellowimoveis.com.br</a>
                                    <a href="mailto:recepcao@yellowimoveis.com.br" className="btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">recepcao@yellowimoveis.com.br</a>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-6">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <i className="uil uil-map-marker"></i>
                                </div>
                            </div>

                            <div className="content mt-7">
                                <h5 className="title h5 text-xl font-medium">Localização</h5>
                                <p className="text-slate-400 mt-3">Estrada de Santa Isabel, 2320, Jardim Fazenda Rincão <br /> Arujá, SP</p>

                                <div className="mt-5">
                                    <a href="https://www.google.com/maps/place/Yellow+Im%C3%B3veis/@-23.4176738,-46.3289174,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce7cf3e73126db:0x17c8e156136c3853!8m2!3d-23.4176738!4d-46.3263425!16s%2Fg%2F11g8dkkkf3?entry=ttu"
                                        data-type="iframe" target="_blank" className="video-play-icon read-more lightbox btn btn-link text-yellow-500 hover:text-dark after:bg-yellow-500 transition duration-500">Ver no Google Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Section--> */}

            <Footer />
            <Switcher />
        </>
    );

}

