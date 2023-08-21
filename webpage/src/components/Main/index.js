import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
        <div className="main-conteudo">
            <h1 className="titulo-main">Why Noni, not others</h1>
            <p className="paragrafo-main">There are many reasons to prefer Noni over other newsletters, and it’s impossible to list all of them. But for now, these four are enough to convince you</p>
            <p className="item-lista-main">Make Your Inbox Healthy <img src="arrow.png" alt="icone lista"  className="icon-lista"/></p>
            <p className="item-lista-main" >Written By The Greatest Of All<img className="icon-lista" src="arrow.png"/></p>
            <p className="item-lista-main">Unique and exclusive gift in every email<img src="arrow-2.png"  className="icon-lista"/></p>
            <p className="texto-lista-main">We sent unique and exlusive gift to each and every subscriber of Noni, no strings attached.</p>   
        </div>
        <div>
            <img className="imagem-hobby-main" src="hobby.svg"/>
        </div>
        </div>
    )
}   

export default Main;