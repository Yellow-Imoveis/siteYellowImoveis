import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import LogoLight from "../assets/images/logo-topo.png";
import LogoDark from "../assets/images/logo-topo.png";
import { User } from 'react-feather';
import { useFavorite } from "../contexts/FavoriteContext";

export default function Navbar(props) {
    const { navClass, topnavClass } = props;
    const [isOpen, setMenu] = useState(true);
    window.addEventListener("scroll", windowScroll);

    const { favoriteItems } = useFavorite();

    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            var elements = document.getElementById("navigation").getElementsByTagName("a");
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if (elem.target.getAttribute("href") !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                }
            }
        }

    }
    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            if (navbar !== null) {
                navbar?.classList.add("nav-sticky");
            }
        } else {
            if (navbar !== null) {
                navbar?.classList.remove("nav-sticky");
            }
        }

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }

    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    }

    useEffect(() => {

        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');


                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }

        var elements = document.getElementById("navigation").getElementsByTagName("a");
        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].onclick = function (elem) {
                if (elem.target.getAttribute("href") === "#") {
                    var submenu = elem.target.nextElementSibling.nextElementSibling;
                    submenu.classList.toggle('open');
                }
            }
        }
    }, []);

    // render() {
    // const toggleClass = this.state.isOpenMenu ? 'hidden' : 'block';


    return (
        <React.Fragment>
            <nav id="topnav" className={`defaultscroll is-sticky ${topnavClass ? topnavClass : ''}`} >
                {console.log(topnavClass)}
                <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                    {/* <!-- Logo container--> */}
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" to="/">
                            <img src={LogoDark} className="inline-block dark:hidden w-32" alt="" />
                            <img src={LogoLight} className="hidden dark:inline-block w-32" alt="" />
                        </Link> :
                        <Link className="logo" to="/">
                            <span className="inline-block dark:hidden">
                                <img src={LogoDark} className="l-dark w-32" height="24" alt="" />
                                <img src={LogoLight} className="l-light w-32" height="24" alt="" />
                            </span>
                            <img src={LogoLight} height="24" className="hidden dark:inline-block" alt="" />
                        </Link>
                    }
                    {/* <!-- End Logo container--> */}

                    {/* <!-- Start Mobile Toggle --> */}
                    <div className="menu-extras">
                        <div className="menu-item flex items-center justify-end space-x-4">
                            {/* adicionar ao lado esquerdo do menu hamburger um link para ver os favoritos */}
                            
                            <Link 
                                to="/favoritos" 
                                className="btn btn-icon bg-yellow-500 hover:bg-yellow-600 border-yellow-500 dark:border-yellow-500 text-white rounded-full md:hidden indicator"
                            >
                                <i className="pi pi-heart-fill"></i>
                            </Link>
                            <Link to="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End Mobile Toggle --> */}

                    {/* <!-- Login button Start --> */}
                    <ul className="buy-button list-none mb-0">
                        {/* <li className="inline mb-0">
                            <Link to="/auth-login" className="btn btn-icon bg-yellow-500 hover:bg-yellow-600 border-yellow-500 dark:border-yellow-500 text-white rounded-full"><User className="h-4 w-4 stroke-[3]"></User></Link>
                        </li> */}
                        <li className="sm:inline ps-1 mb-0 hidden">
                            {/* <Link to="/auth-signup" className="btn bg-yellow-500 hover:bg-yellow-600 border-yellow-500 dark:border-yellow-500 text-white rounded-full">Signup</Link> */}
                            <Link to="/fale-conosco" className="btn bg-yellow-500 hover:bg-yellow-600 border-yellow-500 dark:border-yellow-500 text-white rounded-full">Fale com um corretor</Link>
                            {/* <a href="https://wa.me/5511996800593" target="_blank" className="btn bg-yellow-500 hover:bg-yellow-600 border-yellow-500 dark:border-yellow-500 text-white rounded-full">Fale com um corretor</a> */}
                        </li>
                    </ul>
                    {/* <!--Login button End--> */}

                    <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}>
                        {/* <!-- Navigation Menu--> */}
                        <ul className={`navigation-menu  ${navClass === '' || navClass === undefined ? '' : 'nav-light'}   ${topnavClass !== '' && topnavClass !== undefined ? 'justify-center' : 'justify-end'}`}>
                            <li><NavLink to="/" activeclassname="active" className="sub-menu-item">Home</NavLink></li>
                            <li><NavLink to="/imoveis" activeclassname="active" className="sub-menu-item">Imóveis</NavLink></li>
                            <li><Link to="/sobre-nos" className="sub-menu-item">Sobre nós</Link></li>
                            <li><Link to="/depoimento" className="sub-menu-item">Depoimento</Link></li>

                            <li><Link to="/favoritos" className="sub-menu-item">Meus favoritos ({favoriteItems.length})</Link></li>
                            
                            {/* <li className="has-submenu parent-parent-menu-item">
                                <Link to="#">Listing</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Grid View </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/grid" className="sub-menu-item">Grid Listing</Link></li>
                                            <li><Link to="/grid-sidebar" className="sub-menu-item">Grid Sidebar </Link></li>
                                            <li><Link to="/grid-map" className="sub-menu-item">Grid With Map</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> List View </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/list" className="sub-menu-item">List Listing</Link></li>
                                            <li><Link to="/list-sidebar" className="sub-menu-item">List Sidebar </Link></li>
                                            <li><Link to="/list-map" className="sub-menu-item">List With Map</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu parent-menu-item"><Link to="#"> Property Detail </Link><span className="submenu-arrow"></span>
                                        <ul className="submenu">
                                            <li><Link to="/property-detail/1" className="sub-menu-item">Property Detail</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}

                            {/* <li><Link to="/contact" className="sub-menu-item">Contact</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Navbar  */}
        </React.Fragment>
    );

}
