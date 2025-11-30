import { HeroImageContainer, HeroSectionContainer, HeroTextContainer, HeroTextTitle } from "./HeroSection.styles";

import Image from 'next/image';

export default function HeroSection() {
    return (
        <HeroSectionContainer>
            <HeroImageContainer>
                <Image
                    src='/images/HeroImage.jpeg'
                    alt='developing with banshee'
                    width={369}
                    height={400}
                />
            </HeroImageContainer>

            <HeroTextContainer>
                <HeroTextTitle>
                    Hi, I'm Bruno :)
                </HeroTextTitle>

            I'm a generalist software developer from Brazil. I have over 10 years of experience in Software Development, with 6 years professionally and 4 year in an academic environment, working across Embedded Systems, Web, and Desktop
            Applications on an Enterprise level, focusing on backend development and the application logic, while also contributing to the frontend/user interface
            whenever needed.

            I use mainly C#, C and C++, complemented by experience with Java, JavaScript, Typescript and Python.
            I have also used multiple web and desktop frameworks, like AspNet.Core, WCF, NextJS, WPF, WinUI 3 and JavaFX.
            </HeroTextContainer>
        </HeroSectionContainer>
    );
}