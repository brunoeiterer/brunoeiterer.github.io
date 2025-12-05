import {HeroTextTitle, HeroImage, HeroSectionSeparator, HeroTextTitleContainer, HeroHighlightsContainer, HeroSectionContainer } from "./HeroSection.styles";

export default function HeroSection() {
    return (
        <HeroSectionContainer>
            { 'Hero' }
        </HeroSectionContainer>
    )

    return (
        <>
            <HeroImage
                src='/images/HeroImage.png'
                alt='developing with banshee'
                width={953}
                height={768}
            />

            <HeroTextTitleContainer>
                <HeroTextTitle>
                    Hi, I'm Bruno :)
                </HeroTextTitle>
            </HeroTextTitleContainer>

            <HeroHighlightsContainer>
              <ul>
                <li>Generalist Software Engineer</li>
                <li>7 years of experience</li>
                <li>Enterprise • Embedded • Web • Desktop</li>
                <li>Strong C#, C</li>
                <li>Mid TypeScript, React, C++</li>
                <li>Also: Python, Java</li>
              </ul>
            </HeroHighlightsContainer>

            <HeroSectionSeparator />
        </>
    );
}