import logo from "./assets/logo.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Flashcards from "./components/Flashcards";

export default function App() {
  return (
    <>
      <Header logo={logo}></Header> 
      <Flashcards></Flashcards>
      <Footer></Footer>
    </>
  );
}

