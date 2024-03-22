import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { FiInstagram } from "react-icons/fi";


export function Home(){
    return(
        <>
            <div className="bg-[#1F1F1F] w-full h-60">.</div>
            <Container>
                <div className="flex mt-5 mb-16 items-center justify-center flex-row gap-20">
                    <div>
                        <p className="font-bold uppercase text-base">Entrega rápida e exclusiva</p>
                        <p className="text-sm">para Curitiba e região metropolitana</p>
                    </div>
                    <div>
                        <p className="font-bold uppercase text-base">Até 10x sem juros*</p>
                        <p className="text-sm">no cartão de crédito</p>
                    </div>
                    <div>
                        <p className="font-bold uppercase text-base">Compre pelo whats</p>
                        <p className="text-sm">atendimento especializado</p>
                    </div>
                </div>

                <p className="uppercase text-center text-gray-950">DS Atelie, a marca para quem se faz presente.</p>

                <section>
                    <div className="flex items-center justify-center flex-col mt-10 mb-10">
                        <strong className="uppercase text-xl text-gray-800">Novidades</strong>
                        <p className="-mt-1">Joias que você precisa ter</p>
                    </div>
                    {/* SWIPER */}


                    {/* BANNER */}


                    <div className="flex items-center justify-center flex-col mt-10 mb-10">
                        <strong className="uppercase text-xl text-gray-800">Navegue por categoria</strong>
                        <p className="-mt-1">Encontre a joia certa para você ou para uma pessoa especial</p>
                    </div>

                    {/* SWIPER SÓ COM IMAGEM E DIRECIONAMENTO*/}

                    <div className="flex p-8 gap-5 items-center justify-center bg-[#D3ADA3]">
                        <a href='' className="text-white hover:underline text-xl font-bold">@dsatelie</a>
                        <a href="" className="bg-[#1F1F1F] p-2.5 flex items-center gap-2 rounded-md">
                            {/* logo insta */}
                            <FiInstagram size={20} color={'white'}/>
                            <p className="text-white">Seguir</p>
                        </a>
                    </div>
                </section>
            </Container>
        
        </>
    )
}