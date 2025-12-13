'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const ProjectImageContainer = styled(Image)<{$expanded: boolean}>`
    border-radius: 12px;

    width: 100%;
    height: auto;
    cursor: ${({ $expanded }) => ($expanded ? "zoom-out" : "zoom-in")};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-origin: center;

    &:hover {
       ${({ $expanded }) => (!$expanded && `transform: scale(1.03)`)}
    }

    ${({ $expanded }) =>
        $expanded &&
        `
        position: fixed;
        top: 27px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 90%;
        height: auto;
        z-index: 3;
        margin: auto;
        box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    `}

    @media (min-width: 768px) {
        ${({ $expanded }) =>
            $expanded &&
            `
            top: 70px;
            width: 70%;
        `}
    }
`;

export const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 2;
`;