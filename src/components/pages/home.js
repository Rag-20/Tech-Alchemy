import React from "react";
import "../css/home.css"
import Cost from "../assets/image1.webp"
import DocImage from "../assets/document.png"
import Time from "../assets/time.png"
import Team from "../assets/team.jpg"
import alanBtn from "@alan-ai/alan-sdk-web";
import {useEffect, useRef} from "react";
import {animateScroll as scroll} from "react-scroll";
import Carousel from "./Carousel";
import Cards from "../pages/Cards";
function HomePage() {
    const alanBtnInstance = useRef(null);
    useEffect(() => {
        if (! alanBtnInstance.current) {
            alanBtnInstance.current = alanBtn({
                key: "1ba6ac7d2d088c254ec79d4979117cdc2e956eca572e1d8b807a3e2338fdd0dc/stage",
                onCommand: (commandData) => {
                    if (commandData.command === "gotoFaq") {
                        console.log("Scroll" + "  " + scroll);
                        scroll.scrollTo(`MuiPaper-${
                            commandData.qId
                        }`, {
                            duration: 800,
                            delay: 0,
                            smooth: "easeInOutQuart"
                        });
                    } else if (commandData.command === "openMyYoutube") {
                        window.open("https://www.youtube.com/channel/UCUW23SAYkrFQ9Z10vX4uHmQ", "_blank");
                    } else if (commandData.command === "openSourceCode") {
                        window.open("https://github.com/maheshlode/Doc-Chain-Chatbot", "_blank");
                    }
                }
            });
        }
    }, []);

    return (
        <div id="body">
            <div id="top">
                <div className="homeStyle">
                    <Carousel/>
                </div>
            </div>
            <Cards/> {/*-----------------ABOUT--------------------*/}

            <div className="container" id="about">

                <div className="row d-flex align-items-center">

                    <div className="col-lg-5 text-center"
                        style={
                            {color: "white"}
                    }>
                        <img className="img-fluid" id="teamImage"
                            src={Team}
                            alt="about"/>
                    </div>
                    <div className="col-lg-7"
                        style={
                            {color: "white"}
                    }>
                        <h2>
                            ABOUT US
                            <br/>
                        </h2>
                        <p>
                            As a team developing a blockchain-based verification system  with some
                                                        additional functionalities,we are committed to delivering a secure and
                                                        user-friendly platform that enables us to verify ,share data and transactions on the blockchain.
                                                        One of the most significant benefits of this system is that it eliminates the need for
                                                        intermediaries,such as banks or other third-party verification services.
                        </p>
                        <p>
                            Overall, a blockchain based system is a powerful tool for business and organizations
                                                        looking to enhance their security, streamline their operations, and increase trust
                                                        between stakeholders.
                        </p>

                        <div className="my-3">
                            <a className="btn bg-white" href="https://medium.com/@maheshlode55/what-is-blockchain-f4eeaa79572a">Learn More</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
