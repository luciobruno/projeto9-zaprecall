import styled from "styled-components"; 

export default function Footer({deck,concluidos,outrasTelas}) {

    return (
        <ContainerFooter data-test="footer" outrasTelas={outrasTelas}>{concluidos}/{deck.length} CONCLUÍDOS</ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0px;
    display: ${props => props.outrasTelas};
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`
