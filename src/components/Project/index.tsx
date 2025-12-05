import { ProjectContainer } from "./Project.styles";

export interface ProjectProps {
    children: React.ReactNode;
}

export default function Project({ children }: ProjectProps) {
    return (
        <ProjectContainer>
            { children }
        </ProjectContainer>
    )
}