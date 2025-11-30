import HeroSection from "@/components/HeroSection/HeroSection";
import Carousel from "@/components/Carousel/Carousel";
import { MainContainer } from "./page.styles";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
      <MainContainer>
        <HeroSection />
        <Carousel />
        <Carousel />
        <Footer />
      </MainContainer>
  );
}
