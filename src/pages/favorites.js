import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import Switcher from "../component/Switcher";
import SearchHome from "../component/SearchHome";
import CardProperty from "../component/CardProperty";
import ReactPaginate from "react-paginate";
import { useFavorite } from "../contexts/FavoriteContext";


export default function Favorites() {

    const { favoriteItems } = useFavorite();

    return (
        <>
            <Navbar />

            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/bg/07.png')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white/70">Imóveis favoritos</h3>
                    </div>
                </div>
            </section>

            {/* <SearchHome /> */}

            {favoriteItems && favoriteItems.length > 0 && (
                <>
                    {/* <Search /> */}
                    <section className="lg:py-24 py-16">
                        <div className="px-12 md:container">
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                                {favoriteItems.map((item, index) => (
                                    <CardProperty key={index} property={item} />
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {favoriteItems && favoriteItems.length === 0 && (
                <section className="relative lg:py-24 py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Você ainda não tem imóveis favoritos</h3>
                        </div>
                    </div>
                </section>
            )}

            {/* <!-- End --> */}
            <Footer />
            <Switcher />
        </>
    );

}