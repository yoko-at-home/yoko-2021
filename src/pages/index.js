import { FireworksSection } from "../components/Fireworks";
import { HeadPart } from "../components/Head";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Tiles } from "../components/Tiles";

const Home=()=> {
  return (
    <Layout>
      <HeadPart
        title={"yoko | frontend engineer"}
        description={"yoko | frontend engineer"}
        keyword={"programming"}
        image={"/banner.jpg"}
        url={"https://yoko-2021.vercel.app"}
      />
      <Header />
      <div className="mb-10 md:mb-32">
      <FireworksSection />
      </div>
      <Tiles />
    </Layout>
  );
}

export default Home;
