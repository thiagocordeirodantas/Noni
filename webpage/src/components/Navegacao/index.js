import './Navegacao.css';

const Navegacao = () => {
    return (
        <div className="navegacao-container">
            <section>
                <h2 className="titulo-navegacao">Noni</h2>
            </section>
            <section>
                <a href="#" className="link-navegacao">Home</a>
                <a href="#" className="link-navegacao">Why us?</a>
                <a href="#" className="link-navegacao">Reviews</a>
                <a href="#" className="link-navegacao">Issues</a>
                <a href="#" className="link-navegacao">Contact</a>
            </section>
            <section >
                <a href="" className="icon-navegacao"><img className="icon-imagem-navegacao"  src="Vector.png" alt="icon facebook"/></a>
                <a href="" className="icon-navegacao"><img src="twitter 1.svg" alt="icon twitter"/></a>
                <a href="" className="icon-navegacao"><img  src="linkedin 1.svg" alt="icon linkedin"/></a>
            </section>
        </div>
    )
}


export default Navegacao;