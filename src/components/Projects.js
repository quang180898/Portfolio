import React from "react";
import projectShoes from "../images/web-shoes.jpg";

export const Projects = () => {

    return (
        <section
            id="projects"
            className="projects pp-section pp-scrollable section"
        >
            <div className="container">
                <div className="title">
                    <h3>Projects</h3>
                </div>
                <div className="col-md-6 m-15px-tb">
                    <div className="blog-grid">
                        <div className="blog-img">
                            <a href="https://github.com/quang180898/TongHop_Frontend/tree/quang_dev">
                                <img src={projectShoes} alt="shoes" />
                            </a>
                        </div>
                        <div className="blog-info">
                            <h6>
                                <a href="https://github.com/quang180898/TongHop_Frontend/tree/quang_dev">Web store shoes</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
