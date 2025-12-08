'use client';

import { ProjectCaption, ProjectContainer, ProjectContent, ProjectDescription, ProjectImages, ProjectTechStack, ProjectTechStackItem, ProjectTitle, ProjectVideo } from "./Project.styles";
import ProjectImage from "./ProjectImage";

export interface ProjectProps {
    title: string;
    description: string;
    caption: string;
    images?: string[];
    videoSource?: string;
    videoTitle?: string;
    techStack: string[];
}

export default function Project({ title, description, caption, images, videoSource, videoTitle, techStack }: ProjectProps) {
    return (
        <ProjectContainer>

            <ProjectContent>
                <ProjectTitle>
                    { title }
                </ProjectTitle>
                <ProjectDescription>
                    { description }
                </ProjectDescription>

                <ProjectCaption>
                    { caption }
                </ProjectCaption>

                <ProjectTechStack>
                    {techStack?.map((techStackItem, index) => <ProjectTechStackItem key={index}>{techStackItem}</ProjectTechStackItem>)}
                </ProjectTechStack>
            </ProjectContent>

            {images &&
                <ProjectImages>
                    {images.map((image, index) =>
                        <ProjectImage key={index} src={image} alt={`${title}-image-${index}`} />)}
                </ProjectImages>
            }

            {videoSource &&
                <ProjectVideo
                    src={videoSource}
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            }

        </ProjectContainer>
    )
}