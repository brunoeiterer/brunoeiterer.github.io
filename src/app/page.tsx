import HeroSection from "@/components/HeroSection/HeroSection";
import { MainContainer } from "./page.styles";
import Section from "@/components/Section";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import Project from "@/components/Project";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
    return (
        <MainContainer>
            <NavBar id='nav' />

            <HeroSection id='about' />

            <Section id='professional-experience' title='Professional Experience'>
                <ProfessionalExperience
                    period={'2021 — PRESENT'}
                    titles={["Senior Software Engineer", "Software Engineering Consultant"]}
                    company={"RDI Software @ McDonald's"}
                    description={"Development of McDonald's restaurants applications."}
                    highlights={['Developed a new, modern UI for the POS',
                        'Developed the integration with new Fiscal Devices for Belgium, migrating from a serial connection solution to a GraphQL solution',
                        'Supported the migration of the mobile ordering solution from a legacy, convoluted solution, to a modern one',
                        'Solved critical and high-profile issues, including production incidents, 40% faster than average',
                        'Acted as team dev lead and SME on multiple occasions, guiding team members, providing solutions, managing delivery and client interaction']}
                    types={'Enterprise · Web · FullStack'}
                    languages={['C#', 'TypeScript', 'C', 'C++', 'JavaScript']}
                    frameworks={['NextJS', 'React', 'WCF']}
                    databases={['RavenDB (NoSql)']}
                />
                <ProfessionalExperience
                    period={'2019 — 2021'}
                    titles={['Middle Software Engineer', 'Software Engineer']}
                    company={'Gertec'}
                    description='Development of credit card machines.'
                    highlights={['Acted as Linux product expert, participating in critical projects and issues',
                            'Developed an internal testing tool using C# and WPF',
                            'Wrote the full testing documentation for the Linux devices'
                    ]}
                    types={'Embedded · Desktop'}
                    languages={['C', 'C++', 'C#']}
                    frameworks={['WPF']}
                    databases={[]}
                />
                <ProfessionalExperience
                    period={'2018 — 2019'}
                    titles={['Embedded Software Intern']}
                    company='ASML'
                    description='Development of the EtherCAT protocol prototype.'
                    highlights={[]}
                    types={'Embedded'}
                    languages={['C', 'C++', 'Python']}
                    frameworks={[]}
                    databases={[]}
                />
            </Section>

            <Section id='academic-experience' title='Academic Experience'>
                <ProfessionalExperience
                    period={'2014 — 2018'}
                    titles={['Floripa-Sat Team Member']}
                    company='Embedded Systems Group - UFSC'
                    description='Development of the first fully Brazillian nanosatellite.'
                    highlights={['Development of the software for the electrical power system',
                        'Participation in the hardware schematics and layout',
                        'Development of the testing methodology of the project'
                    ]}
                    types={'Embedded'}
                    languages={['C']}
                    frameworks={[]}
                    databases={[]}

                />
            </Section>

            <Section id='projects' title='Projects'>
                <Project
                    title='Lifejournaler'
                    description='Liferjounaler is a lightweight journaler app, focused on the needs of bipolar disorder.'
                    caption="This app is tailored to my girlfriend's mood/thoughts tracking needs. It contains options to track weather, mood sleep quality, menstrual cycle, exercise, appetite and levels of anxiety, racing thoughts, depression, autocriticism and sensorial overload. Users can also add custom notes and check trends using a graphic calendar or plotted data."
                    techStack={['TypeScript', 'React', 'NextJS', 'C#', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL']}
                />
                <Project
                    title='PrintReady'
                    description='PrintReady is a windows app that automatically resizes and frames pictures for printing.'
                    caption='This app was born from getting some printed pictures stretched and clipped. With it the pictures are uploaded, the desired output size and border color is selected, and they are all automatically made ready for printing.'
                    images={['/images/PrintReady.jpg']}
                    techStack={['C#', 'WinUi 3']}
                />
                <Project
                    title='Overblooming'
                    description='Overblooming is an indie, exploration, walking-simulator type game.'
                    caption='This project was an exploration of 3D modeling and texturing as well as a learning experience in Godot and Steam publishing.'
                    videoSource='https://www.youtube.com/embed/Eaop7617gBs?si=jkK5_GyVN_ZLGoyR'
                    videoTitle='Overblooming Trailer'
                    techStack={['C#', 'Godot', 'Blender', 'Steam']}
                />
            </Section>

            <Section id='contact' title='Contact'>
                <Contact />
            </Section>

            <BackToTopButton />

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
