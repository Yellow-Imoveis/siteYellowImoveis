import { useQuery } from "react-query";
import { highlightCategories } from "../../providers/category";
import { useState } from "react";
import HighlightCategoryItem from "../HighlightCategoryItem";
import ModalSubcategories from "../ModalSubcategories";

export default function HighlightCategories() {
    const [categoryWidth, setCategoryWidth] = useState(200);
    const [category, setCategory] = useState(null);
    const [option, setOption] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const {data, isLoading, isError} = useQuery('highlightCategories', async() => {
        const categories = await highlightCategories();
        setCategoryWidth(Math.ceil(100 / categories.length));
        return categories;
    }, {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });

    const handleOpenModal = (category, option) => {
        console.log(category, option)
        setCategory(category)
        setOption(option)
        setModalIsOpen(true)
        document.getElementById('modalSubcategories').showModal()
    }
    const handleCloseModal = () => {
        setModalIsOpen(false)
        document.getElementById('modalSubcategories').close()
    }

    return (
        <>
            {isLoading && <p className="text-center">Carregando...</p>}

            {isError && <p className="text-center">Ocorreu um erro ao carregar os dados.</p>}

            {!isLoading && !isError && (
                <>
                    <div className="flex flex-wrap md:flex-nowrap justify-center items-center space-x-2 md:space-x-4">
                        {data.map((item, index) => (
                            <HighlightCategoryItem 
                                key={index} 
                                category={item} 
                                width={categoryWidth} 
                                openModal={handleOpenModal} 
                            />
                        ))}
                    </div>
                </>
            )}

            <ModalSubcategories handleCloseModal={handleCloseModal} category={category} option={option} />
        </>
    );
}