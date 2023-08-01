import './Conteiner.css'
import ImagemPrincipal from '../../assets/imgs/IMAGEM.png'
import Css from '../../assets/imgs/css 1.svg'
import Html from '../../assets/imgs/html.svg'
import react from '../../assets/imgs/react.svg'
import Js from '../../assets/imgs/js.svg'
import Ts from '../../assets/imgs/typescript.svg'
import styled from '../../assets/imgs/styled-components.svg'


function Conteiner(){
 return(
    <>
     
        <div className='div1-Titulo'> 
            <div> 
                <h3> 
                    Olá, eu sou a <br/> <span> Ana Carolina :) </span>
                </h3>
                <p className='p1'>Desenvolvedora Front-End </p>

                <div className='btns'>
                    <button className='btnProjetos'> Projetos </button>
                    <button className='btnLinkedlin'> Linkedlin </button>
                </div>
            </div>

            <img src={ImagemPrincipal} alt='Imagem Principal' />
        </div>

        <div className='divSobremim'>
            <h3 className='TextSobremim'> Sobre mim </h3>
            <p className='text'>
            Olá! Meu nome é Ana Carolina e sou uma apaixonada desenvolvedora Front-end. <br />
            Combinando minha paixão pelo design e minha habilidade em programação, estou <br/>
            sempre em busca de novos desafios e oportunidades para aprimorar minhas <br />
            habilidades. Atualmente estou no 3º ano do Ensino Médio com Técnico em <br/>
            Informática no Colégio Cotemig. 
            </p>
        </div>

        <div className='div-habilidades'> 
            <div className='div-txs'> 
                <h3 className='TextConhecimentos'>Conhecimentos<span>.</span></h3>
                <p className='cursor'>Aqui estão alguns dos meus conhecimentos.</p>
            </div>

            <div className='Imgs-conhecimentos'> 
                <div className='div'> <img src={Css}/> </div>
                <div className='div'> <img src={Html}/> </div>
                <div className='div'> <img src={styled}/> </div>
                <div className='div'> <img src={react}/> </div>
                <div className='div'> <img src={Js} /> </div>
                <div className='div'> <img src={Ts}/> </div>
            </div>
        </div>


        <div className='divProjetos'>
            <h3 className='TextConhecimentos'> Projetos<span>.</span></h3>
            <div className='cardprojetos'>
                
                <div className='card1'> 
                    <a href='#' className='Textcard1'> Visualizar projeto </a>
                </div>

                <div className='card2'> 
                    <a href='#' className='Textcard2'> Visualizar projeto </a>
                </div>

                <div className='card3'>
                    <a href='#' className='Textcard3'> Visualizar projeto </a> 
                </div>
            </div> 

            <a href='https://github.com/AnaCaroul?tab=repositories' className='roxo-p'> Repositórios no Github </a>
        </div>
    
    </>
 )
}

export default Conteiner;