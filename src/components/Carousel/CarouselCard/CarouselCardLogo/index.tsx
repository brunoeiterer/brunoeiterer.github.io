import { CarouselCardLogoContainer } from "./CarouselCardLogo.styles";
import Image from 'next/image';

interface CarouselCardLogoProps {
    imageSource: string;
    imageAltText: string;
}

export default function CarouselCardLogo({ imageSource, imageAltText }: CarouselCardLogoProps) {
    return (
        <CarouselCardLogoContainer>
            <Image
                src={imageSource}
                alt={imageAltText}
                width={40}
                height={12}
            />
        </CarouselCardLogoContainer>
    );
}