import { Controller, useForm } from "react-hook-form";
import { pricesToRent, pricesToSell } from "../util";
import { useQuery } from "react-query";
import { getCategories } from "../../../providers/category";
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { getLocals } from "../../../providers/property";
import { useEffect, useState } from "react";

const aPricesToSell = pricesToSell();
const aPricesToRent = pricesToRent();

const areaOptions = [
  { value: 50, label: '50 metros quadrados' },
  { value: 100, label: '100 metros quadrados' },
  { value: 150, label: '150 metros quadrados' },
  { value: 200, label: '200 metros quadrados' },
  { value: 250, label: '250 metros quadrados' },
  { value: 300, label: '300 metros quadrados' },
  { value: 350, label: '350 metros quadrados' },
  { value: 400, label: '400 metros quadrados' },
  { value: 450, label: '450 metros quadrados' },
  { value: 500, label: '500 metros quadrados' },
  { value: 550, label: 'acima de 500 metros quadrados' },
];

const aBedrooms = [
  { value: 1, label: '1 quarto' },
  { value: 2, label: '2 quartos' },
  { value: 3, label: '3 quartos' },
  { value: 4, label: '4 quartos' },
  { value: 5, label: '5 quartos' },
  { value: 6, label: 'Mais que 5 quartos' },
];

const aSuites = [
  { value: 1, label: '1 suíte' },
  { value: 2, label: '2 suítes' },
  { value: 3, label: '3 suítes' },
  { value: 4, label: '4 suítes' },
  { value: 5, label: '5 suítes' },
  { value: 6, label: 'Mais que 5 suítes' },
];

const aGarages = [
  { value: 1, label: '1 vaga' },
  { value: 2, label: '2 vagas' },
  { value: 3, label: '3 vagas' },
  { value: 4, label: '4 vagas' },
  { value: 5, label: 'Mais que 4 vagas' },
];

const aBathrooms = [
  { value: 1, label: '1 banheiro' },
  { value: 2, label: '2 banheiros' },
  { value: 3, label: '3 banheiros' },
  { value: 4, label: '4 banheiros' },
  { value: 5, label: '5 banheiros' },
  { value: 6, label: 'Mais que 5 banheiros' },
];


const SearchForm = ({ option, handleSubmitForm }) => {

  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [showAdvancedButtonSearch, setShowAdvancedButtonSearch] = useState(false);
  const [params, setParams] = useState({});
  
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm();

  const { data: categories, error, isLoading } = useQuery('categories', async () => {
    const categories = await getCategories();

    const options = [];
    categories.map((category, index) => {
        options.push({ value: category.slug, label: category.name, options: [] });

        if (category.children && category.children.length > 0) {
            category.children.map(child => {
                options[index].options.push({ value: child.slug, label: child.name });
            });
        }
    });
    console.log("Options", options);

    getParams();

    return options;
  });

  const getParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of urlParams) {
      params[key] = value;
    }
    setParams(params);

    console.log("parametros", params);
    console.log("Categoria", params?.categoria ?? null);
  };

  const loadLocals = async (inputValue) =>  {
    const locals = await getLocals(inputValue);
    const options = locals.map(d => {
        return { value: d.slug, label: d.local }
    });
    return options;
  };

  const doSubmit = (data) => {
    handleSubmitForm(data, option);
  }

  useEffect(() => {
    // check if path is /imoveis
    if (window.location.pathname === '/imoveis') {
      setShowAdvancedButtonSearch(true);
      setShowAdvancedSearch(true);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(doSubmit)}>
        <div className="registration-form text-dark text-start z-1">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
            <div>
                <label className="form-label text-slate-900 dark:text-white font-medium">Buscar por : <span className="text-red-600">*</span></label>
                <div className="filter-search-form relative filter-border mt-2">
                    <i className="uil uil-search icons"></i>
                    <input name="name" autoComplete="off" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Palavras chaves / Código" {...register('keyword')} />
                </div>
            </div>

            <div>
              <label className="form-label text-slate-900 dark:text-white font-medium">Local :</label>
              <div className="filter-search-form relative filter-border mt-2">
                <i className="uil uil-map-marker icons"></i>
                <Controller
                  control={control}
                  name='local'
                  rules={{ required: false }}
                  render={({ field }) => (
                    <AsyncSelect
                      placeholder="Local do imóvel" 
                      className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                      options={[]} 
                      isLoading={false}
                      noOptionsMessage={() => 'Escolha o local do imóvel'}
                      loadingMessage={() => 'Carregando locais...'} 
                      {...field} 
                      loadOptions={loadLocals}
                      onChange={val => {
                          console.log("Escolhido local: ", val);
                          field.onChange(val);
                      }}
                      // value={field.label}
                      onClick={() => field.onChange(null)}
                    />
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="buy-properties" className="form-label text-slate-900 dark:text-white font-medium">Categorias:</label>   
              <div className="filter-search-form relative filter-border mt-2">
                <i className="uil uil-estate icons"></i>
                <Controller
                  control={control}
                  name='category_id'
                  rules={{ required: false }}
                  render={({ field }) => (
                      <Select 
                          placeholder="Escolha a categoria" 
                          className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                          options={categories} 
                          isLoading={isLoading} 
                          loadingMessage={() => 'Carregando categorias...'} 
                          {...field} 
                          // value={categories && categories.find((c) => c.value === field.value)}
                          value={categories && categories.find((c) => {
                            return c.options && c.options.find((o) => {
                              return o.value === params.categoria;
                            });
                          })}
                          onChange={val => {
                            field.onChange(val.value);
                            params.categoria = val.value;

                            alert(`Escolhido categoria: ${val.value}`)
                          }}
                      />
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="buy-min-price" className="form-label text-slate-900 dark:text-white font-medium">Preço mínimo :</label>                                                        
              <div className="filter-search-form relative filter-border mt-2">
                <i className="uil uil-usd-circle icons"></i>
                <Controller
                  control={control}
                  name='min_price'
                  rules={{ required: false }}
                  render={({ field }) => (
                    <Select 
                      className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                      options={option === 'alugar' ? aPricesToRent : aPricesToSell}
                      placeholder="Valor mínimo" 
                      {...field} 
                      value={aPricesToRent && aPricesToRent.find((c) => c.value === field.value)}
                      onChange={val => field.onChange(val.value)}
                    />
                  )}
                />
              </div>
            </div>

            <div>
              <label htmlFor="buy-max-price" className="form-label text-slate-900 dark:text-white font-medium">Preço máximo :</label>                                                        
              <div className="filter-search-form relative mt-2">
                <i className="uil uil-usd-circle icons"></i>
                <Controller
                  control={control}
                  name='max_price'
                  rules={{ required: false }}
                  render={({ field }) => (
                    <Select 
                      className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                      options={option === 'alugar' ? aPricesToRent : aPricesToSell}
                      placeholder="Valor máximo" 
                      {...field} 
                      value={aPricesToRent && aPricesToRent.find((c) => c.value === field.value)}
                      onChange={val => field.onChange(val.value)}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className={`mt-4 ${showAdvancedSearch ? '' : 'hidden'}`}>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
              <div>
                <label className="form-label text-slate-900 dark:text-white font-medium">Quartos :</label>
                <div className="filter-search-form relative filter-border mt-2">
                  <i className="uil uil-bed-double icons"></i>
                  <Controller
                    control={control}
                    name='bedrooms'
                    rules={{ required: false }}
                    render={({ field }) => (
                      <Select 
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                        options={aBedrooms}
                        placeholder="Número de quartos" 
                        {...field} 
                        value={aBathrooms && aBathrooms.find((c) => c.value === field.value)}
                        onChange={val => field.onChange(val.value)}
                      />
                    )}
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label text-slate-900 dark:text-white font-medium">Suítes :</label>
                <div className="filter-search-form relative filter-border mt-2">
                  <i className="uil uil-bed icons"></i>
                  <Controller
                    control={control}
                    name='suites'
                    rules={{ required: false }}
                    render={({ field }) => (
                      <Select 
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                        options={aSuites}
                        placeholder="Número de suítes" 
                        {...field} 
                        value={aSuites && aSuites.find((c) => c.value === field.value)}
                        onChange={val => field.onChange(val.value)}
                      />
                    )}
                  />
                </div>
              </div>

              <div>
                <label className="form-label text-slate-900 dark:text-white font-medium">Vagas de garagem :</label>
                <div className="filter-search-form relative filter-border mt-2">
                  <i className="uil uil-parking-circle icons"></i>
                  <Controller
                    control={control}
                    name='garage'
                    rules={{ required: false }}
                    render={({ field }) => (
                      <Select 
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                        options={aGarages}
                        placeholder="Número de vagas" 
                        {...field} 
                        value={aGarages && aGarages.find((c) => c.value === field.value)}
                        onChange={val => field.onChange(val.value)}
                      />
                    )}
                  />
                </div>
              </div>

              <div>
                <label className="form-label text-slate-900 dark:text-white font-medium">Banheiros :</label>
                <div className="filter-search-form relative filter-border mt-2">
                  <i className="uil uil-bath icons"></i>
                  <Controller
                    control={control}
                    name='bathrooms'
                    rules={{ required: false }}
                    render={({ field }) => (
                      <Select 
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                        options={aBathrooms}
                        placeholder="Banheiros" 
                        {...field} 
                        value={aBathrooms && aBathrooms.find((c) => c.value === field.value)}
                        onChange={val => field.onChange(val.value)}
                      />
                    )}
                  />
                </div>
              </div>
              
              <div className="z-0">
                <label className="form-label text-slate-900 dark:text-white font-medium">Área total :</label>
                <div className="filter-search-form relative filter-border mt-2">
                  <i className="uil uil-arrows-resize-h icons"></i>
                  <Controller
                    control={control}
                    name='area'
                    rules={{ required: false }}
                    render={({ field }) => (
                      <Select 
                        className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" 
                        options={areaOptions}
                        placeholder="Área total" 
                        {...field} 
                        value={areaOptions && areaOptions.find((c) => c.value === field.value)}
                        onChange={val => field.onChange(val.value)}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-6">
            <div className="flex justify-start items-center space-x-8">
              <input type="submit" id="search-buy" name="search" className="btn bg-yellow-500 hover:bg-yellow-600 border-green-600 hover:border-green-700 text-white searchbtn submit-btn !h-12 rounded" value="Buscar" />
              
              {showAdvancedButtonSearch && (
                <button type="button" className="hidden btn btn-link lowercase text-gray-500 font-light" onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}>
                  busca avançada
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );

}

export default SearchForm;