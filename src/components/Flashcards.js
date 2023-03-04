import styled from "styled-components";

export default function Flashcards() {
    return (
        <ContainerFlashcards>
            <ContainerFlashcard>
                <TextFlashcard>Pergunta 1</TextFlashcard>
                <ion-icon name="play-outline"></ion-icon>
            </ContainerFlashcard>
            <ContainerFlashcard>
                <TextFlashcard>Pergunta 2</TextFlashcard>
                <ion-icon name="play-outline"></ion-icon>
            </ContainerFlashcard>
            <ContainerFlashcard>
                <TextFlashcard>Pergunta 3</TextFlashcard>
                <ion-icon name="play-outline"></ion-icon>
            </ContainerFlashcard>
            <ContainerFlashcard>
                <TextFlashcard>Pergunta 4</TextFlashcard>
                <ion-icon name="play-outline"></ion-icon>
            </ContainerFlashcard>
        </ContainerFlashcards>
    );
}

const ContainerFlashcards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ContainerFlashcard = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin-bottom: 25px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & ion-icon{
        width: 28px;
        height: 28px;
        margin-right: 15px;
    }
`

const TextFlashcard = styled.div`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-left: 15px;
`