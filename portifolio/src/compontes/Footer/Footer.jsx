import './Footer.css'
import Github from '../../assets/imgs/github.png';
import Linkedlin from '../../assets/imgs/linkedin.png';
import Email from '../../assets/imgs/teste.svg';

function Footer(){
    return(
        <div className='Footer'> 
            <p className='txtBottom'> 
            Copyright © <span>Ana Carolina Ramos</span> · 2023
            </p>

            <div className='logos'> 
               <a href='https://www.linkedin.com/in/ana-carolina-alves-ramos-1181911a6'> <img src={Linkedlin} /> </a> 
               <a href='https://github.com/AnaCaroul'> <img src={Github} /> </a> 
                <a href="mailto:anacarolinaalvesramos03@gmail.com"> <img src={Email} /> </a>
            </div>
        </div>
    )
}

export default Footer;