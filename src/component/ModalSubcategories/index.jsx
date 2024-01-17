import { Link, useNavigate } from "react-router-dom";
import SetaDireita from "../SetaDireita";
import { useEffect, useState } from "react";

const ModalSubcategories = ({ category, option }) => {

  const [optionSigla, setOptionSigla] = useState(option === 'comprar' ? 'S' : 'R')

  useEffect(() => {
    setOptionSigla(option === 'comprar' ? 'S' : 'R')
  }, [option])

  return (
    <dialog id="modalSubcategories" className="modal">
      <div className="modal-box flex flex-col">
        
        {category && (
          <>
            <h3 className="my-5 font-bold text-lg border-b">Escolha uma opção dentro de {category.name}</h3>
            <div className="modal-body">
              {optionSigla && category.children && category.children.length > 0 && category.children.map((subcategory, index) => (
                <>
                  {(subcategory.options === 'A' || subcategory.options === optionSigla) && (
                    <div key={index} className="flex justify-between items-center mb-3">
                      <Link to={`/imoveis?categoria=${subcategory.slug}&opcao=${optionSigla}`}>
                        <div className="">
                          <div className="flex justify-start items-start">
                            <SetaDireita size={24} />
                            <span className="text-lg font-medium hover:text-yellow-500">
                              {option.toUpperCase()} - {subcategory.name}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </>
              ))}
            </div>
          </>
        )}

        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-outline">Fechar</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default ModalSubcategories;
