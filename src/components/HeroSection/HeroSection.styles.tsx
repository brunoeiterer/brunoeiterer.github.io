'use client';

import styled from 'styled-components';
import { Inter } from 'next/font/google';

export const HeroSectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`;

export const HeroImageContainer = styled.div`
    border-radius: 5px;
    overflow: hidden;

    width: auto;
    height: 400px;

    margin: 0.5em 0 0 0;
`;

const inter = Inter({ subsets: ['latin'] });

export const HeroTextContainer = styled.div`
    width: 700px;
    height: 400px;

    margin: 0.5em;

    font-family: ${inter.style.fontFamily};
    font-weight: ${inter.style.fontWeight};
    color: #D5DBDB;
    line-height: 1.5rem;
`;

export const HeroTextTitle = styled.h1`
    margin: 1rem 1rem 1rem 0;
`;