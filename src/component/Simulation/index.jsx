import { useEffect, useState } from "react";
import { localSimulation, totalPropertiesBySimulation } from "../../providers/financy";
import { Link } from "react-router-dom";

const Simulation = ({ propertyInitialValue }) => {
  const [propertyValue, setPropertyValue] = useState(propertyInitialValue || 700000)
  const [entry, setEntry] = useState(20)
  const [tax, setTax] = useState(8)
  const [time, setTime] = useState(30)
  const [result, setResult] = useState([])
  const [totalProperties, setTotalProperties] = useState(0)
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    console.log("Property initial Value", propertyInitialValue);
    calculate();
  }, []);

  useEffect(() => {
    calculate();
  }, [propertyValue, entry, tax, time]);

  const calculate = () => {
    const data = localSimulation(propertyValue, entry, tax, time);
    setResult(data);

    const options = {
      data: [{
        type: 'doughnut',
        dataPoints: [
          {label: "Valor dos juros", y: data.tax_month },
          {label: "Valor da amortização", y: data.amortization},
          {label: "Taxa de Seguro", y: 64},
          {label: "Taxa fixa do Banco", y: 25},
        ],
      }]
    };
    setChartOptions(options);

    totalPropertiesBySimulation(propertyValue, entry, tax, time).then((data) => {
      setTotalProperties(data.total_properties);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="md:my-16 p-6 text-center md:text-left md:py-12 shadow bg-slate-50">
      <div className="md:container">
        <div className="flex flex-col items-center xl:flex-row xl:gap-x-16 xl:items-start mb-8">
          <div>
            <h4 className="text-4xl mb-2">Simulador</h4>
            <p className="mb-8">
              Simule o financiamento do seu imóvel e saiba o valor dos juros e amortização
            </p>
            <div className="flex flex-col md:flex-row justify-start md:space-x-32 items-center md:mb-16 mb-8">
              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="valor">
                  Valor do imóvel
                </label>
                <span className="block text-4xl">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(propertyValue)}</span>
                <input className={`w-full h-2 bg-blue-100 appearance-none`} id="valor" type="range" min={50000} max={2500000} step={50000} value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)} />
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="valor">
                  Entrada
                </label>
                <span className="block text-4xl">{entry}% <small>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(propertyValue * (entry / 100))}</small></span>
                <input className={`w-full h-2 bg-blue-100 appearance-none`} id="valor" type="range" min={10} max={90} value={entry} step={10} onChange={(e) => setEntry(e.target.value)} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start md:space-x-32 items-center md:mb-16 mb-8 md:ml-24">
              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="valor">
                  Taxa de Juros
                </label>
                <span className="block text-4xl">{tax}% a/a</span>
                <input className={`w-full h-2 bg-blue-100 appearance-none`} id="valor" type="range" min={3} max={12} value={tax} onChange={(e) => setTax(e.target.value)} />
              </div>

              <div className="mb-2">
                <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="valor">
                  Tempo de financiamento
                </label>
                <span className="block text-4xl">{time} anos</span>
                <input className={`w-full h-2 bg-blue-100 appearance-none`} id="valor" type="range" min={5} max={35} value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>

          </div>
          
          <div className="my-4">
            {result && (
              <>
                <div className="text-center py-8 px-8 md:px-16 md:py-8 w-full h-full shadow-lg bg-gray-50 rounded-xl border border-yellow-300">
                  <span className="block text-lg mb-2">Valor da 1<sup>a</sup> parcela</span>
                  <span className="block text-3xl mb-4">{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(result.installmentValue)}</span>

                  <span className="block text-xl mb-2">Renda mínima ({Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(result.monthlyIncome)})</span>
                  <span className="block text-lg text-blue-600 mb-2">Amortização ({Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(result.amortization)} por mês)</span>
                  <span className="block text-md text-blue-400 mb-2">Juros ({Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(result.tax_month)} por mês)</span>
                  <span className="block">Seguros & Taxas ({Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(result.taxAndSecure)})</span>
                </div>

                <div className="text-center mt-4">
                  <span className="block text-lg mb-2">{totalProperties} imóveis encontrados <br />com seu perfil.</span>
                  <Link to={`/imoveis?opcao=comprar&preco_maximo=${propertyValue}`} className="btn btn-warning">
                    Ver imóveis
                  </Link>
                </div>
              </> 
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Simulation;