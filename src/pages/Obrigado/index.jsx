import Navbar from "../../component/Navbar";
import BackgroundImage from "../../assets/images/bg/07.png";

const Obrigado = () => {

  return (
    <>
      <Navbar />

      <section className="relative mt-20">
          <div className="container-fluid md:mx-4 mx-2">
              <div style={{ backgroundImage: `url(${BackgroundImage})` }} className="relative h-screen table w-full rounded-2xl shadow-md overflow-hidden bg-[url('../../assets/images/bg/07.png')] bg-no-repeat bg-center bg-cover" id="home">
                  <div className="absolute inset-0 bg-black/80"></div>

                  <div className="container">
                      <div className="grid grid-cols-1">
                          <div className="ltr:md:text-left rtl:md:text-right text-center text-white">
                            <div className="flex justify-center items-center mt-40">
                              <div className="text-center">
                                {/* <div className="text-9xl">👍</div> */}
                                  <h3 className="text-4xl font-bold">Obrigado!</h3>
                                  <p className="text-xl">Sua mensagem foi enviada com sucesso.</p>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );

};

export default Obrigado;
