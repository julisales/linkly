import { FiLink } from 'react-icons/fi';
import './Home.css';
import { useState } from 'react';
import Menu from '../../components/Menu';
import Result from '../../components/Result';
import api from '../../services/api';
import { saveLink } from '../../services/store-links'

export default function Home() {
    const [link, setLink] = useState('');
    const [showResult, setShowResult] = useState(false)
    const [data, setData] = useState({});

    async function handleShortLink() {
        try {
            const response = await api.post('', {
                long_url: link
            });

            setData(response.data);
            setShowResult(true);

            saveLink('@encurtaLink', response.data);

            setLink('');
        } catch (error) {
            const span = document.createElement('span');
            span.textContent = 'Parece que algo deu errado...';

            // Estilos para centralizar o span na parte inferior
            span.style.position = 'fixed'; // Para garantir que fique fixo na tela
            span.style.bottom = '20px'; // Distância do fundo da tela
            span.style.left = '50%'; // 50% da esquerda da tela
            span.style.transform = 'translateX(-50%)'; // Move o span para o centro horizontalmente
            span.style.fontSize = '16px'; // Tamanho da fonte
            span.style.color = 'red'; // Cor do texto
            span.style.backgroundColor = 'rgba(255, 0, 0, 0.4)'; // Cor de fundo vermelha com leve transparência
            span.style.padding = '10px'; // Padding para o span
            span.style.borderRadius = '5px'; // Bordas arredondadas
            span.style.zIndex = '1000'; // Para garantir que fique em cima de outros elementos
            span.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Sombra para destacar o span

            document.body.appendChild(span); // Adiciona o span ao body

            // Remove o span após 1 segundo
            setTimeout(() => {
                span.remove();
            }, 1000);

            setLink('');
        }
    }

    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" width="200px" alt="Logo Linkly" />
                <h1>Linkly</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color='#FFF' />
                    <input
                        placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>
            <Menu />
            {showResult && (
                <Result
                    closeResult={() => setShowResult(false)}
                    content={data}
                />
            )}
        </div>
    );
}
