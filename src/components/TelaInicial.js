import styled from "styled-components"; 

export default function TelaInicial({ logo, tela, setTela, setOutrasTelas }) {

    function iniciar(){
        setOutrasTelas("flex");
        setTela("none")
    }

    return (
        <ContainerTelaInicial tela={tela}>
            <img src={logo} alt="telaInicial"></img>
            <div>ZapRecall</div>
            <button data-test="start-btn" onClick={()=>iniciar()}>Iniciar Recall!</button>
        </ContainerTelaInicial>
    );
}

const ContainerTelaInicial = styled.div`
    display: ${props => props.tela};
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    & div{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-top: 13px;
    }
    & img{
        width: 136px;
        height: 161px;
    }
    & button{
        margin-top:30px ;
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #D70900;
    }
`
