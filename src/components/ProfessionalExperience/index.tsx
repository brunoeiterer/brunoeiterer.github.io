import { ProfessionalExperienceCompany, ProfessionalExperienceContainer, ProfessionalExperienceDescription, ProfessionalExperienceHighlight, ProfessionalExperienceHighlights, ProfessionalExperiencePeriod, ProfessionalExperienceTechStack, ProfessionalExperienceTechStackItem, ProfessionalExperienceTitle, ProfessionalExperienceTypes } from "./ProfessionalExperience.styles";

interface ProfessionalExperieceProps {
    period: string;
    company: string;
    titles: string[];
    description: string;
    highlights: string[];
    types: string;
    languages: string[];
    frameworks: string[];
    databases: string[];
}

export default function ProfessionalExperience({ period, company, titles, description, highlights, types, languages, frameworks, databases }: ProfessionalExperieceProps) {
    return (
        <ProfessionalExperienceContainer>
            <ProfessionalExperiencePeriod>
                {period}
            </ProfessionalExperiencePeriod>

            <ProfessionalExperienceCompany>
                {company}
            </ProfessionalExperienceCompany>
            
            {titles?.map((title, index) =><ProfessionalExperienceTitle key={index}>{title}</ProfessionalExperienceTitle>)}

            <ProfessionalExperienceDescription>
                {description}
            </ProfessionalExperienceDescription>

            <ProfessionalExperienceHighlights>
                {highlights && highlights.map((highlight, index) => 
                    <ProfessionalExperienceHighlight key={index}>{highlight}</ProfessionalExperienceHighlight>)}
            </ProfessionalExperienceHighlights>

            <ProfessionalExperienceTypes>
                {types}
            </ProfessionalExperienceTypes>

            <ProfessionalExperienceTechStack>
                {languages && languages.map((language, index) => 
                    <ProfessionalExperienceTechStackItem key={index}>{language}</ProfessionalExperienceTechStackItem>)}
            </ProfessionalExperienceTechStack>

            <ProfessionalExperienceTechStack>
                {frameworks && frameworks.map((framework, index) => 
                    <ProfessionalExperienceTechStackItem key={index}>{framework}</ProfessionalExperienceTechStackItem>)}
            </ProfessionalExperienceTechStack>

            <ProfessionalExperienceTechStack>
                {databases && databases.map((database, index) => 
                    <ProfessionalExperienceTechStackItem key={index}>{database}</ProfessionalExperienceTechStackItem>)}
            </ProfessionalExperienceTechStack>

        </ProfessionalExperienceContainer>
    )
}