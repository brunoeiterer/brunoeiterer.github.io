'use client';

import styled from 'styled-components';

export const SectionTitleText = styled.h2`
    grid-column: 1 / -1;
    font-size: 1rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
        font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        font-size: 1.75rem;
    }
`;