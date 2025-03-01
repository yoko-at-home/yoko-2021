import Image from "next/image";
import Link from "next/link";

import { ButtonSmall } from "../atom/Button";
import { SkillTagSolid } from "../atom/SkillTag";
import { BannerLanding } from "../BannerLanding";
import { Layout } from "../Layout";
import { TimelineStart } from "./TimelineStart";
import { TimelineTop } from "./TimelineTop";
import {
  TimelineVerticalBorder,
  TimelineVerticalBorderLast,
} from "./TimelineVerticalBorder";

export const Timeline = () => {
  return (
    <Layout>
      <BannerLanding title="あゆみ" description="思えば遠くまで..." />

      <div
        className="container justify-start mx-auto mt-36 w-full min-h-screen rounded"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,9,66,1) 4%, rgba(6,85,92,1) 56%",
        }}
      >
        <div className="overflow-hidden relative left-0 flex-wrap px-10 h-full">
          <TimelineTop />
          {/* start of Set5 */}
          {/* <!-- right timeline --> */}
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                November
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <a
                  href="https://www.canon-cat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maincoonブリーダー様のサイトの制作および公開
                </a>
              </h3>
              <div className="text-sm tracking-wide leading-snug text-gray-900">
                使用技術：
                <SkillTagSolid spanColor="red">Next.js</SkillTagSolid>
                <SkillTagSolid spanColor="blue">Tailwind css</SkillTagSolid>
                <SkillTagSolid spanColor="yellow">TypeScript</SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  Vercel + Netlify
                </SkillTagSolid>
              </div>
              {/* <ButtonSmall src='https://github.com/yoko-at-home/yoko-2021'>
                To GitHub
              </ButtonSmall> */}
              <div className="flex flex-col justify-between text-xs text-gray-600 sm:p-3">
                <div className="pb-3">
                  ご希望の多いお問い合わせ機能と依頼主さま本人が投稿できるシステム。Google
                  Analytics導入によるさらなるパフォーマンス改善を実現が可能になりました。
                </div>
                <div className="flex flex-col justify-between sm:flex-row">
                  <Image
                    src="/images/ayumi-seo.jpg"
                    alt="Lighthouse performace score"
                    width={100}
                    height={100}
                  />
                  <a href="canon-cat.com" target="_blank" rel="noreferrer">
                    <Image
                      src="/images/web-canoncat.jpg"
                      alt="canon-catへのリンク"
                      width={150}
                      height={100}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row justify-between items-center mb-5 w-full md:flex-row-reverse">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <TimelineVerticalBorder />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                September
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/websites#blog">コーポレートサイト構築検証</Link>
              </h3>
              <div className="text-sm font-medium tracking-wide leading-snug text-gray-800">
                使用技術：
                <SkillTagSolid spanColor="red">Next.js</SkillTagSolid>
                <SkillTagSolid spanColor="blue">Tailwind css</SkillTagSolid>
                <SkillTagSolid spanColor="purple">microCMS</SkillTagSolid>
                <SkillTagSolid spanColor="purple">auth0</SkillTagSolid>
                <SkillTagSolid spanColor="purple">SendGrid</SkillTagSolid>
                <br />
                <div className="text-xs">
                  コーポレートサイト構築の打診を受け、技術検証。お問い合わせメールの送信処理にSendGrid、ログイン処理にAuth0を検証。
                  <br />
                  パフォーマンス、SEOに強い高性能のJavaScriptサイトを、必要な方に適正な価格でお届けできるように、
                  テンプレート化も同時に進行中。
                </div>
              </div>
              <ButtonSmall src="">GitHubコード非公開</ButtonSmall>
            </div>
          </div>
        </div>
        {/* end of Set5 */}

        {/* start of Set4*/}
        <div className="overflow-hidden relative left-0 flex-wrap px-10 h-full">
          {/* <!-- right timeline --> */}
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                July
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                ポートフォリオサイト（本サイト）の作成
              </h3>
              <div className="text-sm tracking-wide leading-snug text-gray-900">
                使用技術：
                <SkillTagSolid spanColor="red">Next.js</SkillTagSolid>
                <SkillTagSolid spanColor="blue">Tailwind css</SkillTagSolid>
                <SkillTagSolid spanColor="yellow">TypeScript</SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  Vercel + Netlify
                </SkillTagSolid>
                <br />
                <span className="text-xs">
                  開発環境をNetlify、本番環境をVercelに置く。
                  SEO、OGP、問い合わせフォーム、 言語属性に対応。
                  Lighthouseパフォーマンススコア98点。JSXの記法についてはほぼマスター。TypeScriptは学習を開始した程度。CLIはかなり自由に使えつつある。
                  <br />
                  今後の課題：グローバルな状態の保持、現状のスキルはプログラミング全般で基本概念を抑えた程度であり、props、stateの管理など全般により早く正確に実装するスキルが望まれる。OGPはページごとのmetaデータの出しわけが要学習。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/yoko-2021">
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row justify-between items-center mb-5 w-full md:flex-row-reverse">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <TimelineVerticalBorder />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                June
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/websites#blog">ブログサイト構築検証</Link>
              </h3>
              <div className="text-sm font-medium tracking-wide leading-snug text-gray-800">
                使用技術：
                <SkillTagSolid spanColor="red">Next.js</SkillTagSolid>
                <SkillTagSolid spanColor="blue">Tailwind css</SkillTagSolid>
                <SkillTagSolid spanColor="purple">microCMS</SkillTagSolid>
                <br />
                <span className="text-xs">
                  ブログサイト構築の打診を受け、技術検証を実施。APIを取得してデータを更新できることを確認する。フルスクラッチでループ処理などを実装する実力はないが
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://blog.microcms.io/microcms-next-jamstack-blog"
                  >
                    公式サイトのブログ
                  </a>
                  などの具体的なコードが示された場合は、実装してスタイリングが可能。課題：行間やマージンの取り方など。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/next-microcms">
                To GitHub
              </ButtonSmall>
            </div>
          </div>
        </div>
        {/* start of Set4 */}

        {/* start of Set3 */}
        <div className="overflow-hidden relative left-0 flex-wrap px-10 h-full">
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <div className="order-1 py-4 px-6 w-5/12 rounded-lg" />
          </div>
          {/* <!-- right timeline --> */}
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                May
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/miscellaneous/#bulletin">
                  お題投稿アプリの開発
                </Link>
              </h3>
              <div className="text-sm tracking-wide leading-snug text-gray-900">
                使用技術：
                <SkillTagSolid spanColor="red">React</SkillTagSolid>
                <SkillTagSolid spanColor="blue">
                  Material UI + 素のCSS
                </SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  Vercel + Firebase
                </SkillTagSolid>
                <br />
                <span className="text-xs">
                  オンラインコミュニティイベントでメンバーからのお題を投稿するためにアプリにチャレンジ。ローカルストレージにメモを登録するコードを参照して、フロントの実装を進めたが、複数人による投稿を可能にするためにFirebaseでバックエンド処理を実装した。
                  実際にはバックエンド処理は自力ではできず、現役エンジニアとの初の共同開発となった。ブランチを切って開発する実践を経験。アプリとして多くの課題があったものの、制作からデプロイまで1週間以内で完成にこぎつけ、プログラミングに自信を得た作品。これを機に、素のCSSでの実装に課題を感じる。
                  バックエンド（DB）の設計がアプリに与えるインパクトについて実例を持って理解。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/qin_bulletin-board/">
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row justify-between items-center mb-8 w-full md:flex-row-reverse">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                March
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/miscellaneous/#bell">
                  Ring the Bells（LT会登壇用アプリ）
                </Link>
              </h3>
              <div className="text-sm font-medium tracking-wide leading-snug text-gray-800">
                使用技術：
                <SkillTagSolid spanColor="red">React</SkillTagSolid>
                <SkillTagSolid spanColor="blue">
                  Material UI + 素のCSS
                </SkillTagSolid>
                <SkillTagSolid spanColor="purple">Netlify</SkillTagSolid>
                <span className="text-xs">
                  過去の出来事を物語調に語るために作ったアプリ。過去のJavaScriptのコードをReactに応用。スムーズスクロール、React-mouse-particleなど、美しくて便利なライブラリを知る。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/next-microcms">
                To GitHub
              </ButtonSmall>
            </div>
          </div>
        </div>
        {/* start of Set3*/}

        {/* start of Set2 */}
        <div className="overflow-hidden relative left-0 flex-wrap px-10 h-full">
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <div className="order-1 py-4 px-6 w-5/12 rounded-lg" />
          </div>
          {/* <!-- right timeline --> */}
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-8 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                February
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/miscellaneous/#chat">チャットアプリの開発</Link>
              </h3>
              <div className="text-sm tracking-wide leading-snug text-gray-900">
                使用技術：
                <SkillTagSolid spanColor="red">React</SkillTagSolid>
                <SkillTagSolid spanColor="blue">
                  Material UI + 素のCSS
                </SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  Vercel + Firebase
                </SkillTagSolid>
                <br />
                <span className="text-xs">
                  はむさんのUdemyの井戸端会議アプリの講座を受講してほぼそのまま使用しています。
                  オンラインイベントで過去３回使用された経験があり、その度ごとに模様替え、その後質問が分かりにくなどの課題があり、質問にチェックを入れると質問タブに表示されるように進化を重ねています。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/qin_bulletin-board/">
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row justify-between items-center mb-8 w-full md:flex-row-reverse">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorder />
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-100 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                2021
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/programming/#mercari">
                  メルカリサイトのクローン
                </Link>
              </h3>
              <div className="text-sm font-medium tracking-wide leading-snug text-gray-800">
                使用技術：
                <SkillTagSolid spanColor="red">React</SkillTagSolid>
                <SkillTagSolid spanColor="blue">素のCSS + BEM</SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  Netlify+ Heroku
                </SkillTagSolid>
                <br />
                <span className="text-xs">
                  初めてReactを知り、html/cssでクローンしたサイトをjsx化。ログイン、データベース処理（PostgresQL）を学ぶ。Reactの基礎、json,
                  jwt, async
                  awaitなどの構文,ローカルストレージなど広く浅く学ぶ。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/next-microcms">
                To GitHub
              </ButtonSmall>
            </div>
          </div>
        </div>
        {/* end of Set2 */}

        {/* start of Set1 */}
        <div className="overflow-hidden relative left-0 flex-wrap px-10 h-full">
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            <TimelineVerticalBorderLast />
            <div className="order-1 py-4 px-6 w-5/12 rounded-lg" />
          </div>
          {/* <!-- right timeline --> */}
          <div className="flex justify-between items-center mb-8 w-full">
            <div className="order-1 w-5/12" />
            {/* <TimelineVerticalBorder /> */}
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-8 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                November
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/websites/#choco">Webサイト作成</Link>
              </h3>
              <div className="text-sm tracking-wide leading-snug text-gray-900">
                使用技術：
                <SkillTagSolid spanColor="red">React</SkillTagSolid>
                <SkillTagSolid spanColor="blue">素のCSS</SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  Netlify(お問合せフォーム)
                </SkillTagSolid>
                <br />
                <span className="text-xs">
                  学びたてのReactを使ってみたくてサイトを作成。さまざまなミニアプリを量産していた時期。お問合せフォームの実装に苦労しました。Netlifyではお問合せフォームが無料で設置できるため、練習してみました。
                </span>
              </div>
              <ButtonSmall src="https://github.com/yoko-at-home/chocolatepiano_react">
                To GitHub
              </ButtonSmall>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="flex flex-row justify-between items-center mb-8 w-full md:flex-row-reverse">
            <div className="order-1 w-5/12" />
            {/* <TimelineVerticalBorder /> */}
            <div className="flex relative z-20 order-1">
              <h3 className="absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl">
                April
              </h3>
            </div>
            <div className="order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl">
              <h3 className="mb-3 text-lg font-bold text-gray-800 hover:text-green-600">
                <Link href="/programming/#sakuraipiano">学習の開始</Link>
              </h3>
              <div className="text-sm font-medium tracking-wide leading-snug text-gray-800">
                使用技術：
                <SkillTagSolid spanColor="red">HTML</SkillTagSolid>
                <SkillTagSolid spanColor="blue">素のCSS</SkillTagSolid>
                <SkillTagSolid spanColor="purple">
                  AWS (S3/Route53)
                </SkillTagSolid>
                <br />
                <span className="text-xs">
                  Progate、ドットインストールで独学を開始。初めてのWebサイトをネットで見つけたBootstrapテンプレートを用いて作成。AWSのS3にホスティングし、Route53でルーティングをしてみた。AWSを剪定したのは、前職でのサービスがAWSを使用しており、離職後も理解を深めてみたいという思いが強かったため。
                </span>
              </div>
              {/* <ButtonSmall src='https://github.com/yoko-at-home/next-microcms'>
                To GitHub
              </ButtonSmall> */}
            </div>
          </div>
        </div>
        {/* end of Set1 */}
        <TimelineStart />
      </div>
    </Layout>
  );
};
