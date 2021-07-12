import Link from "next/link";

import { BannerLanding } from "../components/BannerLanding";
import { ButtonSmall } from "./atom/Button";
import { Layout } from "./Layout";

export const Timeline = () => {
  return (
    <Layout>
      <BannerLanding title='スキルまとめ' description='思えば遠くまで...' />

      <div
        className='container justify-start mx-auto mt-36 w-full min-h-screen rounded'
        style={{
          background:
            "linear-gradient(180deg, rgba(2,9,66,1) 4%, rgba(6,85,92,1) 56%",
        }}
      >
        {/*Set1 */}
        <div className='overflow-hidden relative left-0 flex-wrap px-10 h-full'>
          <div className='flex justify-between items-center mb-5 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex z-20 order-1 items-center w-16 h-16 bg-gray-300 rounded-full shadow-xl'>
              <div className='absolute top-10 left-1/2 z-0 min-h-screen border border-gray-300'></div>
              <h3 className='z-50 mx-auto text-lg font-semibold tracking-tighter leading-4 text-green-800 whitespace-nowrap'>
                2021
                <br />
                <span className='text-xs tracking-widest'>&nbsp;現 在</span>
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
          </div>
          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                July
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                ポートフォリオサイト（本サイト）の作成
              </h3>
              <p className='text-sm tracking-wide leading-snug text-gray-900 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  Next.js
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  Tailwind css
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-yellow-400 rounded-full'>
                  TypeScript
                </span>
                <br />
                <br />
                開発環境をNetlify、本番環境をVercelに置く。
                SEO、OGP、問い合わせフォーム、 言語属性に対応。
                Lighthouseパフォーマンススコア98点。JSXの記法についてはほぼマスター。TypeScriptは学習を開始した程度。CLIはかなり自由に使えつつある。
                <br />
                今後の課題：グローバルな状態の保持、現状のスキルはプログラミング全般で基本概念を抑えた程度であり、props、stateの管理など全般により早く正確に実装するスキルが望まれる。OGPはページごとのmetaデータの出しわけが要学習。
              </p>
              <ButtonSmall src='https://github.com/yoko-at-home/yoko-2021'>
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className='flex flex-row md:flex-row-reverse justify-between items-center mb-5 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                June
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                <Link href='/websites#blog'>ブログサイト構築検証</Link>
              </h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-gray-800 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  Next.js
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  Tailwind css
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-purple-400 rounded-full'>
                  MicroCMS
                </span>
                <br />
                ブログサイト構築の打診を受け、技術検証を実施。APIを取得してデータを更新できることを確認する。フルスクラッチでループ処理などを実装する実力はないが
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://blog.microcms.io/microcms-next-jamstack-blog'
                >
                  公式サイトのブログ
                </a>
                などの具体的なコードが示された場合は、実装してスタイリングが可能。課題：行間やマージンの取り方など。
              </p>
              <ButtonSmall src='hhttps://github.com/yoko-at-home/next-microcms'>
                To GitHub
              </ButtonSmall>
            </div>
          </div>
        </div>

        {/* Set2 */}
        <div className='overflow-hidden relative left-0 flex-wrap px-10 h-full'>
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            {/* <div className='flex z-20 order-1 items-center w-16 h-16 bg-gray-300 rounded-full shadow-xl'> */}
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            {/* </div> */}
            <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
          </div>
          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                May
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                <Link href='/miscellaneous/#bulletin'>
                  お題投稿アプリの開発
                </Link>
              </h3>
              <p className='text-sm tracking-wide leading-snug text-gray-900 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  React
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  Material UI + 素のCSS
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-purple-400 rounded-full'>
                  Firebase
                </span>
                <br />
                オンラインコミュニティイベントでメンバーからのお題を投稿するためにアプリにチャレンジ。ローカルストレージにメモを登録するコードを参照して、フロントの実装を勧めたが、複数人による投稿を可能にするためにFirebaseでバックエンド処理を実装した。
                実際にはバックエンド処理は自力ではできず、現役エンジニアとの初の共同開発となった。ブランチを切って開発する実践を経験。アプリとして多くの課題があったものの、制作からデプロイまで1週間以内で完成にこぎつけ、プログラミングに自信を得た作品。これを機に、素のCSSでの実装に課題を感じる。
              </p>
              <ButtonSmall src='hhttps://github.com/yoko-at-home/qin_bulletin-board/'>
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className='flex flex-row md:flex-row-reverse justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                March
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                Ring the Bells（LT会登壇用アプリ）
              </h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-gray-800 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  React
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  素のCSS
                </span>
                過去の出来事を物語調に語るために作ったアプリ。過去のJavaScriptのコードをReactに応用。スムーズスクロール、React-mouse-particleなど、美しくて便利なライブラリを知る。
              </p>
              <ButtonSmall src='hhttps://github.com/yoko-at-home/next-microcms'>
                To GitHub
              </ButtonSmall>
            </div>
          </div>
        </div>

        {/* Set3 */}
        <div className='overflow-hidden relative left-0 flex-wrap px-10 h-full'>
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            {/* <div className='flex z-20 order-1 items-center w-16 h-16 bg-gray-300 rounded-full shadow-xl'> */}
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            {/* </div> */}
            <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
          </div>
          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-8 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                February
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                <Link href='/miscellaneous/#chat'>チャットアプリの開発</Link>
              </h3>
              <p className='text-sm tracking-wide leading-snug text-gray-900 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  React
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  Material UI + 素のCSS
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-purple-400 rounded-full'>
                  Firebase
                </span>
                <br />
                はむさんのUdemyの井戸端会議アプリの講座を受講してほぼそのまま使用しています。
                オンラインイベントで過去３回使用された経験があり、その度ごとに模様替え、その後質問が分かりにくなどの課題があり、質問にチェックを入れると質問タブに表示されるように進化を重ねています。
              </p>
              <ButtonSmall src='hhttps://github.com/yoko-at-home/qin_bulletin-board/'>
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className='flex flex-row md:flex-row-reverse justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                2021
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                <Link href='/programming/#mercari'>
                  メルカリサイトのクローン
                </Link>
              </h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-gray-800 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  React
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  素のCSS + BEM
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-purple-400 rounded-full'>
                  Heroku
                </span>
                <br />
                初めてReactを知り、html/cssでクローンしたサイトをjsx化。ログイン、データベース処理（PostgresQL）を学ぶ。Reactの基礎、json,
                jwt, async awaitなどの構文,ローカルストレージなど広く浅く学ぶ。
              </p>
              <ButtonSmall src='hhttps://github.com/yoko-at-home/next-microcms'>
                To GitHub
              </ButtonSmall>
            </div>
          </div>
        </div>

        {/* Set4 */}
        <div className='overflow-hidden relative left-0 flex-wrap px-10 h-full'>
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            {/* <div className='flex z-20 order-1 items-center w-16 h-16 bg-gray-300 rounded-full shadow-xl'> */}
              <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            {/* </div> */}
            <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
          </div>
          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='absolute left-1/2 z-0 h-screen border border-gray-300'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-8 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                November
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                <Link href='/miscellaneous/#chat'>Webサイト作成</Link>
              </h3>
              <p className='text-sm tracking-wide leading-snug text-gray-900 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  React
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  素のCSS
                </span>
                <br />
                学びたてのReactを使ってみたくてサイトを作成。さまざまなミニアプリを量産していた時期。
              </p>
              {/* <ButtonSmall src='hhttps://github.com/yoko-at-home/qin_bulletin-board/'>
                To GitHub
              </ButtonSmall> */}
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className='flex flex-row md:flex-row-reverse justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                April
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-lg font-bold text-gray-800'>
                <Link href='/programming/#sakuraipiano'>学習の開始</Link>
              </h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-gray-800 text-opacity-100'>
                使用技術：
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-red-400 rounded-full'>
                  HTML
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-blue-400 rounded-full'>
                  素のCSS
                </span>
                <span className='inline-block items-center py-1.5 px-3 text-xs font-medium leading-none text-white uppercase bg-purple-400 rounded-full'>
                  AWS (S3/Route53)
                </span>
                <br />
                Progate、ドットインストールで独学を開始。初めてのWebサイトをネットで見つけたBootstrapテンプレートを用いて作成。AWSのS3にホスティングし、Route53でルーティングをしてみた。AWSを剪定したのは、前職でのサービスがAWSを使用しており、離職後も理解を深めてみたいという思いが強かったため。
              </p>
              {/* <ButtonSmall src='hhttps://github.com/yoko-at-home/next-microcms'>
                To GitHub
              </ButtonSmall> */}
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center mb-36 w-full'>
          <div className='order-1 w-5/12'></div>
          <div className='flex z-20 order-1 items-center mb-36 w-16 h-16 bg-gray-300 rounded-full shadow-xl '>
            <h3 className='z-50 mx-auto text-lg font-semibold tracking-wide leading-4 text-green-800 whitespace-nowrap'>
              2020
              <br />
              <span className='text-xs tracking-tight'>学習開始</span>
            </h3>
          </div>
          <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
        </div>
      </div>
    </Layout>
  );
};
