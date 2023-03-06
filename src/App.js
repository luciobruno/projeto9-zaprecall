import logo from "./assets/logo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flashcards from "./components/Flashcards";
import cards from "./components/Decks";
import React from "react";
import seta from "./assets/seta_virar.png";
import certo from "./assets/icone_certo.png";
import erro from "./assets/icone_erro.png";
import quase from "./assets/icone_quase.png";
import TelaInicial from "./components/TelaInicial";

export default function App() {

  const [concluidos,setConcluidos] = React.useState(0);
  const [deck,setDeck] = React.useState(cards);
  const [hiddenQuestion,setHiddenQuestion] = React.useState([]);
  const [hiddenAnswer,setHiddenAnswer] = React.useState([]);
  const [color, setColor] = React.useState([]);
  const [icon, setIcon] = React.useState([]);
  const [removerAcao,setRemoverAcao] = React.useState([]);
  const [dataTest,setDataTest] = React.useState([]);
  const [tela,setTela] = React.useState("flex");
  const [outrasTelas,setOutrasTelas] = React.useState("none");
  const [respostas, setRespostas] = React.useState([]);
  const [textoFinal,setTextoFinal] = React.useState("");
  const [seletorResposta,setSeletorResposta] = React.useState([]);

  return (
    <>
      <TelaInicial tela={tela} setTela={setTela} setOutrasTelas={setOutrasTelas} logo={logo}></TelaInicial>
      <Header outrasTelas={outrasTelas} logo={logo}></Header> 
      <Flashcards seletorResposta={seletorResposta} setSeletorResposta={setSeletorResposta} respostas={respostas} setRespostas={setRespostas} outrasTelas={outrasTelas} dataTest={dataTest} setDataTest={setDataTest} concluidos={concluidos} removerAcao={removerAcao} setRemoverAcao={setRemoverAcao} certo={certo} erro={erro} quase={quase} color={color} setColor={setColor} icon={icon} setIcon={setIcon} hiddenAnswer={hiddenAnswer} setHiddenAnswer={setHiddenAnswer} seta={seta}  hiddenQuestion={hiddenQuestion} setHiddenQuestion={setHiddenQuestion} setConcluidos={setConcluidos} deck={deck} setDeck={setDeck}></Flashcards>
      <Footer seletorResposta={seletorResposta} erro={erro} textoFinal={textoFinal} setTextoFinal={setTextoFinal} respostas={respostas} outrasTelas={outrasTelas} concluidos={concluidos} deck={deck}></Footer>
    </>
  );
}

