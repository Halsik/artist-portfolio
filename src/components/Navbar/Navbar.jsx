import React, {useState} from "react";
import './Navbar.css'
import facebook from '../images/Navbar/facebook.png'
import instagram from '../images/Navbar/instagram.png'
import { Link } from 'react-router-dom';


function Navbar(props) {

    const [modal, setModal] = useState(false)
    // const [theme, setTheme] = useState(props.theme)

    // const toggleTheme = () => {
    //     setTheme(!theme)
    //     console.log(theme)
    // }

    const showModal = () => {
        setModal(prevModal => !prevModal)
    }

    const burgerFirstStyles = {
        opacity: modal ? "0" : "1"
    }

    const burgerSecondStyles = {
        transform: modal ? "rotate(-130deg) translateY(0px)" : "",
        
    }

    const burgerThirdStyles = {
        transform: modal ? "rotate(130deg) translateY(7px) translateX(-8px)" : "",
       
    }

    // const lightThemeBack = {
    //     backgroundColor: theme ? "#090909" : "white",
        
    // }

    // const lightThemeText = {
    //     color: theme ? "white" : "#090909"
    // }

    return(
        <div className="navbar-container">
            <div className="navbar-left">
                <button  onClick={showModal} className="navbar-burger">
                    <div style={burgerFirstStyles} className="line"></div>
                    <div style={burgerSecondStyles} className="line"></div>
                    <div style={burgerThirdStyles} className="line"></div>
                </button>
                <Link className="router" to='/about'>
                <p  className="navbar-link">About me</p>
                </Link>
                <Link className="router" to='/portfolio'>
                <p className="navbar-link">Portfolio</p>
                </Link>
                <Link className="router" to='/contact'>
                <p className="navbar-link">Contact</p>
                </Link>
            </div>
            <div className="navbar-center"><Link className="link" to='/'><h1 className="navbar-header">Jane Doe</h1></Link></div>
            <div className="navbar-right">
                <img className="navbar-icon" src={facebook}/>
                <img className="navbar-icon" src={instagram}/>
                {/* <p onClick={toggleTheme}>Change</p> */}
            </div>
           {modal && (<div className="navbar-modal">
                <Link to='/about'>
                <p className="navbar-link-modal">About me</p>
                </Link>
                <Link to='/portfolio'>
                <p className="navbar-link-modal">Portfolio</p>
                </Link>
                <Link to='/contact'>
                <p className="navbar-link-modal">Contact</p>
                </Link>
           </div>)} 
        </div>
    )
}


export default Navbar