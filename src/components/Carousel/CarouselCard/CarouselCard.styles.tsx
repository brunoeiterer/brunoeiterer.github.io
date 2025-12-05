'use client';

import styled from 'styled-components';

export const CarouselCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;

    border-radius: 0.5rem;
    background-color: #FFFFFF;

    gap: 1rem 2rem;

    width: 1000px;
`;

export const CarouselPeriodContainer = styled.div`
    color: #30303096;
`;

export const CarouselCardHeader = styled.div`
    grid-column: 2 / 6;
`;

export const CarouselCardDescriptionContainer = styled.div`
    color: #303030;
    grid-column: 2 / 6;
`;

export const CarouselCardHighlightsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: #303030;
    gap: 0.5rem;

    grid-column: 2 / 6;
`;

export const CarouselCardTypesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    color: #303030;
    font-size: 0.85rem;

    gap: 0.5rem;
    grid-column: 2 / 6;
`;

export const CarouselCardTechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 0.25rem;
    grid-column: 2 / 6;
`;