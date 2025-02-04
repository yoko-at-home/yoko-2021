import Link from "next/link";

import { ImageShrink } from "../components/atom/ImageShrink";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const community = () => {
  return (
    <Layout>
      <BannerLanding title="2つのコミュニティ" description="学びの友を得る" />
      <div className="grid grid-cols-1 gap-5 justify-center lg:grid-cols-2">
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className="flex flex-col text-center lg:order-1">
          <h2 className="mt-20 mb-10 text-3xl">【Over 40 Web Club】</h2>
          <a
            href="https://over40webclub.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageShrink
              width={700}
              height={500}
              href={"https://sakuraipiano.com"}
              src={"/pic_com02.jpg"}
              alt={"Over 40 Web Club"}
              desc={"Over 40 Web Club"}
            />
          </a>
        </div>

        <div className="flex flex-col justify-center lg:order-2">
          <div className="justify-center p-5 lg:px-10">
            <h3 className="mb-5 text-lg underline md:text-2xl">
              Web開発の勉強をしている40歳以上向けオンラインコミュニティ
            </h3>
            <div className="mb-5 min-w-full text-sm leading-7 md:text-lg lg:w-min lg:text-base lg:leading-10 ">
              設立当初から参加しています。メンバーのバックグランドは、現役エンジニア、専業主婦、働く主婦、元IBMプログラマー、元引きこもり(自称)、シェフ、海外からの参戦者とさまざまです。
              学習会も盛んで、
              <a
                className="hover:text-blue-400"
                href="https://over40webclub.connpass.com/"
              >
                Connpassでの学習会
              </a>
              も過去4回開催しています。全ての会で司会を担当しました。
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center lg:order-4">
          <h2 className="mt-20 mb-10 text-3xl">【IT KINGDOM】</h2>
          <a
            href="https://it-kingdom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageShrink
              width={700}
              height={500}
              src={"/pic_com01.jpg"}
              alt={"IT KINGDOM"}
            />
          </a>
          <div className="text-center" />
        </div>
        <div className="justify-center p-5 md:p-16 lg:order-3 lg:mt-20">
          <h3 className="pb-3 text-lg underline md:text-2xl">
            素敵な住処をありがとう
          </h3>
          <div className="mb-5 min-w-full text-sm leading-7 md:text-lg lg:w-min lg:text-base lg:leading-10">
            Reactのレッスンが終わり、これからどのように学習を進めていけばいいか考えていた時に、このコミュニティができました。設立当初から参加させていたただいています。
            若い方々が中心になって活動していますが、今ではたくさんの素晴らしい友人ができました。
            第一回Lightning
            Talk会の司会という大役をいただき、第二回では登壇も果たしました。
            <br />
            このLT会のために作成した
            <Link href="https://yoko-2021.vercel.app/programming#chat">
              チャットアプリ
            </Link>
            に残されたメッセージが、今では私の宝物となっています(LT会毎にCSSを当て直し、模様替えしています)。こちらのコミュニティも大変活発で、朝活や夜活はもちろん、現役エンジニアを交えてプロダクト開発にも参加させていただいています。
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default community;
