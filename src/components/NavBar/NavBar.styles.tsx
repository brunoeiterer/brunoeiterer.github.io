'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

export const NavBarContainer = styled.nav<{$isOpen: boolean}>`
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 27px;
    justify-items: center;
    align-items: center;

    grid-column: 1 / -1;

    transition: height 0.3s ease-in-out;
    height: ${({ $isOpen })=> $isOpen ? '162px' : '27px'};

    background-color: black;

    overflow: hidden;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 70px;
    }
`;

export const NavBarItem = styled(Link)`
    color: white;

    width: 100%;

    text-align: center;
    line-height: 27px;

    &:hover {
        color: #757575;
    }

    border-bottom: 1px solid white;

    transition: color 0.1s ease-in-out;

    @media (min-width: 768px) {
        width: auto;
        border: none;
    }
`;