import './Header.css';

const Header = () => {
    return (
        <div className="header-container">

            <section className="header-container-titulo">
                <h1 className="titulo-header">The Most Quirky Writings Delivered Right To Your Inbox</h1>
            </section>

            <div className="container-input-header">

            <section className="header-container-conteudo-input">
                <input type="email" name="email" id="email" placeholder="Enter your email address"  className="input-header"/>
                <a href="" className="link-input-header">Subscribe</a>
            </section>
        </div>
            <section className="icones-patrocinio">
                <img className="icones-patrocinio-item" src="Group 57.svg" alt="imagem"/>
                <img className="icones-patrocinio-item" src="Group 58.svg" alt="imagem"/>
                <img className="icones-patrocinio-item" src="Group 59.svg" alt="imagem"/>

                <img className="icones-patrocinio-item" src="Vector.svg" alt="imagem"/>
            </section>
        </div>
    )
}

export default Header;