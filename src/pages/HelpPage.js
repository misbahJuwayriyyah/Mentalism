import React, { useEffect } from 'react';
import '../Css/style.css';
import { Link } from 'react-router-dom';
const HelpPage = () => {
    useEffect(() => {
        const preloader = document.getElementById('loader');
        preloader.style.display = 'none';

        const body = document.querySelector('body');
        const menu = document.querySelector('.menu-list');
        const menuBtn = document.querySelector('.menu-btn');
        const cancelBtn = document.querySelector('.cancel-btn');

        menuBtn.onclick = () => {
            menu.classList.add('active');
            menuBtn.classList.add('hide');
            cancelBtn.classList.add('show');
            body.classList.add('disabledScroll');
        };

        cancelBtn.onclick = () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('hide');
            cancelBtn.classList.remove('show');
            body.classList.remove('disabledScroll');
        };
    }, []);

    return (
        <body>
            <div id="loader"></div>
            <header>
                <img src="/Images/Logo1.jpeg" alt="Mentalism" style={{ height: "120px", width: "120px", marginLeft: "5rem", marginTop: "6px" }} />
                <nav className="navbar" style={{ width: "750px", height: "60px" }}>
                    <div align="center" className="content" style={{ paddingTop: "4px" }}>
                        <ul className="menu-list">
                            <div className="icon cancel-btn">
                                <i className="fas fa-times"></i>
                            </div>
                            <li className="items alt">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="items">
                                <Link to="/info">Info</Link>
                            </li>
                            <li className="items">
                                <Link to="/games">Fun</Link>
                            </li>
                            <div className="dropdown">
                                <Link className="items">Tests</Link>
                                <div className="dropdown-content" style={{ width: "200px", borderRadius: "25px", fontSize: "20px", fontWeight: "lighter" }}>
                                    <Link to="/anxietyTest" className="items">Anxiety Test</Link>
                                    <Link to="/depressionTest" className="items">Depression Test</Link>
                                </div>
                            </div>
                            <li className="items">
                                <Link to="/gethelp">Get Help</Link>
                            </li>
                        </ul>
                        <div className="icon menu-btn">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>
            </header>
            <section>
                <div className="wid container">
                    <div className="get-help">
                        <h1>How To Get Mental Health Help?</h1>
                        <p className="desc">
                            The Union Social Justice and Empowerment Ministry launched a 24/7 toll-free helpline to provide support to people facing anxiety, stress, depression, suicidal thoughts, and other mental health concerns.
                            The mental health rehabilitation helpline, KIRAN, can be called from a landline and mobile phones across the country at the number <b>1800-599-0019.</b>

                        </p>
                        <h3>
                            <a href="https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359"
                            >NATIONAL MENTAL HEALTH PROGRAMME (NMHP)</a
                            >
                        </h3>
                        <div className="para">
                            <p>
                                National Mental Health Programme was launched by the Government of India in 1982, with the following
                                objectives
                            </p>
                            <ul>
                                <li>
                                    To ensure the availability and accessibility of minimum mental healthcare for all in the foreseeable
                                    future, particularly to the most vulnerable and underprivileged sections of the population;
                                </li>
                                <li>
                                    To encourage the application of mental health knowledge in general healthcare and in social development;
                                    and
                                </li>
                                <li>
                                    To promote community participation in the mental health service development and to stimulate efforts
                                    towards self-help in the community.
                                </li>
                            </ul>
                        </div>
                        <h3><a href="https://sangath.in/">Sangath</a></h3>
                        <div className="para">
                            <p>
                                Sangath is a not-for-profit organisation working in Goa, India for 24 years to make mental health services
                                accessible and affordable <br /><b>Helpline: 011-41198666</b>
                            </p>
                        </div>
                        <h3><a href=" https://connectingngo.org">Connecting Trust</a></h3>
                        <div className="para">
                            <p>
                                Connecting NGO is a non-judgemental, non-advisory, confidential and anonymous space for those feeling low,
                                distressed and/or suicidal <br />
                                <b>Helpline: +91-9922001122, +91-9922004305 </b>
                            </p>
                        </div>

                        <div className="gethelp-btn">
                            <button className="anxiety" onclick="/faq"><strong><i>FAQ</i></strong></button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer"><p>Made with <i className="fa-solid fa-heart pulse" style={{ color: "#F4ADCB", textShadow: "1px -0.5px 1.5px black" }}></i> By Team Mentalism</p></footer>
        </body>
    );
};

export default HelpPage;