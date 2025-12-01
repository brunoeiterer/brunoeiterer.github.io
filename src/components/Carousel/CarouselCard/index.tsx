import { CarouselCardContainer, CarouselCardDescriptionContainer, CarouselCardHeader, CarouselCardHighlightsContainer, CarouselCardTechStackContainer, CarouselCardTypesContainer } from "./CarouselCard.styles";
import CarouselCardHighlight from "./CarouselCardHighlight";
import CarouselCardLogo from "./CarouselCardLogo";
import CarouselCardTitle from "./CarouselCardTitle";
import CarouselCardTechStackItem from "./CarouselCardTechStackItem";
import CarouselCardPeriod from "./CarouselCardPeriod";

interface CarouselCardProps {
    logoImageSource: string;
    logoAltText: string;
    title: string;
    period: string;
    description: string;
    highlights: string[];
    types: string[];
    techStack: string[];
}

export default function CarouselCard({ logoImageSource, logoAltText, title, period, description, highlights, types, techStack }: CarouselCardProps) {
    return (
        <CarouselCardContainer>
            <CarouselCardHeader>
                {/*}
                <CarouselCardLogo
                    imageSource={logoImageSource}
                    imageAltText={logoAltText}
                />
                */}
                <CarouselCardTitle
                    title={title}
                />
            </CarouselCardHeader>
            
            <CarouselCardPeriod
                period={period}
            />

            <CarouselCardDescriptionContainer>
                {description}
            </CarouselCardDescriptionContainer>

            <CarouselCardHighlightsContainer>
                {  highlights.map((highlight, index) => <CarouselCardHighlight key={index} text={highlight}/>)}
            </CarouselCardHighlightsContainer>

            <CarouselCardTypesContainer>
                <span>{types.join(' 🞄 ')}</span>
            </CarouselCardTypesContainer>

            <CarouselCardTechStackContainer>
                { techStack.map((techStackItem, index) => <CarouselCardTechStackItem key={index} text={techStackItem} />) }
            </CarouselCardTechStackContainer>

        </CarouselCardContainer>
    );
}