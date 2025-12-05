'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const HeroSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / span 4;

    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;

    height: 269px;

    border: 1px solid black;

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

export const HeroImage = styled(Image)`
    grid-row: 1;
    grid-column: 1 / 5;
    margin: 4rem 1rem 0 1rem;
    max-width: 90%;
    height: auto;
    margin-bottom: -1rem;
`;

export const HeroSectionSeparator = styled.hr`
    grid-column: 1 / 5;
    color: #00000096;
    filter: blur(2px);
`;

export const HeroTextTitleContainer = styled.div`
    width: 100%;
    grid-row: 1;
    grid-column: 1 / 4;

    margin: 1em;
`;

export const HeroHighlightsContainer = styled.div`
    grid-row: 1;
    grid-column: 1 / 4;
    line-height: 1rem;

    width: 55%;

    margin: 4rem 0 0 1.5rem;
    font-size: 10px;
`;

export const HeroTextTitle = styled.h1`
    font-size: 26px;
    margin: 1rem 1rem 1rem 0;
`;