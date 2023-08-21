import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div>
                <h1 className="titulo-footer">Noni</h1>
            </div>
            <div>
                <a href="#"  className="link-footer">About</a>
                <a href="#"  className="link-footer">Team</a>
                <a href="#"  className="link-footer">Careers</a>
                <a href="#"  className="link-footer">Contact</a>
            </div>
            <div className="footer-icons">
                <a href="" className="icon-navegacao-footer"><img className="icon-imagem-navegacao"  src="Vector.png" alt="icon facebook"/></a>
                <a href="" className="icon-navegacao-footer"><img src="twitter 1.svg" alt="icon twitter"/></a>
                <a href="" className="icon-navegacao-footer"><img  src="linkedin 1.svg" alt="icon linkedin"/></a>
            </div>
        </div>
    )
}

export default Footer;