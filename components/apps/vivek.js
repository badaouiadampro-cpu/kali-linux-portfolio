import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // écran actif par défaut
            navbar: false,
        }
    }

    componentDidMount() {
        // les clés DOIVENT correspondre aux id des div (about, education, skills, projects, resume)
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus sur le dernier onglet ouvert
        const el = document.getElementById(lastVisitedScreen);
        if (el) {
            this.changeScreen(el);
        }
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "About section" });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div
                    id="about"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "about"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ")
                        + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img className="w-3 md:w-4" alt="À propos" src="./themes/Yaru/status/about.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50 ">À propos</span>
                </div>

                <div
                    id="education"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "education"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ")
                        + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img className="w-3 md:w-4" alt="Scolarité" src="./themes/Yaru/status/education.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50 ">Scolarité</span>
                </div>

                <div
                    id="skills"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "skills"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ")
                        + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img className="w-3 md:w-4" alt="Compétences" src="./themes/Yaru/status/skills.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50 ">Compétences</span>
                </div>

                <div
                    id="projects"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "projects"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ")
                        + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img className="w-3 md:w-4" alt="Mes projets" src="./themes/Yaru/status/projects.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50 ">Projets</span>
                </div>

                <div
                    id="resume"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "resume"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ")
                        + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                >
                    <img className="w-3 md:w-4" alt="Mon CV" src="./themes/Yaru/status/download.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50 ">CV</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>

                <div
                    onClick={this.showNavBar}
                    className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
                >
                    <div className="w-3.5 border-t border-white"></div>
                    <div className="w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className="w-3.5 border-t border-white"></div>
                    <div
                        className={
                            (this.state.navbar ? " visible animateShow z-30 " : " invisible ")
                            + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
                        }
                    >
                        {this.renderNavLinks()}
                    </div>
                </div>

                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}

// ===== À PROPOS =====

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                {/* Mets ici ta vraie image dans public/images/logos/ */}
                <img className="w-full" src="./images/logos/adam.png" alt="Photo Adam Badaoui" />
            </div>

            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Je m'appelle <span className="font-bold">Adam Badaoui</span>,</div>
                <div className="font-normal ml-1">
                    Je suis <span className="text-pink-600 font-bold">étudiant en BTS SIO option SISR</span>
                </div>
            </div>

            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>

            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                    Je suis <span className="font-medium">étudiant en BTS SIO SISR</span>, intéressé par
                    l'administration systèmes, les réseaux et la cybersécurité.
                    {/* CHANGE ICI AVEC TON MAIL */}
                    {" "}Actuellement, je recherche des opportunités de stage / alternance (contact :
                    <a className="text-underline" href="mailto:contact@exemple.com">
                        <u> contact@exemple.com</u>
                    </a>).
                </li>
                <li className="mt-3 list-building">
                    J’aime monter des infrastructures complètes : serveurs Debian, services web, bases de données,
                    Active Directory, VLANs, firewall, etc.
                </li>
                <li className="mt-3 list-time">
                    En dehors des cours, je passe du temps à tester des labs (VM, firewall, SI d’entreprise) et à me former
                    sur Linux, la sécurité et l’automatisation.
                </li>
                <li className="mt-3 list-star">
                    Je suis motivé pour mettre en pratique mes compétences dans un environnement professionnel et continuer à progresser.
                </li>
            </ul>
        </>
    );
}

// ===== SCOLARITÉ =====

function Education() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Scolarité
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p
