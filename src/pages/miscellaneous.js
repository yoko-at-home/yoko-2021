import Image from "next/image";

import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "../components/Layout";

const miscellaneous = () => {
  return (
    <Layout>
      <BannerLanding title='いろいろ' description='次々生まれた楽しい子たち' />
      {/* <!-- Section 1 --> */}
      <section className='pt-7 md:pt-20 pb-7 md:pb-24 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='aaaa'
              src='/pic_misc_kotaclock.jpg'
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              琥太郎カレンダーとアナログ時計
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              JavaScriptの学習を通して、わかったのは
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                JavaScript、難しい。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                ライブラリーには、敵わない。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                現実と折り合いをつけるのは、大切。
              </li>
            </ul>
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
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                AWSにS3デプロイ♪ Route53設定する
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
                URLが超長いのはご愛嬌。
              </li>
            </ul>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='test'
              src='/pic_misc_kota_type.jpg'
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
      {/* <!-- Section 1 --> */}
      <section className='pt-7 md:pt-20 pb-7 md:pb-24 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='aaaa'
              src='/pic_misc_joke.jpg'
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              笑ってはいけない英語学習
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              コマンド一つでそのままデプロイ
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                英語でも、親父ギャグ。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                yoko、Netlifyを知る。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                Netlify、最高。
              </li>
            </ul>
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
              S3しかないと思っていたこの頃。URLが超長いのはご愛嬌。
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                AWSにS3デプロイ♪ Route53設定する
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
                Some awesome integrations
              </li>
            </ul>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='test'
              src='/pic_misc_kota_type.jpg'
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
      {/* <!-- Section 1 --> */}
      <section className='pt-7 md:pt-20 pb-7 md:pb-24 w-full text-yellow-50'>
        <div className='box-border flex flex-col md:flex-row content-center items-center px-8 lg:px-16 mx-auto max-w-7xl leading-6 border-0 border-gray-300 border-solid'>
          {/* <!-- Image --> */}
          <div className='box-border relative px-4 xl:pl-10 mt-5 md:mt-0 mb-4 lg:mb-0 -ml-5 md:ml-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='aaaa'
              src='/pic_misc_kotaclock.jpg'
              className='p-2 pr-5 xl:pr-20 pl-6 xl:pl-16 '
            />
          </div>

          {/* <!-- Content --> */}
          <div className='box-border order-first md:order-none md:pl-10 w-full md:w-1/2 border-solid'>
            <h2 className='m-0 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight border-0 border-gray-300'>
              琥太郎カレンダーとアナログ時計
            </h2>
            <p className='pt-4 sm:pr-12 xl:pr-32 pb-8 m-0 lg:text-lg leading-7 border-0 border-gray-300'>
              JavaScriptの学習を通して、わかったのは、
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                JavaScript、難しい。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                ライブラリーには、敵わない。
              </li>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                現実と折り合いをつけるのは、大切。
              </li>
            </ul>
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
              S3しかないと思っていたこの頃。URLが超長いのはご愛嬌。
            </p>
            <ul className='p-0 m-0 leading-6 border-0 border-gray-300'>
              <li className='box-border relative py-1 pl-0 text-left border-solid'>
                <span className='inline-flex justify-center items-center mr-2 w-6 h-6 text-white bg-yellow-300 rounded-full'>
                  <span className='text-sm font-bold'>✓</span>
                </span>{" "}
                AWSにS3デプロイ♪ Route53設定する
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
                Some awesome integrations
              </li>
            </ul>
          </div>
          {/* <!-- End  Content --> */}

          {/* <!-- Image --> */}
          <div className='box-border relative px-4 mt-10 md:mt-0 mb-4 lg:mb-0 w-full md:w-1/2 max-w-md md:max-w-none text-center bg-no-repeat bg-contain border-solid'>
            <Image
              width={700}
              height={500}
              alt='test'
              src='/pic_misc_kota_type.jpg'
              className='sm:pr-10 lg:pr-32 pl-4 xl:pl-10'
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default miscellaneous;
