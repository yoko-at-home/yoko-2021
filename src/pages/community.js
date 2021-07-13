import Link from "next/link";

import { ImageShrink } from "../components/atom/ImageShrink";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const community = () => {
  return (
    <Layout>
      <BannerLanding title='2つのコミュニティ' description='学びの友を得る' />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center'>
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className='flex flex-col lg:order-1 text-center'>
          <h2 className='mt-20 mb-10 text-3xl'>【Over 40 Web Club】</h2>
          <a
            href='https://over40webclub.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
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

        <div className='flex flex-col lg:order-2 justify-center'>
          <div className='justify-center p-5 lg:px-10'>
            <h3 className='mb-5 text-lg md:text-2xl underline'>
              Web開発の勉強をしている40歳以上向けオンラインコミュニティ
            </h3>
            <p className='mb-5 lg:w-min min-w-full text-sm md:text-lg lg:text-base leading-7 lg:leading-10 '>
              設立当初から参加しています。メンバーのバックグランドは、現役エンジニア、専業主婦、働く主婦、元IBMプログラマー、元引きこもり(自称)、シェフ、海外からの参戦者とさまざまです。
              学習会も盛んで、
              <a
                className='hover:text-blue-400'
                href='https://over40webclub.connpass.com/'
              >
                Connpassでの学習会
              </a>
              も過去4回開催しています。全ての会で司会を担当しました。
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:order-4 justify-center text-center'>
          <h2 className='mt-20 mb-10 text-3xl'>【IT KINGDOM】</h2>
          <a
            href='https://it-kingdom.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImageShrink
              width={700}
              height={500}
              src={"/pic_com01.jpg"}
              alt={"IT KINGDOM"}
            />
          </a>
          <div className='text-center'></div>
        </div>
        <div className='lg:order-3 justify-center p-5 md:p-16 lg:mt-20'>
          <h3 className='pb-3 text-lg md:text-2xl underline'>
            素敵な住処をありがとう
          </h3>
          <p className='mb-5 lg:w-min min-w-full text-sm md:text-lg lg:text-base leading-7 lg:leading-10'>
            Reactのレッスンが終わり、これからどのように学習を進めていけばいいか考えていた時に、このコミュニティができました。設立当初から参加させていたただいています。
            若い方々が中心になって活動していますが、今ではたくさんの素晴らしい友人ができました。
            第一回Lightning
            Talk会の司会という大役をいただき、第二回では登壇も果たしました。
            <br />
            このLT会のために作成した
            <Link href='/programming#chat'>
              <a href='https://yoko-2021.vercel.app/programming#chat'>
                チャットアプリ
              </a>
            </Link>
            に残されたメッセージが、今では私の宝物となっています(LT会毎にCSSを当て直し、模様替えしています)。こちらのコミュニティも大変活発で、朝活や夜活はもちろん、現役エンジニアを交えてプロダクト開発にも参加させていただいています。Figmaを用いたプロダクトデザインにもチャレンジ中です。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default community;
