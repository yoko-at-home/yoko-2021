import Image from "next/image";

import { Button } from "../components/atom/Button";
import { SkillTag } from "../components/atom/SkillTag";
import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const clock = "/pic_misc_kotaclock.jpg";
const typing = "/pic_misc_kota_type.jpg";
const stopwatch = "/pic_misc_stopwatch.jpg";
const joke = "/pic_misc_joke.jpg";
const sound = "/pic_misc_soundboard.jpg";
const keyevent = "/pic_misc_keyevent.jpg";
const drinkwater = "/pic_misc_drinkwater.jpg";
const movie = "/pic_misc_movie.jpg";

const miscellaneous = () => {
  return (
    <Layout>
      <BannerLanding title='いろいろ' description='楽しい子たち' />
      {/* <!-- Section 1 --> */}
      <section className='pt-7 pb-7 w-full text-yellow-50 md:pt-20'>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10'>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyCalendar/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='琥太郎カレンダーとアナログ時計'
                src={clock}
                className='p-2 pr-5 pl-6 xl:pr-20 xl:pl-16 '
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>AWS S3</SkillTag>
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first pb-2 w-full border-solid md:order-none md:pl-10 md:w-1/2'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              琥太郎カレンダーとアナログ時計
            </h2>
            <div className='pt-4 pb-5 m-0 leading-7 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32'>
              Progate、ドットインストールそのままやってもつまらない。デザインを変えてみる楽しさに目覚める。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                給付金でMacを購入。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                琥太郎くんをみてたら、だいたい幸せ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                JavaScript、難しい。
              </li>
            </ul>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyCalendar/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16 xl:mt-0'>
          {/* <!-- Content --> */}
          <div className='box-border w-full border-solid md:pl-6 md:w-1/2 xl:pl-32'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              琥太郎タイピングゲーム
            </h2>
            <div className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              ドットインストールを学習しながら作った、カレンダーと時計。二つ組み合わせて琥太郎くんをあしらえば、世界に一つだけのマイウォッチ。格安でアプリを置けるのはAWS
              S3しかないと思っていた。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                AWSにS3デプロイ♪ Route53設定できる。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                修正のたびにコンソールに行くの、死ぬ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                長いURL、使えない💦
              </li>
            </ul>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyTypingGame/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0'>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyTypingGame/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='琥太郎タイピングゲーム'
                src={typing}
                className='pl-4 sm:pr-10 lg:pr-32 xl:pl-10'
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>AWS S3</SkillTag>
          </div>
        </div>
      </section>
      {/* <!-- Section 2 --> */}
      <section className='pt-7 pb-7 w-full text-yellow-50 md:pt-20'>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10'>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyStopwatch/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='aaaa'
                src={stopwatch}
                className='p-2 pr-5 pl-6 xl:pr-20 xl:pl-16 '
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'>HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>AWS S3</SkillTag>
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first pb-2 w-full border-solid md:order-none md:pl-10 md:w-1/2'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              琥太郎ストップウォッチ
            </h2>
            <div className='pt-4 pb-5 m-0 leading-7 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32'></div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              だいたいこの辺りから
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>
                ママのプログラミングハマりっぷりは、ドン引き（息子
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>
                パパのことオタクっていうけど、ママも相当だよね（娘
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>
                心が暇なら死んだ方がマシ...
              </li>
            </ul>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyStopwatch/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16 xl:mt-0'>
          {/* <!-- Content --> */}
          <div className='box-border w-full border-solid md:pl-6 md:w-1/2 xl:pl-32'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              笑ってはいけない英語学習
            </h2>
            <div className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              日本でも親父ギャグというのがありますが、英語にもdad
              jokesがあるんですね。世界は普遍性に満ちています。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                親父ギャグ、API叩ける。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                ホスティングサービスNetlifyを知る。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                GitHubと連携して、コマンド一つでサイトを更新。夢叶った。
              </li>
            </ul>
            <a
              href='https://kotaro-club-meow02.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0'>
            <a
              href='https://kotaro-club-meow02.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='笑ってはいけない英語学習'
                src={joke}
                className='pl-4 sm:pr-10 lg:pr-32 xl:pl-10'
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>
        </div>
      </section>
      {/* <!-- Section 3 --> */}
      <section className='pt-7 pb-7 w-full text-yellow-50 md:pt-20'>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10'>
            <a
              className='ml-5'
              href='https://kota-sound-board.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='サウンドボード'
                src={sound}
                className='p-2 pr-5 pl-6 xl:pr-20 xl:pl-16 '
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first pb-2 w-full border-solid md:order-none md:pl-10 md:w-1/2'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              サウンドボード
            </h2>
            <div className='pt-4 pb-5 m-0 leading-7 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32'>
              このサウンドボードを組み合わせたアプリは司会を引き受けるたびに大量生産しました。レスポンシブとOGPに異様に拘っていたこの頃。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                オンラインでのイベントは、いかに迷子にならないかが勝負。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                司会原稿に効果音を仕込んでおけば、拍手やファンファーレもタイムリーに発動。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                こんな使い方する人、ほとんどいない（需要なくても気にしない。
              </li>
            </ul>
            <div className='flex flex-row justify-between w-full md:justify-items-start'>
              <a
                className='ml-5'
                href='https://kota-sound-board.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button className='mr-3'>アプリを覗く</Button>
              </a>
              <a
                href='https://qin-lt-sounds.netlify.app//'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button>司会原稿を覗く</Button>
              </a>
            </div>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16 xl:mt-0'>
          {/* <!-- Content --> */}
          <div className='box-border w-full border-solid md:pl-6 md:w-1/2 xl:pl-32'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              Neumorphism のキーコード取得アプリ
            </h2>
            <div className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              Neumorphismというデザインを知り、実装したくなって作ってみたアプリ。キーコードの使い所がわかりません。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                Neumorphismはクール。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                コード量半端ない。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                デザインに凝りすぎて、JSの勉強にはあまりならなかった。
              </li>
            </ul>
            <a
              href='https://kotaro-club-meow03.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0'>
            <a
              href='https://kotaro-club-meow03.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='Neumorphism のキーコード取得アプリ'
                src={keyevent}
                className='pl-4 sm:pr-10 lg:pr-32 xl:pl-10'
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>
        </div>
      </section>
      {/* <!-- Section 4 --> */}
      <section className='pt-7 pb-7 w-full text-yellow-50 md:pt-20'>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10'>
            <a
              href='https://kotaro-club-meow07.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='一日2リットルのお水を飲みましょう'
                src={drinkwater}
                className='p-2 pr-5 pl-6 xl:pr-20 xl:pl-16 '
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first pb-2 w-full border-solid md:order-none md:pl-10 md:w-1/2'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              一日2リットルのお水を飲みましょう
            </h2>
            <div className='pt-4 pb-5 m-0 leading-7 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32'>
              自分でやると、ダサいデザインになってしまう。気分を上げるためにキラキラを配置。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                1日、2リットルのお水を飲むと良い。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                250mlのお水を8杯飲んだらちょっと嬉しいアプリ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                使うのすぐ飽きた。→いつまでも愛されるアプリすごい！
              </li>
            </ul>
            <a
              href='https://kotaro-club-meow07.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16 xl:mt-0'>
          {/* <!-- Content --> */}
          <div className='box-border w-full border-solid md:pl-6 md:w-1/2 xl:pl-32'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              映画検索アプリ
            </h2>
            <div className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              <a href='https://www.themoviedb.org/documentation/api'>TMDB</a>
              からAPIを取得して映画を検索できるアプリ
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                Newmorphismを極めたいと思いつつ、ド派手なデザインに移行。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                OGPは完璧。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                CSSでの塗り絵は楽しい。
              </li>
            </ul>
            <a
              href='https://kotaro-club-meow06.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0'>
            <a
              href='https://kotaro-club-meow06.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='映画検索アプリ'
                src={movie}
                className='pl-4 sm:pr-10 lg:pr-32 xl:pl-10'
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>
        </div>
      </section>
      <section className='pt-7 pb-7 w-full text-yellow-50 md:pt-20'>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10'>
            <a
              href='https://qin-who-next.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='幹事決めアプリ'
                src={"/pic_who-next.jpg"}
                className='p-2 pr-5 pl-6 xl:pr-20 xl:pl-16 '
              />
            </a>
            <SkillTag spanColor='red'>JavaScript</SkillTag>
            <SkillTag spanColor='blue'> HTML + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first pb-2 w-full border-solid md:order-none md:pl-10 md:w-1/2'>
            <h2 className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'>
              イベントを盛り上げるために作るアプリは楽しい
            </h2>
            <div className='pt-4 pb-5 m-0 leading-7 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32'>
              幹事をランダムに選出。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                ピカピカアニメーションが炸裂。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                選出中は、作者としては変な挙動がないか、ドキドキ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                みんな使ってくれてありがとう。人々のやさしさに泣く。
              </li>
            </ul>
            <a
              href='https://qin-who-next.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16 xl:mt-0'>
          {/* <!-- Content --> */}
          <div className='box-border w-full border-solid md:pl-6 md:w-1/2 xl:pl-32'>
            <h2
              id='bell'
              className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'
            >
              Ring the Bells
            </h2>
            <div className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              IT KINGDOM
              LT会登壇のために作ったアプリ。アプリに行って、ひつじさんをタップしてみて。素敵な1日になること間違いなし！
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                かなり学習の集大成。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                Webで独特な境地に立つ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                ベルを鳴らそう。
              </li>
            </ul>
            <a
              href='https://ring-the-bells.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0'>
            <a
              href='https://ring-the-bells.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='Ring the Bells'
                src={"/pic_misc03.jpg"}
                className='pl-4 sm:pr-10 lg:pr-32 xl:pl-10'
              />
            </a>
            <SkillTag spanColor='red'>React</SkillTag>
            <SkillTag spanColor='blue'> 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Netliy</SkillTag>
          </div>
        </div>
      </section>
      <section className='pt-7 pb-7 w-full text-yellow-50 md:pt-20'>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row lg:px-16'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-5 mb-4 -ml-5 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:ml-0 md:w-1/2 md:max-w-none lg:mb-0 xl:pl-10'>
            <a
              href='https://qin-lt.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='チャットアプリ'
                src={"/pic01.jpg"}
                className='p-2 pr-5 pl-6 xl:pr-20 xl:pl-16 '
              />
            </a>
            <SkillTag spanColor='red'>React</SkillTag>
            <SkillTag spanColor='blue'>Material UI + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Vercel</SkillTag>
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first pb-2 w-full border-solid md:order-none md:pl-10 md:w-1/2'>
            <h2
              id='chat'
              className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'
            >
              チャットアプリ
            </h2>
            <div className='pt-4 pb-5 m-0 leading-7 border-0 border-gray-300 sm:pr-12 lg:text-lg xl:pr-32'>
              LT会イベントでヤジを飛ばしたり、質問したり。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                イベントごとに模様替え。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                みんなのコメントが愛しい。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                少しづつ進化。
              </li>
            </ul>
            <a
              href='https://qin-lt.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col content-center items-center px-8 mx-auto mt-2 max-w-7xl leading-6 border-0 border-gray-300 border-solid md:flex-row md:mt-20 lg:px-16 xl:mt-0'>
          {/* <!-- Content --> */}
          <div className='box-border w-full border-solid md:pl-6 md:w-1/2 xl:pl-32'>
            <h2
              id='bulletin'
              className='m-0 text-xl font-semibold leading-tight border-0 border-gray-300 md:text-2xl lg:text-3xl'
            >
              お題投稿アプリ
            </h2>
            <div className='pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 sm:pr-10 lg:text-lg'>
              IT KINGDOM イベントのために作ったお題投稿アプリ。
            </div>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                Firebaseへの登録がわからなくて、締め切りの差し迫る中、現役エンジニアと初のコラボ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                DB設計の大切さを痛感。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                エンジニア脳じゃないので、独創的なアプリ。
              </li>
            </ul>
            <a
              href='https://qin-bulletin-board.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>アプリを覗く</Button>
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 mb-4 w-full max-w-md text-center bg-no-repeat bg-contain border-solid md:mt-0 md:w-1/2 md:max-w-none lg:mb-0'>
            <a
              href='https://qin-bulletin-board.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                width={700}
                height={500}
                alt='チャットアプリ'
                src={"/pic06.jpg"}
                className='pl-4 sm:pr-10 lg:pr-32 xl:pl-10'
              />
            </a>
            <SkillTag spanColor='red'>React</SkillTag>
            <SkillTag spanColor='blue'>Material UI + 素のCSS</SkillTag>
            <SkillTag spanColor='purple'>Firebase + Vercel</SkillTag>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default miscellaneous;
