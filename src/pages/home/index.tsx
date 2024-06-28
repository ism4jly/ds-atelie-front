import { Link } from "react-router-dom";
import { Container } from "../../components/container";
import { FiInstagram } from "react-icons/fi";
import anel from "../../assets/aneis.png"
import brincos from '../../assets/brincos.png'
import pulseiras from '../../assets/pulseiras.png'

import { Swiper, SwiperSlide } from "swiper/react";

import { useNavigate } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { WhatsappIcon } from "../../components/whatsapp";


export function Home(){

    const navigate = useNavigate()
    const [sliderPerView, setSliderPerView] = useState<number>(2);

    const handleDetails = () => {
        navigate("/aneis/detalhes")

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(()=> {

        function handleResize(){
            if(window.innerWidth < 720){
                setSliderPerView(1);
            }else {
                setSliderPerView(3);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return() => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return(
        <>
            <div className="bg-[#1F1F1F] w-full h-60">.</div>
            <Container>
                <div className="flex mt-5 mb-16 items-center justify-center flex-col gap-20 md:flex-row">
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
                    <div className="flex items-center justify-center flex-col mt-20 mb-10">
                        <strong className="uppercase text-xl text-gray-800">Novidades</strong>
                        <p className="-mt-1">Joias que você precisa ter</p>
                    </div>
                    {/* SWIPER */}

                    <Swiper
                        slidesPerView={sliderPerView}
                        loop={true}
                        navigation={true}
                        spaceBetween={120}
                    >
                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to=''>
                                    <img
                                        className="h-[270px]"
                                        src={anel}
                                    />
                                    <p>
                                        Anel Solitário Em Ouro 18k 
                                        Delicado com Zircônia Cristal Cravejada
                                    </p>
                                </Link>

                                <p className="mt-2 text-2xl font-semibold">R$ 1.625,00</p>

                                <hr className="mt-5 mb-5 border-1 border-gray-300" />

                                <Link to='' onClick={handleDetails} className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-white">Comprar agora</span>
                                    <FaWhatsapp color={'white'} size={23}/>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to=''>
                                    <img
                                        className="h-[270px]"
                                        src={anel}
                                    />
                                    <p>
                                        Anel Solitário Em Ouro 18k 
                                        Delicado com Zircônia Cristal Cravejada
                                    </p>
                                </Link>

                                <p className="mt-2 text-2xl font-semibold">R$ 1.625,00</p>

                                <hr className="mt-5 mb-5 border-1 border-gray-300" />

                                <Link to='' onClick={handleDetails} className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-white">Comprar agora</span>
                                    <FaWhatsapp color={'white'} size={23}/>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to=''>
                                    <img
                                        className="h-[270px]"
                                        src={anel}
                                    />
                                    <p>
                                        Anel Solitário Em Ouro 18k 
                                        Delicado com Zircônia Cristal Cravejada
                                    </p>
                                </Link>

                                <p className="mt-2 text-2xl font-semibold">R$ 1.625,00</p>

                                <hr className="mt-5 mb-5 border-1 border-gray-300" />

                                <Link to='' onClick={handleDetails} className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-white">Comprar agora</span>
                                    <FaWhatsapp color={'white'} size={23}/>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to=''>
                                    <img
                                        className="h-[270px]"
                                        src={anel}
                                    />
                                    <p>
                                        Anel Solitário Em Ouro 18k 
                                        Delicado com Zircônia Cristal Cravejada
                                    </p>
                                </Link>

                                <p className="mt-2 text-2xl font-semibold">R$ 1.625,00</p>

                                <hr className="mt-5 mb-5 border-1 border-gray-300" />

                                <Link to='' onClick={handleDetails} className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-white">Comprar agora</span>
                                    <FaWhatsapp color={'white'} size={23}/>
                                </Link>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    {/* BANNER */}


                    <div className="flex items-center justify-center flex-col mt-20 mb-10">
                        <strong className="uppercase text-xl text-gray-800">Navegue por categoria</strong>
                        <p className="-mt-1">Encontre a joia certa para você ou para uma pessoa especial</p>
                    </div>

                    {/* SWIPER SÓ COM IMAGEM E DIRECIONAMENTO*/}
                    <Swiper
                        spaceBetween={120}
                        slidesPerView={sliderPerView}
                        loop={true}
                        navigation={true}
                        className="mb-20"
                    >
                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to='/aneis'>
                                    <img
                                        className="h-[270px]"
                                        src={anel}
                                    />
                                </Link>

                                <Link to='' className="flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-black">Anéis</span>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to='/brincos'>
                                    <img
                                        className="h-[270px]"
                                        src={brincos}
                                    />
                                </Link>

                                <Link to='' className="flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-black">Brincos</span>
                                </Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="max-w-[270px]">
                                <Link to='/pulseiras'>
                                    <img
                                        className="h-[270px]"
                                        src={pulseiras}
                                    />
                                </Link>

                                <Link to='/pulseiras' className="flex p-3 items-center justify-center rounded-lg">
                                    <span className="font-bold mr-2 uppercase text-black">Pulseiras</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>

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

            <WhatsappIcon/>
        
        </>
    )
}