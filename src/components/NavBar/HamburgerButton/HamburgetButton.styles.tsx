'use client';

import styled from 'styled-components';

export const HamburgerButtonContainer = styled.button`
    display: flex;
    flex-direction: column;

    width: 15px;
    height: 10px;

    gap: 0.125rem;

    background-color: black;
    border: none;

    @media(min-width: 768px) {
        display: none;
    }

    &:hover {
        > div {
            background-color: #757575;
        }
    }

    > div {
        background-color: white;
    }
`;

export const HamburgerButtonLine = styled.div`
    flex: 1;

    transition: color 0.1s ease-in-out;
`;