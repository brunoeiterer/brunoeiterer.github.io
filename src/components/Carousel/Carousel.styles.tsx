'use client';

import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    width: 50%;
    margin: 0 auto;
`;

export const CarouselViewport = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const CarouselCardsContainer = styled.div`
    display: flex;
`;

export const CarouselCardContainer = styled.div<{ selected: boolean }>`
    transition: opacity 0.25s ease;
    opacity: ${({ selected }) => (selected ? 1 : 0.35)};
    transform: ${({ selected }) => (selected ? "scale(1)" : "scale(0.96)")};
`;

const NavigationArrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    cursor: pointer;
    z-index: 10;
`;

export const PreviousArrow = styled(NavigationArrow)`
    left: 3rem;
`

export const NextArrow = styled(NavigationArrow)`
    right: 3rem;
`

export const NavigationDotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    margin-top: 1rem;
`;

export const NavigationDot = styled.div`
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
`;

export const SelectedNavigationDot = styled(NavigationDot)`
    background: #555;
`;