import { ImageShrink } from "../components/atom/ImageShrink";
import { SkillTagSolid } from "../components/atom/SkillTag";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const yokosings = () => {
  return (
    <Layout>
      <BannerLanding
        title="歌を忘れたyoko、歌を歌う"
        description="住まう町に、友を得る"
      />
      <div className="grid grid-cols-1 gap-5">
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className="flex flex-col justify-start text-center">
          <h2 className="mt-20 mb-10 text-3xl">【女性合唱団ポレポーレ】</h2>
          <a
            href="https://polepole.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageShrink
              width={700}
              height={500}
              src={"/pic05.jpg"}
              alt={"ポレポーレ"}
              desc={"ポレポーレ"}
            />
          </a>
          <div className="my-2.5">
            <SkillTagSolid spanColor="red">Gatsby.js</SkillTagSolid>
            <SkillTagSolid spanColor="purple">Netlify</SkillTagSolid>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="p-5 lg:px-10">
            <h3 className="mb-5 text-lg underline md:text-2xl">
              {/* 学校に行かないと学べないと思っていた昭和なわたし */}
            </h3>
            <div className="min-w-full text-sm leading-7 md:text-lg lg:w-min lg:text-base lg:leading-10 ">
              なぜか「設立当初から」のキーワードと縁のある今日この頃。若かりし頃は歌を歌うのが好きでしたが、その機会はすっかり失われておりました。10年越しに声をかけてくださっていた友人の誘いに応じ本当に久しぶりに、歌を歌っています。
              長い歴史のある合唱団ですが、仕切り直しとなり、今年第一回演奏会を開催すべく、猛練習中です。
              <br />
              第一回ですからね、早速作りました。合唱団のWebサイトとプロモーション動画。使用技術はGatsbyとiMovie。Netlifyにホスティングしています。
              このシニア世代の合唱団のメンバーも、私の目には、情熱にあふれる魅力的な人々としか映りません。私たちは、姿は経年の変化に晒されても、心には、いつまでも変わらぬ情熱を秘めているものです。そんな気持ちをアニメーションアバターにしてみました。もちろん、このサイトと動画で、大変盛り上がりました。
              <br />
              何となくデザイン好きでありそうと気がつかれ、印刷物を一気に引き受けています。
              招待状やプログラムのデザインも任せていただき、初めてのIllustrator制作で入稿も果たしました。制作物内容のやりとりにNotionを導入したり、地域の50
              <sup>++</sup>ともITの恩恵を享受したいと思っています。
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-center">
          <div className="my-7 text-center md:mx-10 lg:mx-20">
            <iframe
              title="ポレポーレ第一回演奏会ご案内"
              width="100%"
              height="615px"
              src="https://www.youtube.com/embed/GAhSsJVeUvc"
              frameBorder="0"
              allowFullScreen
            />
            <div className="my-3">
              <SkillTagSolid spanColor="green">iMovie</SkillTagSolid>
            </div>
          </div>
          <h2 className="mt-20 mb-10 text-3xl">さあ、御伽の国へ一っ飛び</h2>
          <div className="mt-10 mb-5">
            <span role="img" aria-label="sparkles">
              ✨ファーストコンサート プログラム✨
            </span>
          </div>
          <ImageShrink
            width={900}
            height={430}
            src={"/images/pic_polepole_program1.jpg"}
            alt={"ポレポーレファーストコンサートプログラム"}
            desc={"ポレポーレファーストコンサートプログラムご挨拶"}
          />
          <div className="m-5">
            <span role="img" aria-label="sparkles">
              {/* ✨ */}
            </span>
          </div>
          <ImageShrink
            width={900}
            height={430}
            src={"/images/pic_polepole_program2.jpg"}
            alt={"ポレポーレファーストコンサートプログラム"}
            desc={"ポレポーレファーストコンサートプログラム演目"}
          />
          <div className="mt-10 mb-5">
            <span role="img" aria-label="sparkles">
              ✨ご招待状✨
            </span>
          </div>
          <ImageShrink
            width={700}
            height={500}
            src={"/pic_polepole.jpg"}
            alt={"ポレポーレ"}
            desc={"ポレポーレ"}
          />
          <div className="m-5">
            <span role="img" aria-label="sparkles">
              {/* ✨ */}
            </span>
          </div>
          <ImageShrink
            width={700}
            height={500}
            src={"/pic_polepole_inside.jpg"}
            alt={"ポレポーレ"}
            desc={"ポレポーレ"}
          />
          <div className="my-3">
            <SkillTagSolid spanColor="green">Illustrator</SkillTagSolid>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default yokosings;
