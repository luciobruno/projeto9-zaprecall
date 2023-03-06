import styled from "styled-components";

export default function Flashcards({ dataTest,setDataTest,concluidos,setConcluidos,setRemoverAcao, removerAcao, quase, erro, certo, setIcon, setColor, icon, color, hiddenAnswer, setHiddenAnswer, seta, deck, setDeck, hiddenQuestion, setHiddenQuestion }) {

    function naoLembrei(index, card) {
        if (icon.length === 0) {
            let listaIcon = [];
            let listaColor = [];
            let listaDataTest = [];
            for (let i = 0; i < deck.length; i++) {
                listaIcon.push("");
                listaColor.push("#333333");
                listaDataTest.push("");
            }
            listaColor[index] = "#FF3030";
            setColor(listaColor);
            listaIcon[index] = erro;
            setIcon(listaIcon);
            listaDataTest[index] = "no-icon";
            setDataTest(listaDataTest);
            let listaAnswer = [...hiddenAnswer];
            listaAnswer = listaAnswer.splice(listaAnswer.indexOf(card.answer), 0);
            setHiddenAnswer(listaAnswer);
            setRemoverAcao([...removerAcao, index]);
            setConcluidos(concluidos+1);
        } else {
            let mudarCor = [...color];
            mudarCor[index] = "#FF3030";
            setColor(mudarCor);
            let listaIcon = [...icon];
            listaIcon[index] = erro;
            setIcon(listaIcon);
            let listaDataTest = [...dataTest];
            listaDataTest[index] = "no-icon";
            setDataTest(listaDataTest)
            let listaAnswer = [...hiddenAnswer];
            listaAnswer = listaAnswer.splice(listaAnswer.indexOf(card.answer), 0);
            setHiddenAnswer(listaAnswer);
            setRemoverAcao([...removerAcao, index]);
            setConcluidos(concluidos+1);
        }
    }

    function quaseNaoLembrei(index, card) {
        if (icon.length === 0) {
            let listaIcon = [];
            let listaColor = [];
            let listaDataTest = [];
            for (let i = 0; i < deck.length; i++) {
                listaIcon.push("");
                listaColor.push("#333333");
                listaDataTest.push("");
            }
            listaColor[index] = "#FF922E";
            setColor(listaColor);
            listaIcon[index] = quase;
            setIcon(listaIcon);
            listaDataTest[index] = "partial-icon";
            setDataTest(listaDataTest);
            let listaAnswer = [...hiddenAnswer];
            listaAnswer = listaAnswer.splice(listaAnswer.indexOf(card.answer), 0);
            setHiddenAnswer(listaAnswer);
            setRemoverAcao([...removerAcao, index]);
            setConcluidos(concluidos+1);
        } else {
            let mudarCor = [...color];
            mudarCor[index] = "#FF922E";
            setColor(mudarCor);
            let listaIcon = [...icon];
            listaIcon[index] = quase;
            setIcon(listaIcon);
            let listaDataTest = [...dataTest];
            listaDataTest[index] = "partial-icon";
            setDataTest(listaDataTest)
            let listaAnswer = [...hiddenAnswer];
            listaAnswer = listaAnswer.splice(listaAnswer.indexOf(card.answer), 0);
            setHiddenAnswer(listaAnswer);
            setRemoverAcao([...removerAcao, index]);
            setConcluidos(concluidos+1);
        }
    }

    function zap(index, card) {
        if (icon.length === 0) {
            let listaIcon = [];
            let listaColor = [];
            let listaDataTest = [];
            for (let i = 0; i < deck.length; i++) {
                listaIcon.push("");
                listaColor.push("#333333");
                listaDataTest.push("");
            }
            listaColor[index] = "#2FBE34";
            setColor(listaColor);
            listaIcon[index] = certo;
            setIcon(listaIcon);
            listaDataTest[index] = "zap-icon";
            setDataTest(listaDataTest);
            let listaAnswer = [...hiddenAnswer];
            listaAnswer = listaAnswer.splice(listaAnswer.indexOf(card.answer), 0);
            setHiddenAnswer(listaAnswer);
            setRemoverAcao([...removerAcao, index]);
            setConcluidos(concluidos+1);
        } else {
            let mudarCor = [...color];
            mudarCor[index] = "#2FBE34";
            setColor(mudarCor);
            let listaIcon = [...icon];
            listaIcon[index] = certo;
            setIcon(listaIcon);
            let listaDataTest = [...dataTest];
            listaDataTest[index] = "zap-icon";
            setDataTest(listaDataTest)
            let listaAnswer = [...hiddenAnswer];
            listaAnswer = listaAnswer.splice(listaAnswer.indexOf(card.answer), 0);
            setHiddenAnswer(listaAnswer);
            setRemoverAcao([...removerAcao, index]);
            setConcluidos(concluidos+1);
        }
    }

    function mostrarPergunta(card) {
        const listaQuestion = [...hiddenQuestion, card.question];
        setHiddenQuestion(listaQuestion);
    }

    function mostrarResposta(card) {
        const listaAnswer = [...hiddenAnswer, card.answer];
        let listaQuestion = [...hiddenQuestion];
        listaQuestion = listaQuestion.splice(listaQuestion.indexOf(card.question), 0);
        setHiddenAnswer(listaAnswer);
        setHiddenQuestion(listaQuestion);
    }

    function Flashcard({ card, index }) {
        return (
            <>
                <ContainerFlashcard data-test="flashcard" removerAcao={removerAcao} icon={icon} index={index} hiddenAnswer={hiddenAnswer} cardAnswer={card.answer} cardQuestion={card.question} hiddenQuestion={hiddenQuestion}>
                    <TextFlashcard icon={icon} index={index} color={color} cardAnswer={card.answer} hiddenAnswer={hiddenAnswer} cardQuestion={card.question} hiddenQuestion={hiddenQuestion}>
                        <p data-test="flashcard-text">Pergunta {index + 1}</p>
                        <img data-test={dataTest[index]} src={(icon.length === 0) ? "" : icon[index]} alt={icon[index]}></img>
                    </TextFlashcard>
                    <TextFlashcardQuestion cardQuestion={card.question} hiddenQuestion={hiddenQuestion}>
                        <div data-test="flashcard-text">{card.question}</div>
                        <img data-test="turn-btn" onClick={() => mostrarResposta(card)} src={seta} alt={seta}></img>
                    </TextFlashcardQuestion>
                    <TextFlashCardAnswer cardAnswer={card.answer} hiddenAnswer={hiddenAnswer}>
                        <div data-test="flashcard-text">{card.answer}</div>
                        <button data-test="no-btn" onClick={() => naoLembrei(index, card)}>Não lembrei</button>
                        <button data-test="partial-btn" onClick={() => quaseNaoLembrei(index, card)}>Quase não lembrei</button>
                        <button data-test="zap-btn" onClick={() => zap(index, card)}>Zap!</button>
                    </TextFlashCardAnswer>
                    <ion-icon data-test="play-btn" onClick={() => mostrarPergunta(card)} name="play-outline"></ion-icon>
                </ContainerFlashcard>
            </>
        );
    }

    return (
        <ContainerFlashcards>
            {deck.map((card, index) => <Flashcard key={index} card={card} index={index} />)}
        </ContainerFlashcards>
    );
}

const ContainerFlashcards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & div:last-child{
        margin-bottom: 100px;
    }
`

const ContainerFlashcard = styled.div`
    width: 300px;
    height: ${props => (!props.hiddenQuestion.includes(props.cardQuestion) && !props.hiddenAnswer.includes(props.cardAnswer)) ? "65px" : "auto"};
    background-color: ${props => (!props.hiddenQuestion.includes(props.cardQuestion) && !props.hiddenAnswer.includes(props.cardAnswer)) ? "#FFFFFF" : "#FFFFD4"};
    margin-bottom: 25px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: ${props => (!props.hiddenQuestion.includes(props.cardQuestion) && !props.hiddenAnswer.includes(props.cardAnswer)) ? "center" : ""};
    justify-content: space-between;
    flex-wrap: wrap;
    & ion-icon{
        width: 28px;
        height: 28px;
        margin-right: 15px;
        display: ${props => (props.hiddenQuestion.includes(props.cardQuestion) || props.hiddenAnswer.includes(props.cardAnswer) || props.removerAcao.includes(props.index)) ? "none" : ""};
    }
`

const TextFlashcard = styled.div`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => (props.color.length === 0) ? "#333333" : props.color[props.index]};
    text-decoration: ${props => (props.color.length === 0 || props.color[props.index] === "#333333") ? "none" : "line-through"};
    margin-left: 15px;
    display: ${props => (!props.hiddenQuestion.includes(props.cardQuestion) && !props.hiddenAnswer.includes(props.cardAnswer)) ? "flex" : "none"};  
    justify-content: space-between;
    & img{
        width: 28px; 
        height: 28px;
        margin-right: 15px;
        margin-left: 153px;
        display: ${props => (props.icon.length === 0 || props.icon[props.index] === "") ? "none" : ""} ;
    }
    `

const TextFlashcardQuestion = styled.div`
    margin-top: 10px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-left: 15px;
    margin-right: 15px;
    display: ${props => props.hiddenQuestion.includes(props.cardQuestion) ? "" : "none"};
    justify-content: space-between;
    & img{
        width: 30px;
        height: 20px;
        margin-left: 244px;
        margin-top: 10px;
    }
`

const TextFlashCardAnswer = styled.div`
    height: auto;    
    margin-top: 10px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin-left: 15px;
    margin-right: 15px;    
    display: ${props => props.hiddenAnswer.includes(props.cardAnswer) ? "flex" : "none"};
    flex-wrap: wrap;
    & button{
        width: 80px;
        height: 37px;
        margin-left: 8px;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        margin-bottom: 10px;
        margin-top: 30px;
    }
    & div:first-child{
        width: 280px;
    }
    & button:nth-child(2){
        background: #FF3030;
    }
    & button:nth-child(3){
        background: #FF922E;
    }
    & button:nth-child(4){
        background: #2FBE34;
    }
`