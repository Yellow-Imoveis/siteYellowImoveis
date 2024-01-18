import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from './Form';

export default function SearchHome(props) {

    const navigate = useNavigate();

    const [activeTabIndex, setactiveTabIndex] = useState(0);

    const handleTabClick = (tabIndex) => {
        setactiveTabIndex(tabIndex);
    };

    const params = (data) => {
        console.log("Dados do formulario", data);
        const params = new URLSearchParams();
        if (data.keyword) {
            params.append('keyword', data.keyword);
        }
        if (data.category_id) {
            params.append('categoria', data.category_id);
        }
        if (data.min_price) {
            params.append('preco_minimo', data.min_price);
        }
        if (data.max_price) {
            params.append('preco_maximo', data.max_price);
        }
        if (data.local) {
            params.append('local', data.local.value);
        }
        if (data.bethrooms) {
            params.append('banheiros', data.bethrooms);
        }
        if (data.bedrooms) {
            params.append('dormitorios', data.bedrooms);
        }
        if (data.garage) {
            params.append('vagas', data.garage);
        }
        if (data.suites) {
            params.append('suites', data.suites);
        }
        if (data.area) {
            params.append('area', data.area);
        }

        return params.toString();
    }

    const handleSubmitForm = (data, option) => {
        if (window.location.pathname === '/imoveis' && props.handleFilter) {
            const queryString = `opcao=${option}&${params(data)}`;
            props.handleFilter(queryString);
            return;
        }
        navigate(`/imoveis?opcao=${option}&${params(data)}`);
    };


    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative -mt-32">
                        <div className="grid grid-cols-1">
                            <ul className="inline-block sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 rounded-t-xl border-b dark:border-gray-800" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button onClick={() => handleTabClick(0)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 0 ? 'text-white bg-yellow-500' : 'hover:text-yellow-500'}`} id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Comprar</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button onClick={() => handleTabClick(2)} className={`px-6 py-2 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${activeTabIndex === 2 ? 'text-white bg-yellow-500' : 'hover:text-yellow-500'}`} id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Alugar</button>
                                </li>
                            </ul>

                            <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-ss-none rounded-se-none md:rounded-se-xl rounded-xl shadow-md dark:shadow-gray-700">
                                {activeTabIndex === 0 && (
                                    <div id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                                        <SearchForm option="comprar" handleSubmitForm={handleSubmitForm} />
                                    </div>
                                )}
                                {activeTabIndex === 2 && (
                                    <div id="rent-home" role="tabpanel" aria-labelledby="rent-home-tab">
                                        <SearchForm option="alugar" handleSubmitForm={handleSubmitForm} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}