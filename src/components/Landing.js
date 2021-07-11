import Link from "next/link";

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
