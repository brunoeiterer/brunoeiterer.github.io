'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const HeroSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / span 4;

    margin-top: 1rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 8;

        margin-left: 3rem;
        margin-right: 3rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 12;

        margin-left: 9rem;
        margin-right: 9rem;
    }
`;

export const HeroTextTitle = styled.h1`
    font-size: 26px;
    width: 100%;
    grid-row: 1;
    grid-column: 1 / 4;

    margin-left: 0.5rem;

    @media (min-width: 768px) {
        font-size: 2rem;
        margin-left: 0.5rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        margin-left: 3.5rem;
        font-size: 4rem;
    }
`;

export const HeroTextContainer = styled.div`
    grid-row: 1;
    grid-column: 1 / span 2;
    margin-left: 1rem;
    margin-top: 2.5rem;

    max-width: 80%;

    font-size: 0.5625rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 4;

        font-size: 1rem;

        margin-left: 1.5rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 8;

        font-size: 1.5rem;

        margin-top: 7rem;

        margin-left: 5rem;
        margin-right: 5rem;
    }
`;

export const HeroImage = styled(Image)`
    grid-row: 1;
    grid-column: 1 / span 4;
    margin: 1rem 1rem 0 1rem;
    max-width: 90%;
    height: auto;

    
    @media (min-width: 768px) {
        grid-column: 1 / span 8;

        margin-left: 1.5rem;
    }

    @media (min-width: 1024px) {
        grid-column: 4 / span 7;

        max-width: 100%;

        margin-top: -1rem;
        margin-left: 5rem;
        margin-right: 5rem;
    }
`;

export const HeroSectionSeparator = styled.hr`
    width: 110%;
    grid-column: 1 / -1;
    color: #00000096;
    filter: blur(2px);
    margin-left: -3rem;
`;

export const HeroHighlightsContainer = styled.div`
    grid-row: 1;
    grid-column: 1 / 4;
    line-height: 1rem;

    width: 55%;

    margin: 4rem 0 0 1.5rem;
    font-size: 10px;
`;