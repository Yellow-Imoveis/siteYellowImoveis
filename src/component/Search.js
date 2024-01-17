import Select from 'react-select';

const Houses = [
    { value: 'AF', label: 'Apartment' },
    { value: 'AZ', label: ' Offices' },
    { value: 'BS', label: 'Townhome' },
]
const minPrice = [
    { value: '1', label: '500' },
    { value: '2', label: '1000' },
    { value: '3', label: '2000' },
    { value: '4', label: '3000' },
    { value: '5', label: '4000' },
    { value: '5', label: '5000' },
    { value: '5', label: '6000' },
]
const maxPrice = [
    { value: '1', label: '500' },
    { value: '2', label: '1000' },
    { value: '3', label: '2000' },
    { value: '4', label: '3000' },
    { value: '5', label: '4000' },
    { value: '5', label: '5000' },
    { value: '5', label: '6000' },
]

export default function Search() {
    return (
        <>
            <div className="container relative -mt-16 z-1">
                <div className="grid grid-cols-1">
                    <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                        <div className="registration-form text-dark text-start">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                <div>
                                    <label className="form-label text-slate-900 dark:text-white font-medium">Buscar por : <span className="text-red-600">*</span></label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <i className="uil uil-search icons"></i>
                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Busca por palavras chaves" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Categoria:</label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <i className="uil uil-estate icons"></i>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={Houses} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Preço mínimo :</label>
                                    <div className="filter-search-form relative filter-border mt-2">
                                        <i className="uil uil-usd-circle icons"></i>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Preço máximo :</label>
                                    <div className="filter-search-form relative mt-2">
                                        <i className="uil uil-usd-circle icons"></i>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                    </div>
                                </div>

                                <div className="lg:mt-6">
                                    <input type="submit" id="search-buy" name="search" className="btn bg-yellow-500 hover:bg-yellow-600 border-green-600 hover:border-green-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Buscar" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}