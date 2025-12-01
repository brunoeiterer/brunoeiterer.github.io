'use client';

import { CarouselCardHighlightContainer } from "./CarouselCardHighlight.styles";

interface CarouselCardHighlightProps {
    text: string;
}

export default function CarouselCardHighlight({ text }: CarouselCardHighlightProps) {
    return (
        <CarouselCardHighlightContainer>
            <span>🞄 {text}</span>
        </CarouselCardHighlightContainer>
    )
}