import { Link } from "react-router-dom";
import { useFavorite } from "../../contexts/FavoriteContext";
import styles from './styles.module.css';
import { useEffect, useState } from "react";

export default function CardProperty({ property }) {

    const [is_favorite, setIsFavorite] = useState(false);
    const { addFavorite, removeFavorite, isFavorite } = useFavorite();

    useEffect(() => {
        setIsFavorite(isFavorite(property.id));
    }, []);

    const handleFavorite = (e) => {
        e.preventDefault();
        setIsFavorite(true);
        addFavorite(property);
        document.querySelector('.tooltip').focus();
    }

    const handleRemoveFavorite = (e) => {
        e.preventDefault();
        setIsFavorite(false);
        removeFavorite(property.id);
    }

    return (
        <>
            <Link to={`/imovel/${property.slug}`}>
                <div className="group rounded-xl bg-white border border-gray-400 dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 h-[730px] overflow-x-hidden ease-in-out duration-500">
                    <div className="relative">
                        {property.crm_images && property.crm_images.length > 0 && (
                            <div style={{ overflow: 'hidden' }}>
                                <img
                                    src={property.crm_images[0].image}
                                    alt="Image de capa do Imóvel"
                                    className="rounded-t-xl w-full h-[250px] object-cover object-center transition ease-in-out duration-500 transform group-hover:scale-105"
                                />
                            </div>
                        )}

                        <div className="absolute top-4 end-4">
                            <div className="tooltip tooltip-left" data-tip={`${is_favorite ? 'Remover de favoritos' : 'Adicionar a favoritos'}`}>
                                <button
                                    onClick={is_favorite ? handleRemoveFavorite : handleFavorite}
                                    className={`${is_favorite ? styles.isFavorite : styles.isNotFavorite}`}
                                >
                                    <div className="flex justify-center items-center">
                                        <i className="mdi mdi-heart mdi-18px"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="pb-2">
                            <span className="hover:text-yellow-500 font-light text-sm ease-in-out duration-500"
                            >Cód.: {property.code}</span>
                        </div>

                        <div className="pb-6">
                            <span className="text-lg hover:text-yellow-500 font-medium ease-in-out duration-500">{property.title}</span>
                        </div>
                        
                        <div className="pb-2">
                            <span className="hover:text-yellow-500 font-light text-sm ease-in-out duration-500">
                                {property.city.name}
                                {property.neighborhood && (
                                    <span>&nbsp;- {property.neighborhood.name}</span>
                                )}
                            </span>
                        </div>
                        
                        <div className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center justify-center">
                            
                            {property.total_area > 0 && (
                                <div className="flex items-center text-xs me-2">
                                    <i className="uil uil-compress-arrows text-2xl me-1 text-yellow-500"></i>
                                    <span>{Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(property.total_area)} m<sup>2</sup></span>
                                </div>
                            )}
                            
                            {property.bedrooms > 0 && (
                                <div className="tooltip" data-tip={`${property.bedrooms} quartos`}>
                                    <div className="flex items-center text-xs me-2">
                                        <i className="uil uil-bed-double text-2xl me-1 text-yellow-500"></i>
                                        <span>{property.bedrooms}</span>
                                    </div>
                                </div>
                            )}
                            
                            {property.bathrooms > 0 && (
                                <div className="tooltip" data-tip={`${property.bathrooms} banheiros`}>
                                    <div className="flex items-center text-xs me-2">
                                        <i className="uil uil-bath text-2xl me-1 text-yellow-500"></i>
                                        <span>{property.bathrooms}</span>
                                    </div>
                                </div>
                            )}

                            {property.garages > 0 && (
                                <div className="tooltip tooltip-left" data-tip={`${property.garages} vagas de garagem`}>
                                    <div className="flex items-center text-xs me-2">
                                        <i className="uil uil-car-sideview text-2xl me-1 text-yellow-500"></i>
                                        <span>{property.garages}</span>
                                    </div>
                                </div>
                            )}                        
                        </div>

                        <ul className="pt-6list-none">
                            
                            {property.available_to_sell === 1 && (
                                <li className="my-4">
                                    <span className="text-slate-700">Venda</span>
                                    <p className="text-lg font-medium">
                                        {property.price && parseFloat(property.price) > 0 && (
                                            <>
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.price)}
                                            </>
                                        )}

                                        {(!property.price || parseFloat(property.price) === 0) && (
                                            'Sob consulta'
                                        )}
                                    </p>
                                </li>
                            )}
                            
                            {property.available_to_rent === 1 && (
                                <li className="my-4">
                                    <span className="text-slate-700">Locação</span>
                                    <p className="text-lg font-medium">
                                        {property.price_to_rent && parseFloat(property.price_to_rent) > 0 && (
                                            <>
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(property.price_to_rent)}
                                            </>
                                        )}

                                        {(!property.price_to_rent || parseFloat(property.price_to_rent) === 0) && (
                                            'Sob consulta'
                                        )}
                                    </p>
                                </li>
                            )}
                            

                            {/*<li>*/}
                            {/*    <span className="text-slate-700">Rating</span>*/}
                            {/*    <ul className="text-lg font-medium text-amber-400 list-none">*/}
                            {/*        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>*/}
                            {/*        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>*/}
                            {/*        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>*/}
                            {/*        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>*/}
                            {/*        <li className="inline ms-1"><i className="mdi mdi-star"></i></li>*/}
                            {/*        <li className="inline ms-1 text-black dark:text-white">{property.rating}(30)</li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </Link>
        </>
    );
}