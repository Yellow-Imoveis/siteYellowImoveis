import React, { useState, useMemo, useEffect } from "react";
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
import PropertyDetailHero from "../component/PropertyDetailHero";

/**
 * @param {Object} props
 * @param {string} props.id
 */
function usePropertyQuery({ id }) {
  const useQueryReturn = useQuery({
    queryKey: ["properties", id],
    queryFn: () => getProperty(id),
  });

  return useQueryReturn;
}

function PropertyDetail(props) {
  const { id } = useParams();
  const { data: propertyData, isLoading } = usePropertyQuery({ id });

/**
   * Array of images for the lightbox and hero
   * @type {Array<{ src: string, position: number }>}
   */
  const crmImageList = useMemo(() => {
    if (!propertyData) return [];

/**
     * @type {Array<{ src: string, position: number }>}
     */
    propertyData.crm_images = propertyData.crm_images.filter((image) => image.active === 1);
    const images = propertyData.crm_images.map((el) => ({
      src: el.image,
      position: el.position,
    }));

    return images.sort((a, b) => a.position - b.position);
  }, [propertyData]);

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isActivePhoto, setActivePhoto] = useState(false);
  const [facebookTags, setFacebookTags] = useState([]);
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);

  useEffect(() => {
    if (!window.FB) {
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: "1033823097706771", 
          cookie: true,
          xfbml: true,
          version: "v13.0",
        });
        setIsSdkLoaded(true);
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    } else {
      setIsSdkLoaded(true);
    }
  }, []);

  const handlePhotoClick = (index) => {
    setActivePhotoIndex(index);
    setActivePhoto(true);
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

  useEffect(() => {
    if (propertyData) {
      
      generateFacebookTags(propertyData);
    }
  }, [propertyData]);

  const urlImovel = window.location.href
  const compartilharNoMessenger = () => {
    if (window.FB) {
      window.FB.ui({
        method: 'share',
        href: urlImovel,
      });
    }
  };

  return (
    <>
      {facebookTags && facebookTags.length > 0 && (
        <FacebookTags tags={facebookTags} title={propertyData?.title} />
      )}

      <Navbar />

{/* hero */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <PropertyDetailHero
          images={crmImageList}
          onClick={(index) => handlePhotoClick(index)}
        />

{/* loading message */}
        {isLoading && (
          <div className="flex h-full w-full justify-center items-center">
            Carregando...
          </div>
        )}

{/* main content  */}
        {propertyData && !isLoading && (
          <div className="container md:mt-24 mt-16">
            <div className="md:flex">
              <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                <h4 className="text-2xl font-medium">{propertyData?.title}</h4>
                <div className="pb-2">
                  <span className="font-light text-sm ease-in-out duration-500">
                    Código: {propertyData?.code}
                  </span>
                </div>

                <ul className="py-6 px-2 flex flex-wrap items-center place-content-around list-none bg-slate-100 shadow-[2px_3px_2px_rgba(0,0,0,0.24)] rounded-lg gap-y-6">
                  <li className="flex items-center lg:me-6 me-4">
                    <i className="uil uil-compress-arrows bg-yellow-500 p-1 rounded-lg flex items-center text-black lg:text-3xl text-2xl me-2"></i>
                    <span className="lg:text-xl">
                      {propertyData?.total_area} m<sup>2</sup>
                    </span>
                  </li>

                  <li className="flex items-center lg:me-6 me-4">
                    <i className="uil uil-bed-double bg-yellow-500 p-1 rounded-lg flex items-center text-black lg:text-3xl text-2xl me-2"></i>
                    <span className="lg:text-xl">
                      {propertyData?.bedrooms} quartos
                    </span>
                  </li>

                  <li className="flex items-center lg:me-6 me-4">
                    <i className="uil uil-bath bg-yellow-500 p-1 rounded-lg flex items-center text-black lg:text-3xl text-2xl me-2"></i>
                    <span className="lg:text-xl">
                      {propertyData?.bathrooms} banheiros
                    </span>
                  </li>

                  <li className="flex items-center">
                    <i className="uil uil-car-sideview bg-yellow-500 p-1 rounded-lg flex items-center text-black lg:text-3xl text-2xl me-2"></i>
                    <span className="lg:text-xl">
                      {propertyData?.garages} vagas de garagem
                    </span>
                  </li>
                </ul>

                <div
                  className="text-slate-700"
                  dangerouslySetInnerHTML={{
                    __html: propertyData?.description,
                  }}
                ></div>
              </div>

              <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                <div className="sticky top-20">
                  <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                    <div className="p-6">
                      <h5 className="text-2xl font-medium">Preço:</h5>

                      {parseInt(propertyData?.available_to_sell) === 1 &&
                        parseInt(propertyData?.price) > 0 && (
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-lg font-medium">
                              {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(propertyData?.price)}
                            </span>

                            <span className="bg-yellow-500/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                              Para venda
                            </span>
                          </div>
                        )}

                      {parseInt(propertyData?.available_to_rent) === 1 &&
                        parseInt(propertyData?.price_to_rent) > 0 && (
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-medium">
                              {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(propertyData?.price_to_rent)}
                            </span>

                            <span className="bg-yellow-500/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">
                              Para locação
                            </span>
                          </div>
                        )}

                      {/* <ul className="list-none mt-4">
                                                <li className="flex justify-between items-center">
                                                    <span className="text-slate-700 text-sm">Days on Hously</span>
                                                    <span className="font-medium text-sm">124 Days</span>
                                                </li>

                                                <li className="flex justify-between items-center mt-2">
                                                    <span className="text-slate-700 text-sm">Preço por m<sup>2</sup></span>
                                                    <span className="font-medium text-sm">$ 186</span>
                                                </li>

                                                <li className="flex justify-between items-center mt-2">
                                                    <span className="text-slate-700 text-sm">Monthly Payment (estimate)</span>
                                                    <span className="font-medium text-sm">$ 1497/Monthly</span>
                                                </li>
                                            </ul> */}
                    </div>
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

                  {parseInt(propertyData?.available_to_sell) === 1 &&
                    parseInt(propertyData?.price) > 0 && (
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
                                  propertyInitialValue={propertyData?.price}
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

                    <div className="mt-2 flex flex-wrap justify-center items-center gap-4">
                      <button
                        onClick={compartilharNoMessenger}
                        className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-facebook align-middle"></i>
                      </button>
                      <a
                        href={`https://api.whatsapp.com/send?text=${window.location.href}`}
                        rel="noreferrer"
                        target="_blank"
                        className="btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-whatsapp align-middle"></i>
                      </a>
                      <a
                        href={`https://twitter.com/messages/compose?text=${window.location.href}`}
                        rel="noreferrer"
                        target="_blank"
                        className="twitter-dm-button btn bg-transparent hover:bg-yellow-500 border border-green-600 text-green-600 hover:text-white rounded-md"
                      >
                        <i className="uil uil-twitter align-middle"></i>
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
      {crmImageList && (
        <Lightbox
          open={isActivePhoto}
          close={() => setActivePhoto(false)}
          slides={crmImageList}
          index={activePhotoIndex}
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
