import { useEffect, useState } from "react";
import ImgYellowPin from "../../assets/images/yellow-pin.JPG";
import { isMobile } from "react-device-detect";

const HighlightCategoryItem = ({ category, width, openModal }) => {

  const [hasChildren, setHasChildren] = useState(false)
  const [slug, setSlug] = useState('')

  useEffect(() => {
    if (category.children && category.children.length > 1) {
      setHasChildren(true)
    }

    if (category.children && category.children.length === 1) {
      setSlug(category.children[0].slug)
    }
  }, [category])

  const handleModal = (option) => {
    openModal(category, option)
  }

  return (
    <>
      <div
        className={`md:col-span-1 ${isMobile ? 'mb-4' : 'mb-8'}`}
        style={{ width: `${isMobile ? '45' : width}%` }}
      >
        <div className={`relative border border-gray-200 rounded shadow-sm hover:shadow-lg category-highlight`}>
          <div className="flex items-center justify-center">
            {category.img_url && (
              <img 
                className="img rounded-t shadow" 
                style={{ width: `100%`, height: '180px', objectFit: 'cover' }} 
                src={category.img_url} 
                alt={category.name} 
              />
            )}

            {!category.img_url && (
              <img 
                className="img rounded-t shadow" 
                style={{ width: `100%`, height: '180px', objectFit: 'cover' }} 
                src={ImgYellowPin}
                alt="Imagem não disponível"
              />
            )}
          </div>
          <div className="p-2">
            <h5 className="text-sm font-medium text-center">{category.name}</h5>
          </div>
          <div className={`buttons h-16 absolute left-0 bottom-0 w-full bg-slate-50 opacity-99`}>
            <div className="flex justify-center items-center h-full">

              {category.slug === 'lancamentos' && (
                <a href={`/imoveis?lancamento=1`} className="text-sm px-4 py-3 mb-1 hover:bg-gray-100">Comprar</a>
              )}

              {!hasChildren && category.slug !== 'lancamentos' && (
                <>
                  {(category.options === 'A' || category.options === 'S') && (
                    <a href={`/imoveis?categoria=${slug}&opcao=comprar`} className="text-sm px-4 py-3 mb-1 hover:bg-gray-100">Comprar</a>
                  )}
                  
                  {(category.options === 'A' || category.options === 'R') && (
                    <a href={`/imoveis?categoria=${slug}&opcao=alugar`} className="text-sm px-4 py-3 mb-1 hover:bg-gray-100">Alugar</a>
                  )}
                </>
              )}

              {hasChildren && category.slug !== 'lancamentos' && (
                <>
                  {(category.options === 'A' || category.options === 'S') && (
                    <button onClick={() => handleModal('comprar')} className="text-sm px-4 py-3 mb-1 hover:bg-gray-100">Comprar</button>
                  )}

                  {(category.options === 'A' || category.options === 'R') && (
                    <button onClick={() => handleModal('alugar')} className="text-sm px-4 py-3 mb-1 hover:bg-gray-100">Alugar</button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HighlightCategoryItem;