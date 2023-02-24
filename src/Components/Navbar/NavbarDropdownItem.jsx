import React, { useState } from 'react';

export const NavDropdownItem = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <li className="nav-item">
            <a
                className="nav-link"
                href="#"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
            >
                {props.title}
            </a>
            {isDropdownOpen && (
                <div className="dropdown-menu">
                    {props.dropdownItems.map((item, index) => (
                        <a key={index} className="dropdown-item" href={item.link}>
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </li>
    );
}

export default NavDropdownItem;