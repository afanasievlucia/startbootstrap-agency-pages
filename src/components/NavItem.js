import React from 'react'
 
const NavItem = ({item}) => {
    return (
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href={item.href}>{item.item}</a></li>
        </ul>
    )
}
export default NavItem