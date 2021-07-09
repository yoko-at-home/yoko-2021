import Image from "next/image";

import { Button } from "../components/atom/Button";
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
      <BannerLanding title='いろいろ' description='次々生まれた楽しい子たち' />
      {/* <!-- Section 1 --> */}
      <section className='pt-7 md:pt-20 pb-7 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='琥太郎カレンダーとアナログ時計'
              src={clock}
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none pb-2 md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              琥太郎カレンダーとアナログ時計
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-5 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              Progate、ドットインストールそのままやってもつまらない。デザインを変えてみる楽しさに目覚める。
            </p>
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
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mt-2 md:mt-20 xl:mt-0 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Content --> */}
          <div className='box-border md:pl-6 xl:pl-32 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              琥太郎タイピングゲーム
            </h2>
            <p className='pt-4 sm:pr-10 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              ドットインストールを学習しながら作った、カレンダーと時計。二つ組み合わせて琥太郎くんをあしらえば、世界に一つだけのマイウォッチ。格安でアプリを置けるのはAWS
              S3しかないと思っていたこの頃。
            </p>
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
                長いURL、使いえない💦
              </li>
            </ul>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyTypingGame/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='琥太郎タイピングゲーム'
              src={typing}
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
      {/* <!-- Section 2 --> */}
      <section className='pt-7 md:pt-20 pb-7 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='aaaa'
              src={stopwatch}
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none pb-2 md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              琥太郎ストップウォッチ
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-5 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              だいたいこの辺りから
            </p>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                ママのプログラミングハマりっぷりは、ドン引き（息子
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                パパのことオタクっていうけど、ママも相当だよね（娘
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                心が暇なら死んだ方がマシ（自分...
              </li>
            </ul>
            <a
              href='https://yoko-stage.s3.ap-northeast-1.amazonaws.com/MyStopwatch/index.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mt-2 md:mt-20 xl:mt-0 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Content --> */}
          <div className='box-border md:pl-6 xl:pl-32 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              笑ってはいけない英語学習
            </h2>
            <p className='pt-4 sm:pr-10 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              日本でも親父ギャグというのがありますが、英語にもdad
              jokesがあるんですね。世界は普遍性に満ちています。
            </p>
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
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='笑ってはいけない英語学習'
              src={joke}
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
      {/* <!-- Section 3 --> */}
      <section className='pt-7 md:pt-20 pb-7 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='サウンドボード'
              src={sound}
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none pb-2 md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              サウンドボード
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-5 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              このサウンドボードを組み合わせたアプリは司会を引き受けるたびに大量生産しました。レスポンシブとOGPに異様に拘っていたこの頃。
            </p>
            <ul className='p-0 m-0 mb-12 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                オンラインでのイベントは、いかに迷子にならないかが勝負
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                司会原稿に効果音を仕込んでおけば、拍手やファンファーレもタイムリーに鳴らせる
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                こんな使い方する人、ほとんどいない（需要なくても気にしない
              </li>
            </ul>
            <div className='flex flex-row justify-between md:justify-items-start w-full'>
              <a
                className="ml-5"
                href='https://kota-sound-board.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button name={"アプリを覗く"} />
              </a>
              <a
                href='https://qin-lt-sounds.netlify.app//'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button name={"司会原稿を覗く"} />
              </a>
            </div>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mt-2 md:mt-20 xl:mt-0 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Content --> */}
          <div className='box-border md:pl-6 xl:pl-32 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              Neumorphism のキーコード取得アプリ
            </h2>
            <p className='pt-4 sm:pr-10 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              Neumorphismというデザインを知り、実装したくなって作ってみたアプリ。キーコードの使い所がわかりません。
            </p>
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
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='Neumorphism のキーコード取得アプリ'
              src={keyevent}
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
      {/* <!-- Section 4 --> */}
      <section className='pt-7 md:pt-20 pb-7 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mb-12 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='一日2リットルのお水を飲みましょう'
              src={drinkwater}
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none pb-2 md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              一日2リットルのお水を飲みましょう
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-5 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              自分でやると、ダサいデザインになってしまう。気分を上げるためにキラキラを配置。
            </p>
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
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}
        </div>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto mt-2 md:mt-20 xl:mt-0 max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Content --> */}
          <div className='box-border md:pl-6 xl:pl-32 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              映画検索アプリ
            </h2>
            <p className='pt-4 sm:pr-10 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              <a href='https://www.themoviedb.org/documentation/api'>TMDB</a>
              からAPIを取得して映画を検索できるアプリ
            </p>
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
              <Button name={"アプリを覗く"} />
            </a>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='映画検索アプリ'
              src={movie}
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default miscellaneous;
