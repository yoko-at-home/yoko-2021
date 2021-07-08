import { FireworksSection } from "../components/Fireworks";
import { Footer } from "../components/Footer";
import { HeadPart } from "../components/Head";
import { Header } from "../components/Header";
import { Navbar } from '../components/NavBar';

const Home=()=> {
  return (
    <>
      <HeadPart
        title={"yoko | frontend engineer"}
        description={"yoko | frontend engineer"}
        keyword={"programming"}
        image={"/banner.jpg"}
        url={"https://yoko-2021.vercel.app"}
      />
      <Navbar />
      <Header />
      <FireworksSection />
      <Footer />
    </>
  );
}

export default Home;
