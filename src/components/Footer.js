import ReactImg from '../img/React.png'
import SassImg from '../img/Sass.png'

const Footer = () => {
    return <div className="footer">
        <p className="footerText">
        This site does not store any personal information
        </p>
        <p className="footerText">
        Built with <img src={ReactImg} alt="react" className="react"/> and styled with <img src={SassImg} alt="sass" className="sass" />
        </p>
        <p className="footerText">
        Check my github <a href="https://github.com/ShaumikRahman">here</a>
        </p>
    </div>
}

export default Footer