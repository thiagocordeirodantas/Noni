import './Noticias.css';


const Noticias = () => {
    return (
        <div className="noticias-container">
        <section className="noticias-conteudo">
            <h1 className="titulo-noticias-main">Still not in, look at these issues</h1>
            <p className="paragrafo-noticias-main">We release a new issue every week, some of them are emotional while other are inspiring. If you want to get a taste of our newsletter, you can read our these previous issue.</p>
        </section>
        <div className="aa">
        <section className="card-container">
            <aside className="card-conteudo">
                <img className="card-1-noticias" src="img--1.png"/>
                <h2 className="titulo-card">Why Design is the key to Winning the Presidential Election</h2>
                <a href="#" className="card-link">Read Now..</a>
            </aside>
            <aside className="card-conteudo">
                <img className="card-2-noticias" src="img--2.png"/>
                <h2 className="titulo-card">Why Design is the key to Winning the Presidential Election</h2>
                <a href="#" className="card-link">Read Now..</a>
            </aside>
            <aside className="card-conteudo">
                <img className="card-3-noticias" src="img--3.png"/>
                <h2 className="titulo-card">Why Design is the key to Winning the Presidential Election</h2>
                <a href="#" className="card-link">Read Now..</a>
            </aside>
        </section>  
        </div>
    </div>
    )
}

export default Noticias;