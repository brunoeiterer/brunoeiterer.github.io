'use client';

import styled from 'styled-components';

export const CarouselCardContainer = styled.div`
    display:flex;
    flex-direction: column;

    border-radius: 0.5rem;
    background-color: #FFFFFF;

    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.3);

    padding: 1rem;

    width: 400px
`;

export const CarouselCardHeader = styled.div`
    display: flex;
    align-items: center;

    gap: 0.5rem;
    margin: 0.5rem 0.5rem 0.25rem 0.5rem;
`;

export const CarouselCardDescriptionContainer = styled.div`
    color: #303030;
    margin: 1rem 0.5rem 0.25rem 0.5rem;
`;

export const CarouselCardHighlightsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    color: #303030;
    gap: 0.5rem;
    margin: 1rem 0.5rem 0 0.5rem;
`;

export const CarouselCardTypesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    background-color: #303030;
    color: #FFFFFF;
    font-size: 0.875rem;

    gap: 0.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
`;

export const CarouselCardTechStackContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem 0 0 0;
`;