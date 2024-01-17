import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import ContactImage from "../assets/images/svg/contact.svg";
import Switcher from "../component/Switcher";
import { Hexagon } from "react-feather";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { storeDepoiment } from "../providers/depoiment";

export default function Depoiment() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const mutation = useMutation({
        mutationFn: async ({ name, email, phone, description }) => {
            return await storeDepoiment(name, email, phone, description);
        },
        onSuccess: (data) => {
            console.log(data);
            reset();
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
            
            {/* <!-- Start Section--> */}
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">

                        <div className="lg:col-span-12 md:col-span-12">
                            <div className="lg:me-5">
                                <div className="p-6">

                                    {mutation.isSuccess && (
                                        <div className="text-center mb-4">
                                            <div className="text-green-500">
                                                <i className="uil uil-check-circle text-5xl"></i>
                                                Depoimento enviado com sucesso!
                                            </div>
                                        </div>
                                    )}
                                    
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Deixe seu depoimento</h3>

                                    {!mutation.isLoading && (
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <p className="mb-0" id="error-msg"></p>
                                            <div id="simple-msg"></div>
                                            <div className="grid lg:grid-cols-12 lg:gap-6">
                                                <div className="lg:col-span-4 mb-5">
                                                    <label htmlFor="name" className="font-medium">Nome:</label>
                                                    <input 
                                                        name="name" 
                                                        id="name" 
                                                        type="text" 
                                                        className="form-input mt-2" 
                                                        placeholder="Nome :"
                                                        {...register("name", { required: "O nome é obrigatório" })} 
                                                    />
                                                    {errors?.name && <span className="text-red-500 italic text-sm">{errors.name.message}</span>}
                                                </div>

                                                <div className="lg:col-span-4 mb-5">
                                                    <label htmlFor="email" className="font-medium">Email:</label>
                                                    <input 
                                                        name="email" 
                                                        id="email" 
                                                        type="email" 
                                                        className="form-input mt-2" 
                                                        placeholder="Email :" 
                                                        {...register("email", { required: 'O email é obrigatório', email: 'Por favor, informe um email válido' })}
                                                    />
                                                    {errors?.email && <span className="text-red-500 italic text-sm">{errors.email.message}</span>}
                                                </div>

                                                <div className="mb-5 lg:col-span-4">
                                                    <label htmlFor="phone" className="font-medium">Telefone de contato:</label>
                                                    <input 
                                                        name="phone" 
                                                        id="phone" 
                                                        className="form-input mt-2" 
                                                        placeholder="Telefone :" 
                                                        {...register("phone", { required: 'O telefone é obrigatório' })}
                                                    />
                                                    {errors?.phone && <span className="text-red-500 italic text-sm">{errors.phone.message}</span>}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1">
                                                

                                                <div className="mb-5">
                                                    <label htmlFor="description" className="font-medium">Seu depoimento:</label>
                                                    <textarea 
                                                        name="description" 
                                                        id="description" 
                                                        className="form-input mt-2 textarea" 
                                                        placeholder="Depoimento :"
                                                        {...register("description", { required: "O depoimento é obrigatório" })}
                                                    ></textarea>
                                                    {errors?.description && <span className="text-red-500 italic text-sm">{errors.description.message}</span>}
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
            </section>
            {/* <!-- End Section--> */}

            <Footer />
            <Switcher />
        </>
    );

}

