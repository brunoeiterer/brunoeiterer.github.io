'use client';

import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { NavBarContainer, NavBarItem } from "./NavBar.styles";

export default function NavBar() {
    const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
    console.log(isNavDrawerOpen);

    return (
        <>
            <NavBarContainer $isOpen={isNavDrawerOpen}>
                <HamburgerButton onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)} />
                <NavBarItem href='#about'>
                    About
                </NavBarItem>
                <NavBarItem href='#professional-experience'>
                    Professional Experience
                </NavBarItem>
                <NavBarItem href='#academic-experience'>
                    Academic Experience
                </NavBarItem>
                <NavBarItem href='#projects'>
                    Projects
                </NavBarItem>
                <NavBarItem href='#contact'>
                    Contact
                </NavBarItem>
            </NavBarContainer>
        </>
    )
}