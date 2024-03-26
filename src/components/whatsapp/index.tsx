
import logoWhats from '../../assets/whatsapp.png'

export function WhatsappIcon(){

    const whatsappUrl = 'https://api.whatsapp.com/send?phone=5551999418664&text=Olá,%20tenho%20interesse%20nos%20produtos!';

    return(
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <img 
                src={logoWhats} 
                alt="Logo Whatsapp"
                className='fixed bottom-10 right-10 z-50 h-16'
            />
        </a>
    )
}