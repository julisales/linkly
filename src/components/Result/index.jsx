import './Result.css';
import { IoClose, IoCopyOutline } from "react-icons/io5";

export default function Modal({ closeResult, content }) {

    async function copyLink() {
        await navigator.clipboard.writeText(content.link);

        // Cria um span para a mensagem de confirmação
        const span = document.createElement('span');
        span.textContent = 'URL copiada!';

        // Estilos para centralizar o span na parte inferior
        span.style.position = 'fixed'; // Para garantir que fique fixo na tela
        span.style.bottom = '20px'; // Distância do fundo da tela
        span.style.left = '50%'; // 50% da esquerda da tela
        span.style.transform = 'translateX(-50%)'; // Move o span para o centro horizontalmente
        span.style.fontSize = '16px'; // Tamanho da fonte
        span.style.color = '#285641'; // Cor do texto
        span.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Cor de fundo branca com leve transparência
        span.style.padding = '10px'; // Padding para o span
        span.style.borderRadius = '5px'; // Bordas arredondadas
        span.style.zIndex = '1000'; // Para garantir que fique em cima de outros elementos
        span.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Sombra para destacar o span

        document.body.appendChild(span); // Adiciona o span ao body

        // Remove o span após 2 segundos
        setTimeout(() => {
            span.remove();
        }, 1000);
    }

    return (
        <div className='result-container'>
            <div className="result-header">
                <h2>Link Encurtado</h2>
                <button onClick={closeResult}>
                    <IoClose size={30} color='#285641' />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className='result-link' onClick={copyLink}>
                {content.link}
                <IoCopyOutline size={20} color='#fff' />
            </button>
        </div>
    )
}