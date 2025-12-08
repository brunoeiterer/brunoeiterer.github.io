'use client';

import { useEffect, useState } from "react";
import { BackgroundOverlay, ProjectImageContainer } from "./ProjectImage.styles";

interface ProjectImageProps {
    src: string;
    alt: string;
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
    const [ isExpanded, setIsExpanded ] = useState(false);

    useEffect(() => {
        if(isExpanded) {
            const original = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = original;
            };
        }
    }, [isExpanded]);

    return (
        <>
            {isExpanded &&
                <BackgroundOverlay
                    onClick={() => setIsExpanded(false)}
                />}

            <ProjectImageContainer
                src={src}
                alt={alt}
                width={2048}
                height={2048}
                $expanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)}
            />
        </>
    );
}