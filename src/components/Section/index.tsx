import { Children } from "react";
import SectionTitle from "./SectionTitle";
import { SectionContainer } from "./Section.styles";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
    return (
        <SectionContainer>
            <SectionTitle titleText={title} />
            {children}
        </SectionContainer>
    )
}