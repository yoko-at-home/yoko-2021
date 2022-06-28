import Image from "next/image";

import { SkillTag } from "../components/atom/SkillTag";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";


const websites = () => {
  return (
    <Layout>
      <BannerLanding
        title="Webサイト"
        description="現在、webサイトの制作はご紹介のあった方のみ制作させていただいております"
      />
      {/* <!-- Section 1 --> */}
      <section id="top">
        <div className="py-6 px-5 mx-auto space-y-5 w-full max-w-7xl sm:py-8 sm:space-y-8 md:py-12 md:space-y-16">
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <a
                href="https://sakuraipiano.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  width={700}
                  height={500}
                  alt="櫻井ピアノスクール"
                  className="object-cover w-full h-full max-h-64 sm:max-h-96"
                  src="/pic_piano01.jpg"
                />
              </a>
            </div>
            <div className="flex flex-col justify-center items-start py-6 mb-6 w-full h-full md:mb-0 md:w-1/2">
              <div className="flex flex-col justify-center items-start space-y-3 h-full transform md:pl-10 md:space-y-5 lg:pl-16">
                <h1 className="text-2xl font-bold leading-none lg:text-3xl xl:text-3xl">
                  <a href="https://sakuraipiano.com">
                    落ち込んでる場合じゃないねん！と言って生まれたサイト
                  </a>
                </h1>
                <div className="pt-2 text-sm font-medium">
                  音楽家受難の時代を生きる
                </div>
                <div className="pt-2 text-sm font-medium">
                  <a
                    href="https://sakuraipiano.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-1 underline"
                  >
                    櫻井ピアノスクール
                  </a>{" "}
                  · <span className="mx-1">June 1st, 2020</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-16 pb-10 sm:px-5">
            <div className="flex flex-col col-span-12 items-start space-y-3 sm:col-span-6 xl:col-span-4">
              <a
                href="https://www.gen-scent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  width={700}
                  height={500}
                  alt="Gen-Scent Research Laboratory様Webサイト"
                  className="object-cover overflow-hidden mb-2 w-full max-h-56"
                  src="/images/web-genscent.webp"
                />
              </a>
              <div className="flex flex-row">
                <SkillTag spanColor="red">Next.js</SkillTag>
                <SkillTag spanColor="blue">Tailwind css</SkillTag>
                <SkillTag spanColor="purple">ヘッドレスCMS</SkillTag>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                初めての企業さま案件
              </h2>
              <div
                id="blog"
                className="text-sm leading-7 text-gray-200 md:text-lg lg:text-base lg:leading-10 "
              >
                プログラミングコミュニティ Over 40 Web Club
                からのご縁で、スタートアップ企業さまのWebサイトを制作させていただきました。Next.js
                / Tailwind css / <a href="https://microcms.io/">MicroCMS</a>{" "}
                という技術選定。初めてデザインを提示されて実装したサイトでもあります。クライアントの希望を伺いつつ、効果的な配色などのデザインでもご提案させてitだきました。
                PWAも実現し、Lighthouseスコアの、パフォーマンス99点、アクセシビリティ、ベストプラクティス、SEOでフルスコアを実現。
                Google Analytics、Google Search
                Consoleなどの仕組みも取り入れ、大変勉強になった案件でした。ここを通過点として、さらに技術力を高めます。
              </div>
              <div className="pt-2 text-xs font-medium">
                <a
                  href="https://www.gen-scent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 underline"
                >
                  玄川リサーチ（Gen-Scent Research Laboratory)
                </a>{" "}
                公開：<span className="mx-1">January 2022</span>
              </div>
            </div>
            <div className="flex flex-col col-span-12 items-start space-y-3 sm:col-span-6 xl:col-span-4">
              <a
                href="https://canon-cat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  width={700}
                  height={500}
                  alt="Cattery Canon様Webサイト"
                  className="object-cover overflow-hidden mb-2 w-full max-h-56"
                  src="/images/web-canoncat.jpg"
                />
              </a>
              <div className="flex flex-row">
                <SkillTag spanColor="red">Next.js</SkillTag>
                <SkillTag spanColor="blue">Tailwind css</SkillTag>
                <SkillTag spanColor="purple">ヘッドレスCMS</SkillTag>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                APIを取得してデータが表示
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
              </h2>
              <div
                id="blog"
                className="text-sm leading-7 text-gray-200 md:text-lg lg:text-base lg:leading-10 "
              >
                Tailwindならレスポンシブも驚くほど簡単。メディアクエリでかなりレスポンシブ対応ができるようになりましたが、ライブラリーを使用すれば、開発時間をグッと短縮できます。
                <a href="https://microcms.io/">MicroCMS</a>
                って本当によくできているのです。すっかりファン。学んだことをフルに生かし、可愛らしいメインクーンの写真に癒されながら、とうとう公開まで漕ぎ着けました。
              </div>
              <div className="pt-2 text-xs font-medium">
                <a
                  href="https://cattery-canon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 underline"
                >
                  Cattery Canon
                </a>{" "}
                制作：<span className="mx-1">October 2021</span>
              </div>
            </div>

            <div
              id="choco"
              className="flex flex-col col-span-12 items-start space-y-3 sm:col-span-6 xl:col-span-4"
            >
              <a
                href="https://chocolate-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  width={700}
                  height={500}
                  alt="ショコラピアノ教室"
                  className="object-cover overflow-hidden mb-2 w-full max-h-56 shadow-sm"
                  src="/pic_piano02.jpg"
                />
              </a>
              <div className="flex flex-row">
                <SkillTag spanColor="red">React</SkillTag>
                <SkillTag spanColor="blue">素のCSS</SkillTag>
                <SkillTag spanColor="purple">Netlify</SkillTag>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                Reactサイトが作ってみたくて。
              </h2>
              <div className="text-sm leading-7 text-gray-200 md:text-lg lg:text-base lg:leading-10 ">
                素のCSSのは柔軟ですが、レスポンシブ対応に苦しみました。また使用できる画像が、既存のWebサイトのものという制約があり、サイトの魅力を存分に引き出す画像についてよくよく考えさせられました。プロの画像を扱ったサイトを作ってみたいなと思った作品です。
                そして、ここまで作っておきながら、実は完成していない残念な作品です。Webサイトは、コーディングするのもまぁまぁ大変ですが、サイトを作りたい側の負担もかなり大きいですね。趣味を越えたいのであれば、情報を引き出すスキルも求められます。
              </div>
              <div className="pt-2 text-xs font-medium">
                <a
                  href="https://chocolate-react.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 underline"
                >
                  ショコラピアノ教室
                </a>{" "}
                制作：<span className="mx-1">November 2020</span>
              </div>
            </div>

            <div className="flex flex-col col-span-12 items-start space-y-3 sm:col-span-6 xl:col-span-4">
              <a href="#_" className="block">
                <Image
                  width={700}
                  height={500}
                  alt="もう一つの櫻井ピアノスクール"
                  className="object-cover overflow-hidden mb-2 w-full max-h-56 shadow-sm"
                  src="/pic_piano03.jpg"
                />
              </a>
              <div className="flex flex-row">
                <SkillTag spanColor="red">JavaScript</SkillTag>
                <SkillTag spanColor="blue"> HTML + 素のCSS</SkillTag>
              </div>

              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                <a href="#_" target="_blank" rel="noopener noreferrer">
                  動くサイトが作りたくて
                </a>
              </h2>
              <div className="text-sm leading-7 text-gray-200 md:text-lg lg:text-base lg:leading-10 ">
                動きのあるサイトが作ってみたくて、同じ内容のデザイン違いを作りました。
                コロナが明けたらデザインリニューアルも楽しいかも！？と思っていましたが、今後作るのであれば、表示速度の優れたReact製のにしたいと思っているので、このページにひっそりとおいて、このサイト作りに大量の時間を投資した記念碑としたいと思います。
              </div>
              <div className="pt-2 text-xs font-medium">
                <a
                  href="https://boring-jackson-e33e7b.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-1 underline"
                >
                  もう一つの櫻井ピアノスクール
                </a>{" "}
                制作：<span className="mx-1">Summer, 2020</span>
              </div>
            </div>

            <div className="flex flex-col col-span-12 items-start space-y-3 bg-top bg-cover sm:col-span-6 xl:col-span-4">
              <a
                href="https://s3.ap-northeast-1.amazonaws.com/zama-ouen.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  width={700}
                  height={500}
                  alt="座間駅周辺美味しいところ"
                  className="object-cover overflow-hidden mb-2 w-full max-h-56 shadow-sm"
                  src="/pic_web_zama.jpg"
                />
              </a>
              <div className="flex flex-row">
                <SkillTag spanColor="red">JavaScript</SkillTag>
                <SkillTag spanColor="blue"> HTML + 素のCSS</SkillTag>
                <SkillTag spanColor="purple">AWS S3</SkillTag>
              </div>
              <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                素材を求めて
              </h2>
              <div className="text-sm leading-7 text-gray-200 md:text-lg lg:text-base lg:leading-10 ">
                こんなサイトも学習の初めの頃に作りました。知り合いのパン屋さんやカフェの紹介サイト。
              </div>
              <div className="pt-2 text-xs font-medium">
                <a
                  href="https://s3.ap-northeast-1.amazonaws.com/zama-ouen.com/index.html"
                  className="mr-1 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  座間駅周辺美味しいところ
                </a>{" "}
                制作：<span className="mx-1">May 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default websites;
