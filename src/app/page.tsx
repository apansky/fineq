import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <Section id="nase-sluzby" title="Naše služby" description="">
        </Section>
        <Section id="hladame-prave-teba" title="Hľadáme práve Teba?" description="">
        </Section>
        
      </Container>
    </>
  );
};

export default HomePage;
