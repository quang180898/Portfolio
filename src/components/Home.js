import React from "react";
import avatar from "../images/avatar_cropped.png";
import { TypeAnimation } from "react-type-animation";
import CV from "../images/CV_Nguyen_Dang_Quang_Frontend-Developer.pdf"

export const Home = () => {
    return (
        <section id="home" className="home pp-section pp-scrollable">
            <div className="home-banner">
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-lg-6">
                            <div className="type-box">
                                <h6>Hello, I am</h6>
                                <h1 className="font-alt">Nguyễn Đăng Quang</h1>
                                <p className="lead">
                                    {" "}
                                    <TypeAnimation
                                        sequence={[
                                            "ReactJS Developer",
                                            2000,
                                            "Web Developer",
                                            2000,
                                        ]}
                                        wrapper="span"
                                        className="subtitle subtitle-typed"
                                        cursor={true}
                                        repeat={Infinity}
                                    />
                                </p>
                                <p className="desc">
                                    I am a front-end developer. I am very
                                    passionate to my work and dedicated to
                                    explore new tools and technologies.
                                </p>
                                <div className="btn-bar">
                                    <a
                                        className="px-btn px-btn-theme"
                                        href={CV}
                                    >
                                        Donwload CV
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hb-img">
                                <img src={avatar} alt="avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
