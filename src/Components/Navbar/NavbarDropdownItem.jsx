import React, { useState } from 'react';

export const NavDropdownItem = (props) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <li className="nav-item" data-testid="nav-dropdown-item">
            <a
                className="nav-link"
                href="#"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
                data-testid="dropdown-toggle"
            >
                {props.title}
            </a>
            {isDropdownOpen && (
                <div className="dropdown-menu" data-testid="dropdown-menu">
                    {props.dropdownItems.map((item, index) => (
                        <a
                            key={index}
                            className="dropdown-item"
                            href={item.link}
                            data-testid={`dropdown-item-${index}`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </li>
    );
}

export default NavDropdownItem;
