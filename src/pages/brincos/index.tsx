import { Container } from "../../components/container";
import brinco from "../../assets/argola-trabalhada.png"
import { Link } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";




export function Brincos(){
    return(
        <Container>
            <div className="max-w-[270px]">
                <Link to=''>
                    <img
                        className="h-[270px]"
                        src={brinco}
                    />
                    <p>
                        Brinco De Prata Leve Argola Trabalhada
                    </p>
                </Link>

                <p className="mt-2 text-2xl font-semibold">R$ 135,00</p>

                <hr className="mt-5 mb-5 border-1 border-gray-300" />

                <Link to='' className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                    <span className="font-bold mr-2 uppercase text-white">Comprar agora</span>
                    <FaWhatsapp color={'white'} size={23}/>
                </Link>
            </div>
        </Container>
    )
}