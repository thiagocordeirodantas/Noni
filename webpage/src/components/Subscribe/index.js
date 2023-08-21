import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="container-subscribe">
            <section className="subscribe-conteudo">
                <h1 className="titulo-subscribe">Subscribe</h1>
                <p className="subtitulo-subscribe">Yay! You made it to the end. Means you like what we do.</p>
            </section>
            <div className="subscribe-input-container">
            <section className="subscribe-input-conteudo">
                <input type="email" placeholder="Enter your email address" className="input-subscribe"/>
                <a href="" className="link-subscribe">Subscribe</a>
            </section>
            </div>
        </div>
    )
}

export default Subscribe;