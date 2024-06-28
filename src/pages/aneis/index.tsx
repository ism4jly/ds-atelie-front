import { Container } from "../../components/container";
import anel from "../../assets/solitario.png"
import { Link } from "react-router-dom";

import { FaWhatsapp } from "react-icons/fa";


export function Aneis(){
    return(
        <Container>
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

                <Link to='/aneis/detalhes' className="bg-[#D3ADA3] flex p-3 items-center justify-center rounded-lg">
                    <span className="font-bold mr-2 uppercase text-white">Comprar agora</span>
                    <FaWhatsapp color={'white'} size={23}/>
                </Link>
            </div>
        </Container>
    )
}