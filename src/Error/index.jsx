import './Error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return(
        <div className='container-error'>
            <img src="/error.png" alt="404 Error" />
            <h1>Página não encontrada</h1>
            <Link to="/" className='back-to-home'>
                Voltar para home
            </Link>
        </div>
    )
}