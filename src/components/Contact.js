import React from "react";

export const Contact = () => {
    return (
        <section
            id="contactus"
            className="contact pp-section pp-scrollable section"
        >
            <div className="container">
                <div className="title">
                    <h3>Get in touch.</h3>
                </div>
                <div className="contact-info">
                    <h4>Get in touch</h4>
                    <p>
                        Always available for freelancing if the right project
                        comes along, Feel free to contact me.
                    </p>
                    <ul>
                        <li className="media">
                            <i className="ti-map"></i>
                            <span className="media-body">
                                Hà Đặc, Trung Mỹ Tây, Quận 12, Thành Phố Hồ Chí Minh
                            </span>
                        </li>
                        <li className="media">
                            <i className="ti-email"></i>
                            <span className="media-body">dangquang.180898@gmail.com</span>
                        </li>
                        <li className="media">
                            <i className="ti-mobile"></i>
                            <span className="media-body">0353128877</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
