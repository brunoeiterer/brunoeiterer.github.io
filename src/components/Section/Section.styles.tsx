'use client';

import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-column: 1 / span 4;

    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 8;

        margin-left: 3rem;
        margin-right: 3rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 12;

        margin-left: 5rem;
        margin-right: 5rem;
    }
`;