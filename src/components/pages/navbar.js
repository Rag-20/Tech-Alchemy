import React, {useState} from 'react';
// import {ethers} from 'ethers';
import {NavLink} from "react-router-dom";
import "../css/navbar.css";
function NavBar() {
    const [account, setAccount] = useState('');
    const [click, setClick] = useState(false);
    window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
        setAccount(accounts[0]);
    })
    console.log(account)
    const handleClick = () => setClick(!click);
    let navbarLinks;
    if (account == '0x4782b7c76f1a86f763cc229f11087241ffdc2143') {
        navbarLinks = (
            <>
                <li className="nav-item">
                    <NavLink exact to="/admin"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        Admin
                    </NavLink>
                </li>
            </>
        );
    } else if (account == '0xbf2a196909ef5ffb9c297dac70a019135baff5ca' || account == '0x3e071ec1098f29964fec1593e6ca2fb748b07f38' || account == '0x32f26b3485bd52c3b024e76ffb41f5ed4c2b6ef8' || account == '0x93ab21d90da19efa2f7b13d5d4d8578307e0fac1') {
        navbarLinks = (
            <>
                <li className="nav-item">
                    <NavLink exact to="/exporter"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        Upload
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/verify"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        Verify
                    </NavLink>
                </li>
            </>
        )
    } else {
        navbarLinks = (
            <>
                <li className="nav-item">
                    <NavLink exact to="/upload"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        Upload
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/display"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        View
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/share"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        Share
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/verify"
                        className={
                            ({isActive}) => (isActive ? "active" : "nav-links")
                        }
                        onClick={handleClick}>
                        Verify
                    </NavLink>
                </li>
            </>
        );
    }
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/home" className="nav-logo">
                        <p id="title">Doc<span id="chain">-Chain</span>
                        </p>
                    </NavLink>
                    <ul className={
                        click ? "nav-menu active" : "nav-menu"
                    }>
                        <li className="nav-item">
                            <NavLink exact to="/home"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        {navbarLinks}
                        <li className="nav-item">
                            <NavLink exact to="/profile"
                                className={
                                    ({isActive}) => (isActive ? "active" : "nav-links")
                                }
                                onClick={handleClick}>
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon"
                        onClick={handleClick}>
                        <i className={
                            click ? "fas fa-times" : "fas fa-bars"
                        }></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
