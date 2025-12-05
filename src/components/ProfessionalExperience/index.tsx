import { ProfessionalExperienceContainer, ProfessionalExperiencePeriod } from "./ProfessionalExperience.styles";

interface ProfessionalExperieceProps {
    period: string;
}

export default function ProfessionalExperience({ period }: ProfessionalExperieceProps) {
    return (
        <ProfessionalExperienceContainer>
            { period }
        </ProfessionalExperienceContainer>
    )
}