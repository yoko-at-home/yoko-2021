import Image from "next/image";

import { SkillTag } from "../components/atom/SkillTag";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";


const websites = () => {
  return (
    <Layout>
      <BannerLanding title='Webサイト' description='試行錯誤' />
      {/* <!-- Section 1 --> */}
      <section id='top'>
        <div className='py-6 sm:py-8 md:py-12 px-5 mx-auto space-y-5 sm:space-y-8 md:space-y-16 w-full max-w-7xl'>
          <div className='flex flex-col md:flex-row items-center sm:px-5'>
            <div className='w-full md:w-1/2'>
              <a
                href='https://sakuraipiano.com'
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <Image
                  width={700}
                  height={500}
                  alt='櫻井ピアノスクール'
                  className='object-cover w-full h-full max-h-64 sm:max-h-96 rounded-lg'
                  src='/pic_piano01.jpg'
                />
              </a>
            </div>
            <div className='flex flex-col justify-center items-start py-6 mb-6 md:mb-0 w-full md:w-1/2 h-full'>
              <div className='flex flex-col justify-center items-start md:pl-10 lg:pl-16 space-y-3 md:space-y-5 h-full transform'>
                <h1 className='text-2xl lg:text-3xl xl:text-3xl font-bold leading-none'>
                  <a href='https://sakuraipiano.com'>
                    落ち込んでる場合じゃないねん！と言って生まれたサイト
                  </a>
                </h1>
                <p className='pt-2 text-sm font-medium'>
                  音楽家受難の時代を生きる
                </p>
                <p className='pt-2 text-sm font-medium'>
                  <a
                    href='https://sakuraipiano.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mr-1 underline'
                  >
                    櫻井ピアノスクール
                  </a>{" "}
                  · <span className='mx-1'>June 1st, 2020</span>
                </p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-x-8 gap-y-16 sm:px-5 pb-10'>
            <div className='flex flex-col col-span-12 sm:col-span-6 xl:col-span-4 items-start space-y-3'>
              <a
                href='https://catterycanon.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <Image
                  width={700}
                  height={500}
                  alt='Cattery Cannon(仮)'
                  className='object-cover overflow-hidden mb-2 w-full max-h-56 rounded-lg'
                  src='/pic_microcms.jpg'
                />
              </a>
              <div className='flex flex-row'>
                <SkillTag spanColor='red'>Next.js</SkillTag>
                <SkillTag spanColor='blue'>Tailwind css</SkillTag>
                <SkillTag spanColor='purple'>ヘッドレスCMS</SkillTag>
              </div>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>
                APIを取得してデータが表示
                <span role='img' aria-label='sparkles'>
                  ✨
                </span>
              </h2>
              <p
                id='blog'
                className='text-sm md:text-lg lg:text-base leading-7 lg:leading-10 text-gray-200 '
              >
                Tailwindならレスポンシブも驚くほど簡単。メディアクエリでかなりレスポンシブ対応ができるようになりましたが、ライブラリーを使用すれば、開発時間をグッと短縮できます。
                <a href='https://microcms.io/'>MicroCMS</a>
                のブログって本当によくできているのです。こちらは今後作成予定のメインクーンのブログサイト構築の技術検証に作ったテストサイト。そしてNext.jsのページ遷移の楽なこと！たった半年くらいの間に、どんどん便利な技術が世に送り出されてきます。メルカリサイトのクローンで四苦八苦した認証も、便利なサービスがいくつもあることを知りました。プログラミング、走るのを忘れたらあっという間に置いてきぼりになりそうです。
              </p>
              <p className='pt-2 text-xs font-medium'>
                <a
                  href='https://catterycanon.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-1 underline'
                >
                  Cattery Canon(仮)
                </a>{" "}
                制作：<span className='mx-1'>June 2021</span>
              </p>
            </div>

            <div
              id='choco'
              className='flex flex-col col-span-12 sm:col-span-6 xl:col-span-4 items-start space-y-3'
            >
              <a
                href='https://chocolate-react.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <Image
                  width={700}
                  height={500}
                  alt='ショコラピアノ教室'
                  className='object-cover overflow-hidden mb-2 w-full max-h-56 rounded-lg shadow-sm'
                  src='/pic_piano02.jpg'
                />
              </a>
              <div className='flex flex-row'>
                <SkillTag spanColor='red'>React</SkillTag>
                <SkillTag spanColor='blue'>素のCSS</SkillTag>
                <SkillTag spanColor='purple'>Netlify</SkillTag>
              </div>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>
                Reactサイトが作ってみたくて。
              </h2>
              <p className='text-sm md:text-lg lg:text-base leading-7 lg:leading-10 text-gray-200 '>
                素のCSSのは柔軟ですが、レスポンシブ対応に苦しみました。また使用できる画像が、既存のWebサイトのものという制約があり、サイトの魅力を存分に引き出す画像についてよくよく考えさせられました。プロの画像を扱ったサイトを作ってみたいなと思った作品です。
                そして、ここまで作っておきながら、実は完成していない残念な作品です。Webサイトは、コーディングするのもまぁまぁ大変ですが、サイトを作りたい側の負担もかなり大きいですね。趣味を越えたいのであれば、情報を引き出すスキルも求められます。
              </p>
              <p className='pt-2 text-xs font-medium'>
                <a
                  href='https://chocolate-react.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-1 underline'
                >
                  ショコラピアノ教室
                </a>{" "}
                制作：<span className='mx-1'>November 2020</span>
              </p>
            </div>

            <div className='flex flex-col col-span-12 sm:col-span-6 xl:col-span-4 items-start space-y-3'>
              <a href='#_' className='block'>
                <Image
                  width={700}
                  height={500}
                  alt='もう一つの櫻井ピアノスクール'
                  className='object-cover overflow-hidden mb-2 w-full max-h-56 rounded-lg shadow-sm'
                  src='/pic_piano03.jpg'
                />
              </a>
              <div className='flex flex-row'>
                <SkillTag spanColor='red'>JavaScript</SkillTag>
                <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
              </div>

              <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>
                <a href='#_' target='_blank' rel='noopener noreferrer'>
                  動くサイトが作りたくて
                </a>
              </h2>
              <p className='text-sm md:text-lg lg:text-base leading-7 lg:leading-10 text-gray-200 '>
                動きのあるサイトが作ってみたくて、同じ内容のデザイン違いを作りました。
                コロナが明けたらデザインリニューアルも楽しいかも！？と思っていましたが、今後作るのであれば、表示速度の優れたReact製のにしたいと思っているので、このページにひっそりとおいて、このサイト作りに大量の時間を投資した記念碑としたいと思います。
              </p>
              <p className='pt-2 text-xs font-medium'>
                <a
                  href='https://boring-jackson-e33e7b.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-1 underline'
                >
                  もう一つの櫻井ピアノスクール
                </a>{" "}
                制作：<span className='mx-1'>Summer, 2020</span>
              </p>
            </div>

            <div className='flex flex-col col-span-12 sm:col-span-6 xl:col-span-4 items-start space-y-3 bg-top bg-cover'>
              <a
                href='https://s3.ap-northeast-1.amazonaws.com/zama-ouen.com/index.html'
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <Image
                  width={700}
                  height={500}
                  alt='座間駅周辺美味しいところ'
                  className='object-cover overflow-hidden mb-2 w-full max-h-56 rounded-lg shadow-sm'
                  src='/pic_web_zama.jpg'
                />
              </a>
              <div className='flex flex-row'>
                <SkillTag spanColor='red'>JavaScript</SkillTag>
                <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
                <SkillTag spanColor='purple'>AWS S3</SkillTag>
              </div>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>
                素材を求めて
              </h2>
              <p className='text-sm md:text-lg lg:text-base leading-7 lg:leading-10 text-gray-200 '>
                こんなサイトも学習の初めの頃に作りました。知り合いのパン屋さんやカフェの紹介サイト。
              </p>
              <p className='pt-2 text-xs font-medium'>
                <a
                  href='https://s3.ap-northeast-1.amazonaws.com/zama-ouen.com/index.html'
                  className='mr-1 underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  座間駅周辺美味しいところ
                </a>{" "}
                制作：<span className='mx-1'>May 2020</span>
              </p>
            </div>

            {/* <div className='flex flex-col col-span-12 sm:col-span-6 xl:col-span-4 items-start space-y-3'>
              <a href='#_' className='block'>
                <Image
                  width={700}
                  height={500}
                  alt='Cattery Cannon(仮)'
                  className='object-cover overflow-hidden mb-2 w-full max-h-56 rounded-lg'
                  src='/pic_microcms.jpg'
                />
              </a>
              <div className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-gray-800 rounded-full'>
                <span>Business</span>
              </div>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>
                Simple Time Management
              </h2>
              <p className='text-sm text-gray-200 md:text-lg lg:text-base leading-7 lg:leading-10 '>
                Managing your time can make the difference between getting ahead
                in life or staying exactly where you are.
              </p>
              <p className='pt-2 text-xs font-medium'>
                <a href='#_' className='mr-1 underline'>
                  Scott Reedman
                </a>{" "}
                · <span className='mx-1'>May 18, 2021</span> ·{" "}
                <span className='mx-1 text-gray-600'>3 min. read</span>
              </p>
            </div> */}

            {/* <div className='flex flex-col col-span-12 sm:col-span-6 xl:col-span-4 items-start space-y-3'>
              <a href='#_' className='block'>
                <Image
                  width={700}
                  height={500}
                  alt='bbbb'
                  className='object-cover overflow-hidden mb-2 w-full max-h-56 rounded-lg'
                  src='/pic01.jpg'
                />
              </a>
              <div className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-yellow-400 rounded-full'>
                <span>Nutrition</span>
              </div>
              <h2 className='text-lg sm:text-xl md:text-2xl font-bold'>
                The Fruits Life
              </h2>
              <p className='text-sm text-gray-200 md:text-lg lg:text-base leading-7 lg:leading-10 '>
                Take a moment and enjoy to enjoy the many fruits of life.
                Relaxation and a healthy diet can go a long way.
              </p>
              <p className='pt-2 text-xs font-medium'>
                <a href='#_' className='mr-1 underline'>
                  Jake Caldwell
                </a>{" "}
                · <span className='mx-1'>May 15, 2021</span> ·{" "}
                <span className='mx-1 text-gray-600'>3 min. read</span>
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default websites;
