import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

import Switcher from "../../../component/Switcher";
import { getProperties } from "../../../providers/property";

import {useQuery, useQueryClient} from "react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchHome from "../../../component/SearchHome";
import { useEffect, useMemo, useState } from "react";
import CardProperty from "../../../component/CardProperty";
import ReactPaginate from "react-paginate";
import Loading from "../../../component/Loading";

const useQueryParams = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Grid() {
    const queryClient = useQueryClient()
    const [page, setPage] = useState(1);
    const [params, setParams] = useState(useQueryParams().toString());
    const navigate = useNavigate();

    const { data: res, isLoading, isError, error, isFetching, isPreviousData } = useQuery({
        queryKey: ['properties', params],
        queryFn: () => getProperties(params),
        keepPreviousData: true,
        staleTime: 5000,
    }, { cacheTime: 0 })

    useEffect(() => {
        if (!isPreviousData && res?.hasMore) {
            queryClient.prefetchQuery({
                queryKey: ['projects', params],
                queryFn: () => getProperties(params),
            })
        }
    }, [res, isPreviousData, page, params, queryClient])

    const handlePageClick = (event => {
        const selectedPage = event.selected + 1;
        setPage(selectedPage);
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('page', selectedPage);
        setParams(queryParams.toString());

        window.scrollTo({ top: 400 });
        navigate(`/imoveis?${queryParams.toString()}`);
    });

    const handleFilter = (data) => {
        setParams(data);
        navigate(`/imoveis?${data}`);
    }

    if (isError) {
        return <div>Erro ao carregar os imóveis: {error.message}</div>;
    }

    return (
        <>
            <Navbar />

            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/07.png')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Imóveis</h3>
                    </div>
                </div>
            </section>

            <SearchHome handleFilter={handleFilter} />

            {!isLoading && res.data && res.data.length === 0 && (
                <section className="relative lg:py-24 py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Nenhum imóvel encontrado</h3>
                        </div>
                    </div>
                </section>
            )}

            {!isLoading && res.data && res.data.length > 0 && (
                <>
                    {/* <Search /> */}
                    <section className="relative lg:py-24 py-16">
                        <div className="container">
                            
                            <div className="grid gap-y-6 md:grid-cols-3 grid-cols-1 md:gap-4">
                                {res?.data && res?.data.map((item, index) => (
                                    <CardProperty key={index} property={item} />
                                ))}
                            </div>
                            {/*<Pagination pages={res?.last_page} currentPage={res?.current_page} />*/}
                            <ReactPaginate
                                pageCount={res?.last_page}
                                breakLabel={"..."}
                                nextLabel={"Próximo >"}
                                previousLabel={"< Anterior"}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                renderOnZeroPageCount={null}
                                containerClassName={"pagination"}
                                activeClassName={"active"}
                                pageClassName={"page-item"}
                                nextClassName={"next-page"}
                                previousClassName={"prev-page"}
                                current_page={res?.current_page}
                            />

                            
                        </div>
                    </section>
                </>
            )}

            {isLoading && (
                <Loading />
            )}
            {/* <!-- End --> */}
            <Footer />
            <Switcher />
        </>
    );

}