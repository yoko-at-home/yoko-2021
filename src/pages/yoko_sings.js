import Link from "next/link";

import { ImageShrink } from "../components/atom/ImageShrink";
import { SkillTagSolid } from "../components/atom/SkillTag";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const yokosings = () => {
  return (
    <Layout>
      <BannerLanding
        title='歌を忘れたyoko、歌を歌う'
        description='住まう町に、友を得る'
      />
      <div className='grid grid-cols-1 gap-5'>
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className='flex flex-col justify-start text-center'>
          <h2 className='mt-20 mb-10 text-3xl'>【女性合唱団ポレポーレ】</h2>
          <a
            href='https://polepole.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImageShrink
              width={700}
              height={500}
              src={"/pic05.jpg"}
              alt={"ポレポーレ"}
              desc={"ポレポーレ"}
            />
          </a>
          <div className='my-2.5'>
            <SkillTagSolid spanColor='red'>Gatsby.js</SkillTagSolid>
            <SkillTagSolid spanColor='purple'>Netlify</SkillTagSolid>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='p-5 lg:px-10'>
            <h3 className='mb-5 text-lg md:text-2xl underline'>
              {/* 学校に行かないと学べないと思っていた昭和なわたし */}
            </h3>
            <p className='lg:w-min min-w-full text-sm md:text-lg lg:text-base leading-7 lg:leading-10 '>
              なぜか「設立当初から」のキーワードと縁のある今日この頃。若かりし頃は歌を歌うのが好きでしたが、その機会はすっかり失われておりました。10年越しに声をかけてくださっていた友人の誘いに応じ本当に久しぶりに、歌を歌っています。
              長い歴史のある合唱団ですが、コロナで仕切り直しとなり、今年第一回演奏会を開催すべく、猛練習中です。
              <br />
              第一回ですからね、早速作りました。合唱団のWebサイトとプロモーション動画。使用技術はGatsbyとiMovie。Netlifyにホスティングしています。
              このシニア世代の合唱団のメンバーも、私の目には、情熱にあふれる魅力的な人々としか映りません。私たちは、姿は経年の変化に晒されても、心には、いつまでも変わらぬ情熱を秘めているものです。そんな気持ちをアニメーションアバターにしてみました。
              <br />
              もちろん、このサイトと動画で、大変盛り上がりました。
              招待状のデザイン
              も任せていただき、初めてのIllustrator制作で入稿も果たしました。制作物内容のやりとりにNotionを導入し、地域のシニア世代にもITの恩恵が届く活動を続けたいと存じます。
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between text-center'>
          <div className='my-7 md:mx-10 lg:mx-20 text-center'>
            <iframe
              title='ポレポーレ第一回演奏会ご案内'
              width='100%'
              height='615px'
              src='https://www.youtube.com/embed/rj49jZymIcM'
              frameBorder='0'
              allowFullScreen
            />
            <div className='my-3'>
              <SkillTagSolid spanColor='green'>iMovie</SkillTagSolid>
            </div>
          </div>
          <p className='mb-5'>
            さあ、御伽の国へ一っ飛び
            <span role='img' aria-label='sparkles'>
              ✨
            </span>
          </p>
          <ImageShrink
            width={700}
            height={500}
            src={"/pic_polepole.jpg"}
            alt={"ポレポーレ"}
            desc={"ポレポーレ"}
          />
          <ImageShrink
            width={700}
            height={500}
            src={"/pic_polepole_inside.jpg"}
            alt={"ポレポーレ"}
            desc={"ポレポーレ"}
          />
          <div className='my-3'>
            <SkillTagSolid spanColor='green'>iMovie</SkillTagSolid>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default yokosings;
