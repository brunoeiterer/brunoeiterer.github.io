'use client';

import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: grid;

    grid-column: 1 / span 4;

    grid-template-columns: 1fr 1fr 1fr 1fr;

    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-column: 1 / span 12;
    }
`;

export const ProjectVideo = styled.iframe`
    width: 95%;
    height: auto;
    aspect-ratio: 16 / 9;
    grid-row: 2;
    grid-column: 1 / span 4;
    border: none;
    border-radius: 12px;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 6;
    }
`;

export const ProjectTitle = styled.h2`
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

export const ProjectContent = styled.div`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    grid-column: 7 / span 5;

    transition: transform 0.3s ease;
    border-radius: 12px;

    padding: 0.5rem;

    &:hover {
        cursor: pointer;
        background: rgba(0,0,0,0.03);
        backdrop-filter: blur(4px);
        outline: 2px solid rgba(0,0,0,0.05);
    }
`;

export const ProjectDescription = styled.span`
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

export const ProjectCaption = styled.span`
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

export const ProjectImages = styled.div`
    grid-row: 2;
    display: flex;
    grid-column: 1 / span 4;

    max-width: 95%;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 6;
    }
`;

export const ProjectTechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-column: 1 / span 4;

    gap: 0.25rem;

    margin-top: 1rem;

    @media (min-width: 768px) {
        grid-column: 1 / span 8;
    }

    @media (min-width: 1024px) {
        grid-column: 1 / span 12;
    }
`;

export const ProjectTechStackItem = styled.div`
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