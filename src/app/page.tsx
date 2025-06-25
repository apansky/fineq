import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Services from "@/components/Services";
import Hiring from "@/components/Hiring";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />
        <Services />
        <Hiring />
      </Container>
    </>
  );
};

export default HomePage;
