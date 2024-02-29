/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/Team.css"
import chetana from "../assets/chetana.jpg";
import anushka from "../assets/anushka.jpg";
import mahesh from "../assets/mahesh.jpg";
function Team() {
    let message = `Doc-chain is a blockchain based application which can help users to upload ,share and verify their documents`;
    return (
        <section className="section-white">

            <div className=""
                style={
                    {width: "100%"}
            }>

                <div className="row"
                    style={
                        {marginRight: "none"}
                }>

                    <div className="col-md-12 text-center">

                        <h2 className="section-title">The Team Behind Doc-chain</h2>

                        <p className="section-subtitle">
                            {message}</p>

                    </div>

                    <div className="col-sm-6 col-md-4">

                        <div className="team-item">

                            <img src={anushka}
                                className="team-img"
                                alt="pic"/>
                            <h3>Anushka yadav</h3>
                            <div className="team-info">
                                <p>Team Member</p>
                            </div>
                            <p>A person with a strong foundation of Mathematics, Statistics and Programming. Proficient in R
                                Programming, Python, SQL, C and C++. I have been active participant in college fest and lead
                                the team doing so.
                            </p>

                            <a href="https://www.linkedin.com/in/anushka-yadav-044714238/">
                                <button className="btn btn-primary text-white">LinkedIn</button>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">

                        <div className="team-item">

                            <img src={chetana}
                                className="team-img"
                                alt="pic"/>

                            <h3>Chetana Agarwal</h3>

                            <div className="team-info">
                                <p>Team Member</p>
                            </div>

                            <p>To become a successful professional in the field of Information Technology by utilising my skills and enable further personal and professional development and work towards the prosperity of the organisation.</p>

                            <a href="https://www.linkedin.com/in/chetana-agarwal-a695b61b4/">
                                <button className="btn btn-primary text-white">LinkedIn</button>
                            </a>

                        </div>

                    </div>
                    <div className="col-sm-6 col-md-4">

                        <div className="team-item">

                            <img src={mahesh}
                                className="team-img"
                                alt="pic"/>

                            <h3>Mahesh Lode</h3>

                            <div className="team-info">
                                <p>Team Member</p>
                            </div>

                            <p>A highly technical and knowledgeable Mathematics and Computer Application graduate,seeking an
                                entry-level position in an organization that offers good growth prospects.</p>

                            <a href="https://www.linkedin.com/in/mahesh-lode/">
                                <button className="btn btn-primary text-white">LinkedIn</button>
                            </a>
                        </div>

                    </div>

                </div>

            </div>


        </section>
    )
}

export default Team;
