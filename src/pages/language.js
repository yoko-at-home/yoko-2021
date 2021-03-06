import Image from "next/image";

import { ButtonYellow } from "../components/atom/Button";
import { ImageShrink } from "../components/atom/ImageShrink";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const language = () => {
  return (
    <Layout>
      <BannerLanding
        title="産業翻訳者やってました"
        description="翻訳など過去の職歴については、フッターのリンクから、LinkedInをご参照ください。"
      />
      <div className="grid grid-cols-1 gap-5">
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className="flex flex-col justify-center text-center">
          <div className="m-20">
            <ButtonYellow>現在、お休み中</ButtonYellow>
          </div>
          <a
            href="https://apps.apple.com/jp/app/clubhouse-drop-in-audio-chat/id1503133294"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-auto text-center rounded-full border-8 border-yellow-300 border-dotted"
          >
            <Image
              className="bg-contain rounded-full border-8 border-yellow-300 border-dotted"
              width={250}
              height={250}
              src={"/clubhouse.jpg"}
              alt={"clubhouse"}
              desc={"clubhouse"}
            />
          </a>
        </div>

        <div className="flex flex-col justify-between text-center">
          <div className="p-10 md:p-20">
            <h3 className="mb-5 text-lg underline md:text-2xl">
              英語ドキュメンテーションやブログを音読
            </h3>
            <div className="min-w-full text-sm leading-7 text-left md:text-lg lg:text-base lg:leading-10 ">
              平日の8:05-8:25
              a.m.、徒然なるままにプログラミングの英語ドキュメンテーションやブログを音読しています。React系のドキュメンテーションを読んでいることが多いです。ちょっと話題になったブログや、新しいPaasなどの情報も読んでます。
            </div>
            <div className="min-w-full text-sm leading-7 text-left md:text-lg lg:text-base lg:leading-10 ">
              もうすっかり廃れた感のあるclubhouseですが、訪れてくれる方がいて、継続する力になっています。感謝！
              使わなくなるとすぐに忘れてしまうのが、語学。プログラミングやってて、英語できてよかったなと思うこの頃です。
              言葉が読めるだけでは太刀打ちできませんが、日々小さな積み重ねで、瞬発力が出せると思っています。
              よかったら立ち聞きしにいらしてください。
              <br />
              (招待枠持っています。招待希望の方はTwitterからお声がけください。)
            </div>
          </div>
        </div>
        {/* <div className='mt-5 text-center'>
          <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-center text-white uppercase bg-yellow-400 rounded-full'>
            Richmond, Surrey UK
          </span>
        </div> */}
        <div className="mt-10 text-center">
          <ImageShrink
            width={700}
            height={500}
            src={"/richmond.jpg"}
            alt={"richmond, uk"}
            desc={"richmond, uk"}
          />
        </div>
      </div>
    </Layout>
  );
};

export default language;
