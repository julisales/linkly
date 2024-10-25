import './menu.css';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu () {
    return(
        <div className='menu'>
            <a href="https://github.com/julisales" target='_blank' className='social'>
            <BsGithub color='white' size={24}/>
            </a>
            <Link to='/links' className='menu-item'> 
                Meus Links
            </Link>
        </div>
    )
}