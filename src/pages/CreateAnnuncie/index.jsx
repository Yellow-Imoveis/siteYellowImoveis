import { useForm } from "react-hook-form";

const CreateAnnunciate = () => {

  const { handleSubmit, register } = useForm();

  return (
    <>
      <div className="container">
        <h2>Anuncie seu imóvel</h2>

        <form onSubmit={handleSubmit((data) => console.log(data))}>

          <fieldset>
            <legend>Dados do anunciante</legend>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("name")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                {...register("phone")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                {...register("cpf")}
              />
            </div>
          </fieldset>
          
          <fieldset>
            <legend>Endereço</legend>

            <div className="form-group">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                className="form-control"
                id="cep"
                {...register("cep")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="street">Rua</label>
              <input
                type="text"
                className="form-control"
                id="street"
                {...register("street")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="number">Número</label>
              <input
                type="text"
                className="form-control"
                id="number"
                {...register("number")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                className="form-control"
                id="complement"
                {...register("complement")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                className="form-control"
                id="district"
                {...register("district")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="city"
                {...register("city")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                className="form-control"
                id="state"
                {...register("state")}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Dados do imóvel</legend>

            <div className="form-group">
              <label htmlFor="type">Tipo</label>
              <select
                className="form-control"
                id="type"
                {...register("type")}
              >
                <option value="apartment">Apartamento</option>
                <option value="house">Casa</option>
                <option value="land">Terreno</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="area">Área</label>
              <input
                type="text"
                className="form-control"
                id="area"
                {...register("area")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="rooms">Quartos</label>
              <input
                type="number"
                className="form-control"
                id="rooms"
                {...register("rooms")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="suites">Suítes</label>
              <input
                type="number"
                className="form-control"
                id="suites"
                {...register("suites")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bathrooms">Banheiros</label>
              <input
                type="number"
                className="form-control"
                id="bathrooms"
                {...register("bathrooms")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="garage">Vagas na garagem</label>
              <input
                type="number"
                className="form-control"
                id="garage"
                {...register("garage")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                className="form-control"
                id="description"
                {...register("description")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Preço</label>
              <input
                type="text"
                className="form-control"
                id="price"
                {...register("price")}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default CreateAnnunciate;