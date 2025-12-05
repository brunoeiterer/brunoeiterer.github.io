'use client';

import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-column: 1 / span 4;

    height: 200px;

    margin-top: 1rem;

    border: 1px solid black;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 12;
    }
`;