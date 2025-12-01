import { CarouselCardTitleContainer } from "./CarouselCardTitle.styles";

export interface CarouselCardTitleProps {
    title: string;
}

export default function CarouselCardTitle({ title }: CarouselCardTitleProps) {
    return (
        <CarouselCardTitleContainer>
            <h4>{title}</h4>
        </CarouselCardTitleContainer>
    );
}