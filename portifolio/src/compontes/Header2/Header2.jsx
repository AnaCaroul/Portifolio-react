import { Link } from 'react-router-dom';
import './Header2.css';
import Logo from '../../assets/imgs/Logo.svg';
import Back from '../../assets/imgs/Vector.svg';

function Header2(){
    return(
        <div className='Header2'>
           <img src={Logo} /> 
           <Link to="/"> <img src={Back} /> </Link> 
        </div>
        
    )
}

export default Header2;