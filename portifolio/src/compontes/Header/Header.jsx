import { Link } from 'react-router-dom';

import './Header.css';
import Logo from '../../assets/imgs/Logo.svg';

function Header(){

    return(
        <header className="header">
            <div className='divLogo'> 
            <img src={Logo} alt="Logo" />
            <Link to="/"  className="h3"> HOME </Link>
            </div>

            <div className='divLinks'>
                {/* <Link className='p'>SOBRE MIM</Link>
                <Link className='p'> PROJETOS </Link> */}
                <Link to="/Contato" className='p'> CONTATO </Link>
            </div>
            
        </header>
    )
}

export default Header;