import React, {useState} from "react";
import '../css/Footer.css';
import "../css/navbar.css";
import {FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';

const Footer = () => {
    const [click, setClick] = useState(false);
    return (
        <>
            <footer>
                <div className="">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-4 col-lg-3" id="company">
                                    <h4>Company</h4>
                                    <a href="/team" className="links">Team</a>
                                    <br></br>
                                    <a href="/review" className="links">Review Us</a>
                                </div>

                                <div className="col-sm-7">
                                    <h4>Doc-Chain</h4>
                                    <p>
                                        The Doc-Chain platform is leading Document verification platform designed to bring efficiency and security to your operations
                                    </p>
                                </div>

                                <div className="col-sm-2">
                                    <h4>Follow Us</h4>
                                    <a className="icons" href="https://www.linkedin.com/in/anushka-yadav-044714238/"><FaTwitter/></a>
                                    <a className="icons" href="https://www.linkedin.com/in/chetana-agarwal-a695b61b4/"><FaInstagram/></a>
                                    <a className="icons" href="https://www.linkedin.com/in/mahesh-lode/"><FaFacebook/></a>
                                </div>
                            </div>
                            <hr/>
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">
                                    Copyright @ 2023 Doc-Chain. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
