import { HeroSection, DevServices, DevCycle, FAQ } from "../features/Home";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DevServices />
      <DevCycle />
      {/* <Offers /> */}
      <FAQ />
    </div>
  );
};

export default Home;
