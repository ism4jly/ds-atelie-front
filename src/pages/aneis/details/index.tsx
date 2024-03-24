import { Link } from "react-router-dom";
import { Container } from "../../../components/container";
import { FaWhatsapp } from "react-icons/fa";

import anel from '../../../assets/aneis.png'


export function Details(){
    return(
        <Container>
            <div className="flex flex-col justify-center">
                <div className="flex justify-around w-full">
                    <img 
                        src={anel} 
                        className="h-[400px]"
                    />

                    <div className="flex flex-col justify-start mt-12">
                        <strong className="mb-5">Anel De Prata Croissant Espelhado</strong>
                        <p className="font-bold text-2xl">R$ 195,00</p>

                        <hr className="border-1 mt-12 mb-12"/>

                        <div>
                            <Link to='' className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                                <span className="font-bold mr-2 uppercase text-white">Entrar em contato</span>
                                <FaWhatsapp color={'white'} size={23}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[50%] text-justify">
                    <p className="font-bold text-xl mb-5">Descrição</p>
                    <p className="">Um anel de prata é uma obra de arte em miniatura, uma fusão sublime de elegância e simplicidade. Seu metal prateado reflete a luz de maneira cativante, criando um brilho suave e refinado que captura a atenção de todos que o contemplam. A superfície polida é como um espelho, refletindo o mundo ao seu redor de uma maneira única.</p>
                </div>
            </div>
        </Container>
    )
}