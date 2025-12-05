import HeroSection from "@/components/HeroSection/HeroSection";
import Carousel from "@/components/Carousel/Carousel";
import { MainContainer } from "./page.styles";
import Footer from "@/components/Footer/Footer";
import CarouselCard from "@/components/Carousel/CarouselCard";
import Section from "@/components/Section";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Project from "@/components/Project";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <MainContainer>
            <NavBar />

            <HeroSection id='about' />

            <Section id='professional-experience' title='Professional Experience'>
                <ProfessionalExperience period={'2021 — PRESENT'} />
                <ProfessionalExperience period={'2019 — 2021'} />
                <ProfessionalExperience period={'2018 — 2019'} />
            </Section>

            <Section id='academic-experience' title='Academic Experience'>
                <ProfessionalExperience period={'2014 — 2018'} />
            </Section>

            <Section id='projects' title='Projects'>
                <Project>
                    {'Overblooming'}
                </Project>
                <Project>
                    {'Lifejournaler'}
                </Project>
                <Project>
                    {'PrintReady'}
                </Project>
                <Project>
                    {'BeyondHelix'}
                </Project>
            </Section>

            <Section id='contact' title='Contact'>
                <Contact />
            </Section>
            {/*
                  <CarouselCard
            logoImageSource='/images/RDILogo.png'
            logoAltText='RDILogo'
            title="Senior Software Engineer · RDI Software @ McDonald's Global"
            period='2022 — PRESENT'
            description="Development of McDonald's restaurants applications."
            highlights={['Developed a new, modern UI for the POS',
              'Developed the integration with new Fiscal Devices for Belgium, migrating from a serial connection solution to a GraphQL solution',
              'Supported the migration of the mobile ordering solution from a legacy, convoluted solution, to a modern one',
              'Solved critical and high-profile issues, including production incidents, 40% faster than average',
              'Acted as team dev lead and SME on multiple occasions, guiding team members, providing solutions, managing delivery and client interaction']}
            types={['Enterprise', 'Web', 'FullStack']}
            techStack={['C#', 'NextJS', 'React', 'TypeScript', 'WCF', 'C++', 'C', 'JavaScript', 'RavenDB (NoSQL)']} />

          <CarouselCard
            logoImageSource='/images/RDILogo.png'
            logoAltText='RDILogo'
            title="Senior Software Engineer · RDI Software @ McDonald's Global"
            period='2022 — PRESENT'
            description="Development of McDonald's restaurants applications."
            highlights={['Developed a new, modern UI for the POS',
              'Developed the integration with new Fiscal Devices for Belgium, migrating from a serial connection solution to a GraphQL solution',
              'Supported the migration of the mobile ordering solution from a legacy, convoluted solution, to a modern one',
              'Solved critical and high-profile issues, including production incidents, 40% faster than average',
              'Acted as team dev lead and SME on multiple occasions, guiding team members, providing solutions, managing delivery and client interaction']}
            types={['Enterprise', 'Web', 'FullStack']}
            techStack={['C#', 'NextJS', 'React', 'TypeScript', 'WCF', 'C++', 'C', 'JavaScript', 'RavenDB (NoSQL)']} />

          <CarouselCard
            logoImageSource='/images/RDILogo.png'
            logoAltText='RDILogo'
            title="Senior Software Engineer · RDI Software @ McDonald's Global"
            period='2022 — PRESENT'
            description="Development of McDonald's restaurants applications."
            highlights={['Developed a new, modern UI for the POS',
              'Developed the integration with new Fiscal Devices for Belgium, migrating from a serial connection solution to a GraphQL solution',
              'Supported the migration of the mobile ordering solution from a legacy, convoluted solution, to a modern one',
              'Solved critical and high-profile issues, including production incidents, 40% faster than average',
              'Acted as team dev lead and SME on multiple occasions, guiding team members, providing solutions, managing delivery and client interaction']}
            types={['Enterprise', 'Web', 'FullStack']}
            techStack={['C#', 'NextJS', 'React', 'TypeScript', 'WCF', 'C++', 'C', 'JavaScript', 'RavenDB (NoSQL)']} />

        <Carousel>
        </Carousel>
        {/*
        <Carousel />
        
        <Footer />
        */}
        </MainContainer>
    );
}
