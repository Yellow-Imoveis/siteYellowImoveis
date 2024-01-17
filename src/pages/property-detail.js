import React, { useState } from "react";
import { Link as Link2, useParams } from "react-router-dom";
import withRouter from "../component/withrouter";
import Navbar from "../component/Navbar";
import Switcher from "../component/Switcher";
import Footer from "../component/Footer";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { getProperty } from "../providers/property";
import { useQuery } from "react-query";
import Simulation from "../component/Simulation";
import FacebookTags from "../component/FacebookTags";

function PropertyDetail(props) {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [facebookTags, setFacebookTags] = useState([]);

  const { id } = useParams();

  const { data, isFetching } = useQuery(
    "properties",
    async () => {
      const property = await getProperty(id);
      const images = property.crm_images.map((el) => {
        return { src: el.image };
      });
      setImages(images);

      generateFacebookTags(property);

      return property;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const openSimulation = () => {
    const modal = document.getElementById("modalSimulacao");
    modal.showModal();
  };

  const generateFacebookTags = (property) => {
    const tags = [];
    tags.push({ property: "og:url", content: window.location.href });
    tags.push({ property: "og:type", content: "website" });
    tags.push({ property: "og:title", content: property?.title });
    tags.push({ property: "og:description", content: property?.description });
    tags.push({ property: "og:image", content: property?.crm_images[0].image });
    tags.push({ property: "og:image:width", content: "1200" });
    tags.push({ property: "og:image:height", content: "630" });
    tags.push({ property: "og:image:alt", content: property?.title });
    tags.push({ property: "og:site_name", content: "Yellow Imóveis" });

    setFacebookTags(tags);
  };

  return (
    <>
      {facebookTags && facebookTags.length > 0 && (
        <FacebookTags tags={facebookTags} title={data?.title} />
      )}

      <Navbar />

      {/* hero */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
          <div className="md:flex mt-4">
            {/* image 1 */}
            <div className="lg:w-1/2 md:w-1/2 p-1">
              <div className="group relative overflow-hidden">
                {data?.crm_images && data?.crm_images.length > 0 && (
                  <>
                    <Link2 to="#" onClick={() => handleCLick(1)}>
                      <img
                        src={data?.crm_images[0].image}
                        alt="Imagem Principal"
                        style={{
                          width: "100%",
                          height: "510px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                      <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                        <div className="btn btn-icon bg-yellow-500 hover:bg-yellow-600 text-white rounded-full lightbox">
                          <i className="uil uil-camera"></i>
                        </div>
                      </div>
                    </Link2>
                  </>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
              {/* images 2 and 3 */}
              <div className="flex">
                {data?.crm_images &&
                  data?.crm_images.length > 1 &&
                  data?.crm_images.slice(1, 3).map((el, index) => (
                    <div className="w-1/2 p-1" key={index}>
                      <div className="group relative overflow-hidden">
                        <Link2 to="#" onClick={() => handleCLick(1)}>
                          <img
                            src={el.image}
                            alt={`Imagem ${index}`}
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                          <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                            <div className="btn btn-icon bg-yellow-500 hover:bg-yellow-600 text-white rounded-full lightbox">
                              <i className="uil uil-camera"></i>
                            </div>
                          </div>
                        </Link2>
                      </div>
                    </div>
                  ))}
              </div>

              {/* images 4 and 5 */}
              <div className="flex">
                {data?.crm_images &&
                  data?.crm_images.length > 3 &&
                  data?.crm_images.slice(3, 5).map((el, index) => (
                    <div className="w-1/2 p-1" key={index}>
                      <div className="group relative overflow-hidden">
                        <Link2 to="#" onClick={() => handleCLick(1)}>
                          <img
                            src={el.image}
                            alt={`Imagem ${index}`}
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                          <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center invisible group-hover:visible">
                            <div className="btn btn-icon bg-yellow-500 hover:bg-yellow-600 text-white rounded-full lightbox">
                              <i className="uil uil-camera"></i>
                            </div>
                          </div>
                        </Link2>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* loading message */}
        {isFetching && (
          <div className="flex h-full w-full justify-center items-center">
            Carregando...
          </div>
        )}

        {/* main content  */}
        {data && !isFetching && (
          <div className="container md:mt-24 mt-16">
            <div className="md:flex">
              <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                <h4 className="text-2xl font-medium">{data?.title}</h4>
                <div className="pb-2">
                  <span className="font-light text-sm ease-in-out duration-500">
                    Código: {data?.code}
                  </span>
                </div>

                {/* <div className="pb-2">
                                    <span 
                                        className="font-light text-sm ease-in-out duration-500"
                                    >
                                        {data?.city && (
                                            <span>{data?.city.name}</span>
                                        )}
                                        {data?.neighborhood && (
                                            <span>&nbsp;- {data?.neighborhood.name}</span>
                                        )}
                                    </span>
                                </div> */}

                <ul className="py-6 flex items-center list-none">
                  <li className="flex items-center lg:me-6 me-4">
                    <i className="uil uil-compress-arrows lg:text-3xl text-2xl me-2 text-green-600"></i>
                    <span className="lg:text-xl">
                      {data?.total_area} m<sup>2</sup>
                    </span>
                  </li>

                  <li className="flex items-center lg:me-6 me-4">
                    <i className="uil uil-bed-double lg:text-3xl text-2xl me-2 text-green-600"></i>
                    <span className="lg:text-xl">{data?.bedrooms} quartos</span>
                  </li>

                  <li className="flex items-center lg:me-6 me-4">
                    <i className="uil uil-bath lg:text-3xl text-2xl me-2 text-green-600"></i>
                    <span className="lg:text-xl">
                      {data?.bathrooms} banheiros
                    </span>
                  </li>

                  <li className="flex items-center">
                    <i className="uil uil-car-sideview lg:text-3xl text-2xl me-2 text-green-600"></i>
                    <span className="lg:text-xl">
                      {data?.garages} vagas de garagem
                    </span>
                  </li>
                </ul>

                <div
                  className="text-slate-400"
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                ></div>

                {/* <div className="w-full leading-[0] border-0 mt-6">
                                    <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{ border: "0" }} className="w-full h-[500px]" allowFullScreen></iframe>
                                </div> */}
              </div>

              <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                <div className="sticky top-20">
                  <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-2xl font-medium">Preço:</h5>

                      {parseInt(data?.available_to_sell) === 1 &&
                        parseInt(data?.price) > 0 && (
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-medium">
                              {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(data?.price)}
                            </span>

                            <span className="bg-yellow-500/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                              Para venda
                            </span>
                          </div>
                        )}

                      {parseInt(data?.available_to_rent) === 1 &&
                        parseInt(data?.price_to_rent) > 0 && (
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-medium">
                              {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(data?.price_to_rent)}
                            </span>

                            <span className="bg-yellow-500/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                              Para locação
                            </span>
                          </div>
                        )}

                      {/* <ul className="list-none mt-4">
                                                <li className="flex justify-between items-center">
                                                    <span className="text-slate-400 text-sm">Days on Hously</span>
                                                    <span className="font-medium text-sm">124 Days</span>
                                                </li>

                                                <li className="flex justify-between items-center mt-2">
                                                    <span className="text-slate-400 text-sm">Preço por m<sup>2</sup></span>
                                                    <span className="font-medium text-sm">$ 186</span>
                                                </li>

                                                <li className="flex justify-between items-center mt-2">
                                                    <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                                    <span className="font-medium text-sm">$ 1497/Monthly</span>
                                                </li>
                                            </ul> */}
                    </div>

                    {/* <button type="button" onclick={`modalInteresse.show()`} className="btn bg-yellow-500 hover:bg-yellow-600 text-white rounded-md w-full">
                                            Tenho interesse
                                        </button> */}
                    <dialog id="modalInteresse" class="modal">
                      <div class="modal-box">
                        <form method="dialog">
                          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 class="font-bold text-lg">Hello!</h3>
                        <p class="py-4">
                          Press ESC key or click on ✕ button to close
                        </p>
                      </div>
                    </dialog>
                  </div>

                  <div className="mt-12 text-center">
                    <h3 className="text-xl leading-normal font-medium text-black dark:text-white">
                      Dúvidas ? Fale conosco!
                    </h3>

                    <div className="mt-2">
                      <Link2
                        to="/fale-conosco"
                        className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-phone align-middle me-2"></i> Fale
                        conosco
                      </Link2>
                    </div>
                  </div>

                  {parseInt(data?.available_to_sell) === 1 &&
                    parseInt(data?.price) > 0 && (
                      <div className="mt-12 text-center">
                        <h3 className="text-xl leading-normal font-medium text-black dark:text-white">
                          Simular financiamento:
                        </h3>

                        <div className="mt-2">
                          <button
                            onClick={openSimulation}
                            className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                          >
                            Simular financiamento
                          </button>

                          <dialog id="modalSimulacao" class="modal">
                            <div class="modal-box max-w-screen-xl p-0 m-0 bg-slate-50">
                              <form method="dialog">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>
                              <div>
                                <Simulation
                                  propertyInitialValue={data?.price}
                                  className="p-0 m-0"
                                />
                              </div>
                            </div>
                          </dialog>
                        </div>
                      </div>
                    )}

                  <div className="mt-12 text-center">
                    <h3 className="text-xl leading-normal font-medium text-black dark:text-white">
                      Compartilhe:
                    </h3>

                    <div className="mt-2 flex justify-center items-center space-x-4">
                      <Link2
                        to="#"
                        className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-facebook align-middle"></i>
                      </Link2>
                      <Link2
                        to="#"
                        className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-instagram align-middle"></i>
                      </Link2>
                      <a
                        href={`https://wa.me/5511996800593`}
                        rel="noreferrer"
                        target="_blank"
                        className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-whatsapp align-middle"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* images slide show */}
      {images && (
        <Lightbox
          open={isOpen}
          close={() => setOpen(false)}
          slides={images}
          plugins={[Thumbnails, Fullscreen]}
        />
      )}

      {/* site footer  */}
      <Footer />

      {/* arrow for scroll to top */}
      <Switcher />
    </>
  );
}

export default withRouter(PropertyDetail);
