import React from "react";
import logo2359 from "../images/logo-2359.jpeg";
import logoMi from "../images/logo-minerva.png";

export const About = () => {
    return (
        <section id="about" className="about pp-section pp-scrollable section">
            <div className="container">
                <div className="about-info">
                    <div className="title">
                        <h3>About me.</h3>
                    </div>
                    <div className="about-text">
                        <h3>
                            I'm a Front-end Developer with 1 year of experience.
                        </h3>
                        <p>
                            I'm a Front-end Developer with 1 years of
                            experience. I'm from HCM City. I code and create web
                            elements for amazing people around the world. Capable
                            to solve working problems. Passionate about learning
                            & development to reach the target. Eager to tackle
                            more complex problems and continue to find ways to
                            maximize user efficiency.
                        </p>
                    </div>
                </div>
                <div className="separated"></div>
                <div className="title">
                    <h3>Education & Skills</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 m-15px-tb">
                        <ul className="aducation-box">
                            <li>
                                <span>2016-2020</span>
                                <h6>Hutech University of Technology</h6>
                                <p>Software Technology</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-7 ml-auto m-15px-tb">
                        <div className="skills-box">
                            <h3>My skills</h3>
                            <p>
                                I'm a Front-end Developer with 1 year of
                                experience. I code and create web elements for
                                amazing people around the world. I like work
                                with new people. New people new Experiences.
                            </p>
                            <div className="skill-lt">
                                <h6>ReactJS</h6>
                            </div>
                            <div className="skill-lt">
                                <h6>HTML5/CSS</h6>
                            </div>
                            <div className="skill-lt">
                                <h6>JavaScript/Jquery</h6>
                            </div>
                            <div className="skill-lt">
                                <h6>Boostrap</h6>
                            </div>
                            <div className="skill-lt">
                                <h6>Git, Sourcetree, Zeplin, Figma</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separated"></div>
                <div className="title">
                    <h3>Experience.</h3>
                </div>
                <div className="resume-box">
                    <div className="resume-row">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-xl-2">
                                <div className="rb-left">
                                    <img src={logo2359} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-9 col-md-9 col-xl-10">
                                <div className="rb-right">
                                    <h6>Front-end IOS Developer</h6>
                                    <label>
                                        2359 Media | On-site | Jan 2021 - Mar
                                        2021
                                    </label>
                                    <div className="rb-time">Intern</div>
                                    <p>
                                        Build a Money Management App with Swift.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume-row">
                        <div className="row">
                            <div className="col-sm-3 col-md-3 col-xl-2">
                                <div className="rb-left">
                                    <img src={logoMi} title="" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-9 col-md-9 col-xl-10">
                                <div className="rb-right">
                                    <h6>Front-end ReactJS Developer</h6>
                                    <label>
                                        Minerva Technology Solutions | On-site |
                                        May 2021 - July 2022
                                    </label>
                                    <div className="rb-time">Full Time</div>
                                    <p>
                                        Real estate management website
                                        (ReactJs), Bank's internet banking
                                        system (VueJs)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
