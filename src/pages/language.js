import Image from "next/image";

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
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className='flex flex-col lg:order-1 justify-center text-center'>
          <div className='m-20'>
            <ButtonYellow name={"clubhouseやってます"} />
          </div>
          <a
            href='https://polepole.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mx-auto w-1/4 text-center rounded-full border-8 border-yellow-300 border-dotted'
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

        <div className='flex flex-col lg:order-2 justify-between text-center'>
          <div className='p-5 lg:px-10'>
            <h3 className='mb-5 text-lg md:text-2xl underline'>
              プログラミングの英語ドキュメンテーションやブログを音読
            </h3>
            <p className='lg:w-min min-w-full text-sm lg:text-base text-left'>
              平日の8:05-8:25、徒然なるままに音読しています。React系のドキュメンテーションを読んでいることが多いです。ちょっと話題になったブログや、新しいPaasなどの情報も読んでます。
            </p>
            <p className='lg:w-min min-w-full text-sm lg:text-base text-left'>
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
        <div className='text-center'>
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
              <span role='img' aria-label='sparkles'>
                ✨
              </span>
            </p>
          </div>
      </div>
    </Layout>
  );
};

export default language;
