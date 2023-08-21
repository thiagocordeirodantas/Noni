import Artigo from "./components/Artigo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navegacao from "./components/Navegacao";
import Noticias from "./components/Noticias";
import Subscribe from "./components/Subscribe";

function App() {
  return (
   <div>
      <Navegacao/>
      <Header/>
      <Artigo/>
      <Main/>
      <Noticias/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
