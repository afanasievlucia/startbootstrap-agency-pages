import NavItem from "./NavItem"
import  { useState } from 'react'
import Footer from "./Footer"

const NavBar = () => {
    const [navItems] = useState([ 
        {
            href: "#services",
            item: 'Services'
        },
        {
            href: "#portfolio",
            item: "Potofolio"
        },
        {
            href: "#about",
            item: 'About'
        },
        {
            href: "#team",
            item: 'Team'
        },
        {
            href: "#contact",
            item: 'Contact'
        } 
        ])
    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                            {navItems.map(item => (
                                <NavItem item={item} />
                            ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar