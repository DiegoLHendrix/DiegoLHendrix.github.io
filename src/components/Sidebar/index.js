import './index.scss'
import {Link, NavLink} from "react-router-dom";
import LogoD2 from '../../MyImages/LogoD2.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComputer,
    faDiagramProject,
    faEnvelope,
    faFolderClosed,
    faHome, faRobot,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoD2} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Diego"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className={"about-link"} to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className={"contact-link"} to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            {/*<NavLink exact="true" activeclassname="active" className={"projects-link"} to="/projects">*/}
            {/*    <FontAwesomeIcon icon={faFolderClosed} color="#4d4d4e" />*/}
            {/*</NavLink>*/}
        </nav>
        <ul>
            <li>
                <a target="_blank"//GitHub icon and link
                   rel='noreferrer'
                   href='https://github.com/DiegoLHendrix'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank"//LinkedIn icon and link
                   rel='noreferrer'
                   href='https://www.linkedin.com/in/diego-lopez-693a46234/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar