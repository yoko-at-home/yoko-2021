import Image from "next/image";
import Link from "next/link";

import { ButtonYellow } from "../components/atom/Button";
import { ImageShrink } from "../components/atom/ImageShrink";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const language = () => {
  return (
    <Layout>
      <BannerLanding
        title='産業翻訳者やってました'
        description='翻訳など過去の職歴については、フッターのリンクから、LinkedInをご参照ください。'
      />
      <div className='grid grid-cols-1 gap-5'>
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className='flex flex-col justify-center text-center'>
          <div className='m-20'>
            <ButtonYellow>clubhouseやってます</ButtonYellow>
          </div>
          <a
            href='https://apps.apple.com/jp/app/clubhouse-drop-in-audio-chat/id1503133294'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mx-auto text-center rounded-full border-8 border-yellow-300 border-dotted'
          >
            <Image
              className='bg-contain rounded-full border-8 border-yellow-300 border-dotted'
              width={250}
              height={250}
              src={"/clubhouse.jpg"}
              alt={"clubhouse"}
              desc={"clubhouse"}
            />
          </a>
        </div>

        <div className='flex flex-col justify-between text-center'>
          <div className='p-10 md:p-20'>
            <h3 className='mb-5 text-lg md:text-2xl underline'>
              プログラミングの英語ドキュメンテーションやブログを音読
            </h3>
            <p className='min-w-full text-sm md:text-lg lg:text-base leading-7 lg:leading-10 text-left '>
              平日の8:05-8:25、徒然なるままに音読しています。React系のドキュメンテーションを読んでいることが多いです。ちょっと話題になったブログや、新しいPaasなどの情報も読んでます。
            </p>
            <p className='min-w-full text-sm md:text-lg lg:text-base leading-7 lg:leading-10 text-left '>
              もうすっかり廃れた感のあるclubhouseですが、訪れてくれる方がいて、継続する力になっています。感謝！
              使わなくなるとすぐに忘れてしまうのが、語学。プログラミングやってて、英語できてよかったなと思うこの頃です。
              言葉が読めるだけでは太刀打ちできませんが、日々小さな積み重ねで、瞬発力が出せると思っています。
              よかったら立ち聞きしにいらしてください。
            </p>
          </div>
        </div>
        {/* <div className='mt-5 text-center'>
          <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-center text-white uppercase bg-yellow-400 rounded-full'>
            Richmond, Surrey UK
          </span>
        </div> */}
        <div className='mt-10 text-center'>
          <ImageShrink
            width={700}
            height={500}
            src={"/richmond.jpg"}
            alt={"richmond, uk"}
            desc={"richmond, uk"}
          />
        </div>
        <div className='mt-5 text-center'>
          <p>
            <Link href='/'>
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
      </div>
    </Layout>
  );
};

export default language;
