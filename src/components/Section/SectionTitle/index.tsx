import { SectionTitleText } from "./SectionTitle.styles";

interface SectionTitleProps {
    titleText: string;
}

export default function SectionTitle({ titleText }: SectionTitleProps) {
    return (
        <SectionTitleText>
            { titleText }
        </SectionTitleText>
    )
}