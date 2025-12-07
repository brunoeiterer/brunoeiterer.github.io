'use client';

import { ProjectCaption, ProjectContainer, ProjectDescription, ProjectImage, ProjectImages, ProjectTechStack, ProjectTechStackItem, ProjectTitle, ProjectVideo } from "./Project.styles";

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
            <ProjectTitle>
                { title }
            </ProjectTitle>

            <ProjectDescription>
                { description }
            </ProjectDescription>

            <ProjectCaption>
                { caption }
            </ProjectCaption>

            {images &&
                <ProjectImages>
                    {images.map((image, index) =>
                        <ProjectImage key={index} src={image} alt={`${title}-image-${index}`} style={{ width: '100%', height: 'auto' }} width={2048} height={2048} />)}
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

            <ProjectTechStack>
                {techStack?.map((techStackItem, index) => <ProjectTechStackItem key={index}>{techStackItem}</ProjectTechStackItem>)}
            </ProjectTechStack>

        </ProjectContainer>
    )
}