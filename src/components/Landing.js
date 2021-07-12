import { WhiteSpace } from "./atom/WhiteSpace";
import { FireworksSection } from "./Fireworks";
import { HeadPart } from "./Head";
import { Header } from "./Header";
import { Layout } from "./Layout/";
import { Tiles } from "./Tiles";

export const Landing = () => {
  return (
    <Layout>
      <HeadPart
        title={"yoko | frontend engineer"}
        description={"yoko | frontend engineer"}
        keyword={"programming"}
        image={"/banner.jpg"}
        url={"https://yoko-2021.vercel.app"}
      />
      <Header id='top' />
      <FireworksSection />
      <WhiteSpace />
      <Tiles />
    </Layout>
  );
};
