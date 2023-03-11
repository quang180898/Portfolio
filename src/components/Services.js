import React from "react";

export const Services = () => {
    return (
        <section
            id="services"
            className="services pp-section pp-scrollable section"
        >
            <div className="container">
                <div className="title">
                    <h3>What I do?</h3>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-15px-tb">
                        <div className="feature-box-01 media">
                            <i className="icon fab fa-react"></i>
                            <div className="feature-content media-body">
                                <h5>Front-end Development</h5>
                                <p>
                                    As a Front-end developer, I would love to
                                    develope any front-end application using
                                    React and its libraries.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 m-15px-tb">
                        <div className="feature-box-01 media">
                            <i className="icon fas fa-palette"></i>
                            <div className="feature-content media-body">
                                <h5>Web Design</h5>
                                <p>
                                    I also provide Fully Responsive Static
                                    Website Design with HTML, CSS, Bootstrap,
                                    Tailwind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
