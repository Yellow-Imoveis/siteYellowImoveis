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
                            <div className="lg:ms-4 about-content"> <h2>&nbsp;</h2>
                                <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Conhe&ccedil;a a Yellow&nbsp;Im&oacute;veis</h2>
                                <p>Nossa imobiliária conta com uma equipe multidisciplinar de profissionais tais como: Personal Broker, administração de imóveis, arquitetura ambiental, engenharia, construção, licenças e regularização de áreas/obras e assessoria jurídica oferecendo todo respaldo que você necessita para realizar o seu negócio. Atendemos empresas multinacionais e nacionais, expansão logística, lançamentos, condomínios, bairros, comércios, residenciais, locação/venda entre outros.&nbsp;</p>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-x-4">
                                    <div class="text-center col-span-1 sm:col-span-1 md:col-span-1"><img class="mx-auto" src="https://yellowimoveis.s3.amazonaws.com/site/yellow-pin.JPG" alt="Pin Yellow" width="100" height="100" />
                                        <h3 class="font-bold">Miss&atilde;o</h3>
                                        <p class="text-center">Oferecer solu&ccedil;&otilde;es imobili&aacute;rias inteligentes, que atendam as necessidades e expectativas dos nossos clientes, garantindo a satisfa&ccedil;&atilde;o e confian&ccedil;a nos nossos servi&ccedil;os.</p>
                                    </div>
                                    <div class="text-center col-span-1 sm:col-span-1 md:col-span-1"><img class="mx-auto" src="https://yellowimoveis.s3.amazonaws.com/site/yellow-pin.JPG" alt="Pin Yellow" width="100" height="100" />
                                        <h3 class="font-bold">Vis&atilde;o</h3>
                                        <p class="text-center">Ser reconhecida como uma empresa l&iacute;der em solu&ccedil;&otilde;es imobili&aacute;rias, pela sua efici&ecirc;ncia, qualidade e inova&ccedil;&atilde;o.</p>
                                    </div>
                                    <div class="text-center col-span-1 sm:col-span-1 md:col-span-1"><img class="mx-auto" src="https://yellowimoveis.s3.amazonaws.com/site/yellow-pin.JPG" alt="Pin Yellow" width="100" height="100" />
                                        <h3 class="font-bold">Valores</h3>
                                        <p class="text-center">Profissionalismo, Transpar&ecirc;ncia, Seriedade, Comprometimento, Responsabilidade Social e Trabalho em Team.</p>
                                    </div>
                                </div>
                                <h3>Por que Escolher a Yellow Im&oacute;veis?</h3>
                                <p><strong>Atendimento Personalizado:</strong> Entendemos que cada cliente &eacute; &uacute;nico. Trabalhamos de perto com voc&ecirc;, com atendimento humanizado, para entender suas metas e encontrar a propriedade perfeita que se alinha com seus objetivos.</p>
                                <p><strong>Transpar&ecirc;ncia e Integridade:</strong> Acreditamos na transpar&ecirc;ncia e na honestidade em todos os nossos neg&oacute;cios. Voc&ecirc; pode confiar que estamos comprometidos com os mais altos padr&otilde;es &eacute;ticos.</p>
                                <p><strong>Ampla Variedade de Op&ccedil;&otilde;es:</strong> Nosso portf&oacute;lio abrangente de im&oacute;veis em condom&iacute;nios horizontais, lançamentos, bairros, comércios, ind&uacute;strias, rurais, oferece a voc&ecirc; muitas oportunidades.</p>
                                <p><strong>Resultados Comprovados:</strong> Com um hist&oacute;rico comprovado de sucesso, ajudamos muitos clientes a encontrar o im&oacute;vel ideal e a alcan&ccedil;ar seus objetivos imobili&aacute;rios.</p>
                                <p>&nbsp;</p>
                                <p>Se voc&ecirc; est&aacute; em busca de um im&oacute;vel ideal, a Yellow Im&oacute;veis est&aacute; aqui para ajudar. Entre em contato conosco hoje mesmo e comece sua jornada para encontrar o local perfeito para sua resid&ecirc;ncia ou neg&oacute;cio.</p>
                                <p>&nbsp;</p>
                                <h4 style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <img
                                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                                        src="https://yellowimoveis.s3.amazonaws.com/site/yellow-pin.JPG"
                                        alt="Pin Yellow"
                                        width="100"
                                        height="100"
                                    />
                                    <span style={{ fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif', fontSize: '24pt' }}>
                                        Yellow Imóveis fazendo o futuro acontecer.
                                    </span>
                                </h4>
                                <p>&nbsp;</p>
                                <p style={{ textAlign: 'center' }}>Contate a Yellow Imóveis</p>
                                <p style={{ textAlign: 'center' }}>
                                    <a href="mailto:contato@yellowimoveis.com.br" target="_blank" rel="noopener">
                                        contato@yellowimoveis.com.br
                                    </a>
                                </p>
                                <p style={{ textAlign: 'center' }}>Tel: 11 4654-3334</p>
                                <p style={{ textAlign: 'center' }}>Whatsapp: 11 9 9680-0593</p>

                            </div>
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
