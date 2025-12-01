import { CarouselCardTechStackItemContainer } from "./CarouselCardTechStackItem.styles";

interface CarouselCardTechStackItemProps {
    text: string;
}

export default function CarouselCardTechStackItem({ text }: CarouselCardTechStackItemProps) {
    return (
        <CarouselCardTechStackItemContainer>
            {text}
        </CarouselCardTechStackItemContainer>
    )
}