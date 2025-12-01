import { CarouselCardPeriodContainer } from "./CarouselCardPeriod.styles";

interface CarouselCardPeriodProps {
    period: string;
}

export default function CarouselCardPeriod({ period }: CarouselCardPeriodProps) {
    return (
        <CarouselCardPeriodContainer>
            <h5>{period}</h5>
        </CarouselCardPeriodContainer>
    );
}