import Link from "next/link";

import { WhiteSpace } from "../components/atom/WhiteSpace";
import { FireworksSection } from "../components/Fireworks";
import { HeadPart } from "../components/Head";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Tiles } from "../components/Tiles";

const Home = () => {
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
      <div className='mt-5 text-center'>
        <p>
          <Link href='/#top'>
            <a
              className='py-2 mr-4 text-sm font-bold leading-relaxed uppercase whitespace-nowrap '
              href='#pablo'
            >
              <span role='img' aria-label='sparkles'>
                ✨
              </span>
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Home;
