'use client';

import styled from 'styled-components';

export const NavBarContainer = styled.div`
    display: flex;

    grid-column: 1 / -1;

    height: 27px;

    border: 1px solid black;

    @media (min-width: 768px) {
        height: 70px;
    }
`;