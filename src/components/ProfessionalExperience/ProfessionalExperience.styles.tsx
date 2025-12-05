'use client';

import styled from 'styled-components';

import { Inter } from 'next/font/google';

const interSemiBold = Inter({
    weight: ['600'],
    subsets: ['latin']
});

export const ProfessionalExperienceContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-column: 1 / span 4;

    margin-top: 1rem;

    height: 489px;

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

export const ProfessionalExperiencePeriod = styled.span`
    grid-column: 1 / 3;
    margin-left: 1rem;

    color: #30303096;
    ${interSemiBold.style};
    font-size: 12px;
`;