import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navSize, setnavSize] = useState("10rem");
    const [ribbon, setribbon] = useState("4rem");
    const [navColor, setnavColor] = useState("transparent");
    const [navItemColor, setnavItemColor] = useState("#fff");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
        window.scrollY > 10 ? setnavColor("#fff") : setnavColor("#fff");
        window.scrollY > 10 ? setnavItemColor("#012049") : setnavItemColor("#fff");
        window.scrollY > 10 ? setribbon("0rem") : setribbon("4rem");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div>

            <header>
                <div id="ribbon-container" style={{height: ribbon}} >
                    <span class="ribbon-promo hide-below-768">15% OFF EVERYTHING  until end of the month.</span><span class="bi-txt-info uppercase hide-below-768">&nbsp;Use code: 15FF51</span>
                </div>
                <div
                    className="Navbar"
                    id="nav"
                    style={{
                        backgroundColor: navColor,
                        color: navItemColor,
                        height: navSize,
                        transition: "all 1s",
                    }}
                >
                    <span className="nav-logo" id="nav-logo">
                        <Link to="/#">
                            <img data-src="https://static.basicinvite.com/skin/frontend/basicinvite/default/images/mobile-logo.png" alt="Basic Invite" class=" lazyloaded" height="40" width="150" src="https://static.basicinvite.com/skin/frontend/basicinvite/default/images/mobile-logo.png" />
                        </Link>
                    </span>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <HashLink to="/blog/#blog"><span>Wedding</span></HashLink>
                        <Link to="/about/#about"><span>Grad</span></Link>
                        <HashLink to="/product/#product">BABY</HashLink>
                        <HashLink to="/contact/#contact">EVENTS</HashLink>
                        <HashLink to="/contact/#contact"><span>Stationery</span></HashLink>
                        <HashLink to="/contact/#contact"><span>Websites</span></HashLink>
                        <HashLink to="/contact/#contact"><span>Walls</span></HashLink>
                        <span>
                            
                        </span>
                    </div>
                    <div>
                        {/* <HashLink to="/contact/#contact"><span>Websites</span></HashLink>
                        <HashLink to="/contact/#contact"><span>Walls</span></HashLink> */}
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
            </header>



            <br />
            <br />
            <br />
            <section id="about">
                <div class="container" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-6 about-img">
                            <img fetchpriority="high" src="https://www.basicinvite.com/media/wysiwyg/2022/BI/Homepage/banner_primary_desktop_optimized.jpg" alt="Shop our super" height="560" width="670" />
                        </div>

                        <div class="col-lg-6 content" id="right-text">
                            <span class="right-text colored-bg">
                                <h1 class="title-text hide-below-768">Everything for your invitations in one place.</h1>
                                <h3 class="info-text hide-below-768">with FREE address printing<br />and fast shipping on<br />every order</h3>
                                <a href="/wedding/wedding-invitations.html" class="btn btn-link holiday"><span>Shop Invitations</span></a>
                                <div class="photo-info">
                                    <a>sweet grass clear invitations</a>
                                    <p>real customer photo by @me_weddings</p>
                                </div>
                            </span>

                        </div>
                    </div>

                </div>
            </section>

            <br />
            <section class="page-links-widget">

                <a class="page-link" href="/websites/wedding.html">Websites</a>

                <a class="page-link" href="/wedding/save-the-date.html">Save the Dates</a>

                <a class="page-link" href="/wedding/wedding-invitations.html">Invitations</a>

                <a class="page-link" href="/wedding/wedding-invitations/seal-and-send-wedding-invitations.html">Seal &amp;Sends</a>

                <a class="page-link" href="/wedding/wedding-invitations/clear-wedding-invitations.html">Clear Invites</a>

                <a class="page-link" href="/wedding/wedding-day/guest-books.html">Guest Books</a>

            </section>

            <br />
        </div>
    );
};

export default Header;
