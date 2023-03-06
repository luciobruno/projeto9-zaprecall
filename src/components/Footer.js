import styled from "styled-components"; 

export default function Footer({seletorResposta,erro,deck,concluidos,outrasTelas,respostas,textoFinal,setTextoFinal}) {

    function finalization(){
        if(concluidos === deck.length){
            if(respostas.includes(erro)){
                setTextoFinal(`Putz! Ainda faltam alguns...Mas não desanime!`);
            }else{
                setTextoFinal(`Parabéns! Você não esqueceu de nenhum flashcard!`);
            }
        }
    }

    return (
        <ContainerFooter data-test="footer" outrasTelas={outrasTelas}>
            <div data-test="finish-text"><p>{textoFinal}</p></div>
            {concluidos}/{deck.length} CONCLUÍDOS
            <div onChange={finalization()}>{respostas.map((respostas,index) => <img data-test={seletorResposta[index]} key={index} src={respostas} alt={respostas}></img>)}</div>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    padding-top: 16px;
    padding-bottom: 6px;
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    display: ${props => props.outrasTelas};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    & div:first-child{
        margin-bottom: 11px;
        width: 270px;
        text-align: center;
    }
    & div{
        margin-top: 5px;
    }
`
