
import logo from '../../assets/logo dsatelie.jpg'
import { FaWhatsapp, FaFacebook, FaPinterest, FaYoutube, FaSpotify, FaInstagram } from 'react-icons/fa'
import { CiCircleChevRight } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export function Footer(){
    return(
        <footer className="w-full mt-20 bg-[#D3ADA3] text-white m-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-20 p-10 max-w-7xl m-auto">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Acompanhe a DS Atelie</p>
                    <p className="text-white text-base">Cadastre-se e seja um dos primeiros a receber novidades e ofertas.</p>
                </div>

                <form className='flex items-center flex-col md:flex-row gap-5' action="">
                    <input className='mr-4 p-1 bg-transparent border-b-2 focus:outline-none placeholder-white text-white' type="text" placeholder="Seu nome" />
                    <input className='mr-4 p-1 bg-transparent border-b-2 focus:outline-none placeholder-white text-white' type="mail" placeholder="Seu melhor email" />

                    <button className='flex items-center bg-white p-1 rounded-lg shadow-md'>
                        <p className='font-bold ml-3 text-[#D3ADA3]'>Cadastrar</p>
                        <CiCircleChevRight size={23}/>
                    </button>
                </form>
            </div>
            
            <hr />

            <div className='flex flex-col md:flex-row gap-10 items-center justify-between p-10 max-w-7xl m-auto'>
                <Link to='/'>
                    <img className='h-20' src={logo} alt="Logo DS" />
                </Link>
                
                <div className='flex items-center justify-center gap-3'>
                    <a target='_blank' href="https://www.facebook.com/">
                        <FaFacebook size={30}/>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/">
                        <FaInstagram size={30}/>
                    </a>
                    <a target='_blank' href="https://www.pinterest.com/">
                        <FaPinterest size={30}/>
                    </a>
                    <a target='_blank' href="https://www.youtube.com/">
                        <FaYoutube size={30}/>
                    </a>
                    <a target='_blank' href="https://www.whatsapp.com/">
                        <FaWhatsapp size={30}/>
                    </a>
                    <a target='_blank' href="https://open.spotify.com/intl-pt">
                        <FaSpotify size={30}/>
                    </a>
                </div>
            </div>

            <hr />

            <div className='flex flex-col gap-5 items-center justify-between p-10 max-w-7xl m-auto md:flex-row'>
                <ul className='-ml-[4.5rem] md:m-0'>
                    <p className='text-lg font-bold mb-3'>Sobre a DS Atelie</p>
                    <li>
                        <a href="">Nossas Lojas</a>
                    </li>
                </ul>
                <ul className='-ml-32 md:m-0'>
                    <p className='text-lg font-bold mb-3'>Categorias</p>
                    <li>
                        <a href="">Anéis</a>
                    </li>
                    <li>
                        <a href="">Brincos</a>
                    </li>
                    <li>
                        <a href="">Colares</a>
                    </li>
                    <li>
                        <a href="">Conjuntos</a>
                    </li>
                    <li>
                        <a href="">Pulseiras</a>
                    </li>
                </ul>
                <div>
                    <ul className='mb-5'>
                        <p className='text-lg font-bold mb-3'>Políticas</p>
                        <li>
                            <a href="">Política de Garantia</a>
                        </li>
                        <li>
                            <a href="">Política de Trocas e Devoluções</a>
                        </li>
                        <li>
                            <a href="">Políticas de Privacidade</a>
                        </li>
                        <li>
                            <a href="">Política de Entrega</a>
                        </li>
                    </ul>
                    <ul>
                        <p className='text-lg font-bold mb-3'>Central de Atendimento</p>
                        <li>
                            <a href="">Contato</a>
                        </li>
                        <li>
                            <a href="">Dúvidas Frequentes</a>
                        </li>
                        <li>
                            <a href="">Trabalhe Conosco</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className='flex items-center justify-center p-10'>
                <p className='text-lg font-bold'>© 2024 DS Atelie</p>
            </div>
        </footer>
    )
}