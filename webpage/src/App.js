import Artigo from "./components/Artigo";
import Header from "./components/Header";
import Main from "./components/Main";
import Navegacao from "./components/Navegacao";
import Noticias from "./components/Noticias";

function App() {
  return (
   <div>
      <Navegacao/>
      <Header/>
      <Artigo/>
      <Main/>
      <Noticias/>
    </div>
  );
}

export default App;
