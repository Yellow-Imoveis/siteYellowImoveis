import { Link as Link2 } from "react-router-dom";

import Navbar from "../component/Navbar";
import BackgroundImage from "../assets/images/bg/07.png";
import Client from "../component/Client";
import Property from "../component/Properties/property";
import Footer from "../component/Footer";
import SearchHome from "../component/SearchHome";
import HighlightCategories from "../component/HighlightCategories";
import Simulation from "../component/Simulation";
import SuperHighlight from "../component/SuperHighlight";

export default function Index() {

    return (
        <>
            <Navbar />
            {/* Hero Start  */}
            <section className="relative mt-24">
                <div className="container-fluid md:mx-4 mx-2">
                    <div style={{ backgroundImage: `url(${BackgroundImage})` }} className="relative pt-40 pb-52 table w-full rounded-2xl shadow-md overflow-hidden bg-[url('../../assets/images/bg/07.png')] bg-no-repeat bg-center bg-cover" id="home">
                        <div className="absolute inset-0 bg-black/30"></div>

                        <div className="container">
                            <div className="grid grid-cols-1">
                                <div className="ltr:md:text-left rtl:md:text-right text-center">
                                    <h2 className="text-white lg:leading-normal leading-normal text-4xl">
                                        A Yellow Imóveis tem a plataforma ideal <br />para vender e alugar imóveis sem burocracia.
                                    </h2>
                                    {/*<p className="text-white/70 text-xl max-w-xl">*/}

                                    {/*</p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero End */}

            <section className="relative md:pb-24 pb-16">
                <SearchHome />

                {/* Tipos/categorias de imoveis */}
                <div className="container pt-16">
                    <h4 className="mb-6 md:text-3xl text-2xl text-center lg:leading-normal leading-normal font-semibold">Escolha uma categoria</h4>
                    <HighlightCategories />
                </div>

                <Simulation />
                
                <SuperHighlight />

                <Property />
                
                <Client />

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Tem dúvidas ? Fale conosco!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">
                            Converse com nossa equipe de atendimento e tire todas as suas dúvidas.
                        </p>

                        <div className="mt-6">
                            <Link2 to="/contact" className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Fale conosco</Link2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* <Switcher /> */}
            {/* <!-- End --> */}
        </>
    );

}
