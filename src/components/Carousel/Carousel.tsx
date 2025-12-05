'use client';

import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useEffect, useCallback, useState } from "react";
import {
    CarouselCardContainer, CarouselCardsContainer, CarouselContainer, CarouselViewport, NavigationDot, NavigationDotsContainer,
    NextArrow, PreviousArrow, SelectedNavigationDot
} from "./Carousel.styles";

export default function ExperienceCarousel({ children }: { children: React.ReactNode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <CarouselContainer>
            <CarouselViewport ref={emblaRef}>
                <CarouselCardsContainer>
                    {React.Children.toArray(children).map((child, index) =>
                        <CarouselCardContainer selected={index === selectedIndex} key={index}>
                            {child}
                        </CarouselCardContainer>
                    )}

                </CarouselCardsContainer>
            </CarouselViewport>

            <NavigationDotsContainer>
                {scrollSnaps.map((_, i) => (
                    i === selectedIndex ?
                        <SelectedNavigationDot
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                        />
                        :
                        <NavigationDot
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                        />
                ))}
            </NavigationDotsContainer>
        </CarouselContainer>
    );
}
