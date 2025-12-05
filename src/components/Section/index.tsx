import { Children } from "react";
import SectionTitle from "./SectionTitle";
import { SectionContainer } from "./Section.styles";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children, id }: SectionProps) {
    return (
        <SectionContainer id={id}>
            <SectionTitle titleText={title} />
            {children}
        </SectionContainer>
    )
}