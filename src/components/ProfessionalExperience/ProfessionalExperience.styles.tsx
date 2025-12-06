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

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 12;
    }
`;

export const ProfessionalExperiencePeriod = styled.div`
    grid-column: 1 / span 2;

    color: #30303096;
    ${interSemiBold.style};
    font-size: 0.75rem;

    margin-top: 1.125rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;

        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;

        font-size: 1.25rem;
    }
`;

export const ProfessionalExperienceCompany = styled.h2`
    grid-column: 1 / span 4;
    font-size: 0.75rem;

    color: #30303096;

    margin-bottom: 0.8125rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        font-size: 1.25rem;
    }
`;

export const ProfessionalExperienceTitle = styled.h2`
    grid-column: 1 / span 4;
    font-size: 0.75rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        font-size: 1.25rem;
    }
`;

export const ProfessionalExperienceDescription = styled.span`
    grid-column: 1 / span 4;
    font-size: 0.75rem;

    margin-top: 0.8125rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        font-size: 1.25rem;
    }
`;

export const ProfessionalExperienceHighlights = styled.ul`
    grid-column: 1 / span 4;
    font-size: 0.75rem;

    margin-top: 0.8125rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        font-size: 1.25rem;
    }
`;

export const ProfessionalExperienceHighlight = styled.li`
    margin-left: 1.25rem;
`;

export const ProfessionalExperienceTypes = styled.div`
    grid-column: 1 / span 4;
    font-size: 0.75rem;

    margin-top: 1.1875rem;
    margin-bottom: 1.375rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
        font-size: 1.25rem;
    }
`;

export const ProfessionalExperienceTechStack = styled.div`
    display: flex;
    grid-column: 1 / span 4;

    gap: 0.25rem;

    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
    }
`;

export const ProfessionalExperienceTechStackItem = styled.div`
    display: inline-block;
    border-radius: 9999px;

    background-color: #F3F4F6;
    color: #374151;
    font-size: 0.75rem;

    padding: 0.5rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.25rem;
    }
`;