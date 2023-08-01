import Header2 from '../Header2/Header2';
import './Contato.css';
import Footer from '../Footer/Footer.jsx';
import Github from '../../assets/imgs/githubLogo.png';
import Email from '../../assets/imgs/email.png';
import LogoLinkedin from '../../assets/imgs/LogoLinkedin.png'
import Whats from '../../assets/imgs/whats.png'
import Container2 from '../../compontes/Conteiner2/index.jsx';

function ContatoBody(){
    return(
        <>
        <Header2 />
        
        <Container2> 
        <div className='conteiner'> 
            <h3> Contato<span>.</span></h3>
            <p className='ptext'> Sinta-se à vontade para entrar em contato comigo. </p>

            <div className='div-contatos'>
                <div className='imgs'>
                    <a href="mailto:anacarolinaalvesramos03@gmail.com"> <img src={Email} /> </a>
                    <h4> Email </h4>
                    <a href="mailto:anacarolinaalvesramos03@gmail.com"> anacarolinaalvesramos03@gmail.com </a>
                </div>

                <div className='imgs'>
                   <a href='https://www.linkedin.com/in/ana-carolina-alves-ramos-1181911a6'> <img src={LogoLinkedin} /> </a> 
                   <h4> LinkedIn </h4>
                   <a href='https://www.linkedin.com/in/ana-carolina-alves-ramos-1181911a6'> @anacarolina </a>
                </div>

                <div className='imgs'>
                   <a href='https://github.com/AnaCaroul'> <img src={Github} /> </a> 
                   <h4> Github </h4>
                   <a href='https://github.com/AnaCaroul'> @anacarolina </a>
                </div>

                <div className='imgs'>
                  <a href='https://api.whatsapp.com/send?phone=971289301'> <img src={Whats} />  </a>  
                  <h4> WhatsApp </h4>
                  <a href='https://api.whatsapp.com/send?phone=9712893015678'> (31) 97128-9301 </a>
                </div>
            </div>

        </div>
        </Container2>

        <Footer />
        </>
        
    )
}

export default ContatoBody;