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

export default function App() {

  const [concluidos,setConcluidos] = React.useState(0);
  const [deck,setDeck] = React.useState(cards);
  const [hiddenQuestion,setHiddenQuestion] = React.useState([]);
  const [hiddenAnswer,setHiddenAnswer] = React.useState([]);
  const [color, setColor] = React.useState([]);
  const [icon, setIcon] = React.useState([]);
  const [removerAcao,setRemoverAcao] = React.useState([]);

  return (
    <>
      <Header logo={logo}></Header> 
      <Flashcards concluidos={concluidos} removerAcao={removerAcao} setRemoverAcao={setRemoverAcao} certo={certo} erro={erro} quase={quase} color={color} setColor={setColor} icon={icon} setIcon={setIcon} hiddenAnswer={hiddenAnswer} setHiddenAnswer={setHiddenAnswer} seta={seta}  hiddenQuestion={hiddenQuestion} setHiddenQuestion={setHiddenQuestion} setConcluidos={setConcluidos} deck={deck} setDeck={setDeck}></Flashcards>
      <Footer concluidos={concluidos} deck={deck}></Footer>
    </>
  );
}

