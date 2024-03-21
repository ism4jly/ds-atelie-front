import { Link } from "react-router-dom";
import logoDS from '../../assets/logo dsatelie.jpg'

import { FiUser, FiHeart, FiShoppingBag, FiSearch, FiMenu } from 'react-icons/fi';

export function Header(){
    return(
        <div className='text-white w-full flex items-center justify-center h-50 bg-[#D3ADA3] drop-shadow mb-4 flex-col'>
            <header className='flex w-full max-w-7xl items-center justify-evenly px-4 mx-auto p-10'>
                <Link to='/'>
                    <img
                        className='h-20'
                        src={logoDS}
                        alt='Logo'
                    />
                </Link>

                <div className='hidden md:flex gap-2 mr-10 ml-10'>
                    <button>
                        <FiSearch size={23}/>
                    </button>

                    
                    <input 
                        className='flex w-52 border-0 border-b border-white text-sm bg-[#D3ADA3] placeholder-white focus:outline-none' 
                        type="text" 
                        placeholder='Busque por alianças, pulseiras...' 
                    />
                </div>
                

                <div className='flex gap-2 text-sm md:flex lg:gap-10'>
                    <Link className='items-center flex gap-2' to=''>
                        <FiUser size={23}/>
                        <p className='hidden md:flex'>Minha conta</p>
                    </Link>
                    <Link className='items-center hidden gap-2 md:flex' to=''>
                        <FiHeart size={23}/>
                        <p>Lista de desejos</p>
                    </Link>
                    <Link className='hidden items-center gap-2 md:flex' to=''>
                        <FiShoppingBag size={23}/>
                        <p>Sacola de compras</p>
                    </Link>
                </div>

                <div className='-mr-2 flex -order-1 md:hidden'>
                    <button>
                        <FiMenu size={23}/>
                    </button>
                </div>
            </header>

            <div className='flex md:hidden gap-2 mr-10 ml-10 mb-5 -mt-5'>
                    <button>
                        <FiSearch size={23}/>
                    </button>

                    
                    <input 
                        className='w-52 border-0 border-b border-white text-sm bg-[#D3ADA3] placeholder-white focus:outline-none' 
                        type="text" 
                        placeholder='Busque por alianças, pulseiras...' 
                    />
                </div>

            <nav className='hidden gap-10 pb-5 uppercase md:flex'>
                <Link className='hover:font-bold' to='/aneis'>Anéis</Link>
                <Link className='hover:font-bold' to='/brincos'>Brincos</Link>
                <Link className='hover:font-bold' to='/colares'>Colares</Link>
                <Link className='hover:font-bold' to='/conjuntos'>Conjuntos</Link>
                <Link className='hover:font-bold' to='/pulseiras'>Pulseiras</Link>
            </nav>
        </div>
    )
}