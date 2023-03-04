import styled from "styled-components";

export default function Header({ logo }) {
    return (
        <ContainerHeader>
            <img src={logo} alt={logo}></img>
            <div>ZapRecall</div>
        </ContainerHeader>
    );
}

const ContainerHeader = styled.div`
    margin-top: 42px;
    display: flex;
    justify-content: center;
    margin-bottom: 51px;
    & img {
    width: 52px;
    height: 60px;
    }
    & div {
    margin-left: 25px;
    width: 203px;
    font-family: 'Righteous', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    transform: rotate(0.58deg);
}
`