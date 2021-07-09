import { Button } from "../components/atom/Button";
import { ImageShrink } from "../components/atom/ImageShrink";
import { Layout } from "../components/Layout";

const programming = () => {
  return (
    <Layout>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto'>
        {/* <div className='absolute top-5 left-5 z-50' desc={"desc"} /> */}
        <div className='flex flex-col lg:order-1 justify-center text-center'>
          【はじめてのWebサイト】
          <ImageShrink
            width={700}
            height={500}
            href={"https://sakuraipiano.com"}
            src={"/pic_piano01.jpg"}
            alt={"櫻井ピアノスクール"}
            desc={"description"}
          />
          <div className='mt-6 text-center'>
            <a
              href={"https://sakuraipiano.com"}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button name={"櫻井ピアノスクールのサイト"} />
            </a>
          </div>
        </div>

        <div className='flex flex-col flex-wrap lg:order-2 justify-between'>
          <div className='p-5 lg:px-10'>
            <h3 className='mb-5 text-lg md:text-2xl underline'>
              学校に行かないと学べないと思っていた昭和なわたし
            </h3>
            <p className='lg:w-min min-w-full text-sm lg:text-base'>
              ヘルプの翻訳を長く手掛けておりましたので、htmlやCSSには馴染みがあったのです。ただ、自分で1から作ったことも、ホームページを作成したこともありませんでした。しかし、それらはdivをブロックのように重ねた恐ろしいタグの塊でした。
              <br />
              組織改変で、派遣最後の2年をソフトウェア開発本部で過ごしました。バイリンガル才女の率いるその集団は、それまでの職場とは全く勝手が異なりました。プロジェクトが終了した時、学び続けたいと心に炎を燃やしました。手がかりは、サイト管理で得た断片的知識。就業中にマスターできなかったGit操作、AWSに関する知識。緊急事態宣言下学習を始めて、これまでのアンテナの低さに驚きました。
              わからないことをググってはいたのです。でもこれほどまでに学ぶ環境がネット上に存在していようとは、それも無料、格安で。Progate、ドットインストール、paiza、Udemy。馬鹿じゃん。学ぶためには学校に行かないといけないという昭和の考えに支配されていました。
              でも、もし仮に知っていたとしても、おそらくそれまでの自分には活用することは困難でした。何しろ全てがワンオペだったのです。コロナまでは。
              <br />
              コロナで活躍の場を奪われ落ち込んでいた友人に、落ち込んでる場合ちゃうねん。私がホームページ作ったる！と言い放ってできたのがこのサイトです。
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:order-4 justify-center text-center'>
          【はじめてのWebサイトは、ご馳走になりました】
          <a
            href='https://izumibashi.com/kakou/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImageShrink
              width={700}
              height={500}
              src={"/pic_uni.jpg"}
              alt={"蔵元佳肴 いづみ橋"}
            />
          </a>
          <div className='my-10 text-center'>
            <a
              href='https://izumibashi.com/kakou/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button name={"蔵元佳肴 いづみ橋"} />
            </a>
          </div>
        </div>
        <div className='lg:order-3 p-5 lg:px-10'>
          <h3 className='pb-3 text-lg md:text-2xl underline'>
            React学びませんか？
          </h3>
          <p className='lg:w-min min-w-full text-sm lg:text-base '>
            Progateをほぼ一巡し、ドットインストールを始めつつ、
            初めてのWebサイトをAWS
            S3からRoute53を使ってリリースした頃、Twitterで声をかけられました。React学びませんか？講師はカナダ在住の現役駆け出しエンジニア。
            Reactなにそれ？は？状態の私でしたが、なんだか若い方々が夢中に追いかけているものの世界を覗いてみたくて、よろしくお願いします♪なんて軽いノリで始めちゃいました。
            Reactを始めたら、Twitterでピータンに声をかけていただきました。そして、
            <a href='https://over40webclub.neltify.app'>Over 40 Web Club</a>
            が誕生しました。Reactレッスンが終わり、今後どのように学習を継続すべきか考えていた時に、
            <a href='https://itkingdom.com'>IT KINGDOM</a>
            というコミュニティができたことを知りました。出会いとは不思議です。
          </p>
        </div>
        <div className='flex flex-col lg:order-5 justify-center text-center'>
          【はじめてのWebサイト模写】
          <ImageShrink
            width={700}
            height={500}
            href={"https://mercari-yoko-2020.netlify.app/"}
            src={"/pic_mercari.jpg"}
            alt={"メルカリクローン"}
            desc={"description"}
          />
          <div className='mt-6 text-center'>
            <a
              href={"https://mercari-yoko-2020.netlify.app/"}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button name={"メルカリクローンのサイト"} />
            </a>
          </div>
        </div>

        <div className='flex flex-col flex-wrap lg:order-6 justify-between'>
          <div className='p-5 lg:px-10 '>
            <h3 className='mb-5 text-lg md:text-2xl underline'>
              ユーザー登録して、登録した名前でようこそyokoさん！と表示された時には、感動しました
              <span role='img' aria-label='sparkes'>
                ✨
              </span>{" "}
            </h3>
            <p className='lg:w-min min-w-full text-sm lg:text-base'>
              Reactのレッスンで学んだ技術：
              HTML、CSS、BEM、React、Node.js、Express、React Router、JWT、
              JSONPlaceholder、local
              storarge、PostgresQL...。なんとか課題はこなすものの、やっとついていけた程度の理解です。これから長い時間をかけて習得していきます。たった半年でしたが、プログラミング界隈の多くの技術についてどっちの方向なのかわかる基礎力を身に付けさせていただきました。
              最後にAtomic
              Desginの考えを取り入れたリファクタリングをして、完全に混乱しました。絶対理解できるようになります。
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:order-8 justify-center text-center'>
          【山浦先生は熱かった】
          <a
            href='https://dokugaku-engineer.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImageShrink
              width={700}
              height={500}
              src={"/pic_dokugaku.jpg"}
              alt={"独学エンジニア"}
            />
          </a>
          <div className='my-10 text-center'>
            <a
              href='https://dokugaku-engineer.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button name={"独学エンジニア"} />
            </a>
          </div>
        </div>
        <div className='lg:order-7 p-5 lg:px-10'>
          <h3 className='pb-3 text-lg md:text-2xl underline'>独学エンジニア</h3>
          <p className='lg:w-min min-w-full text-sm lg:text-base '>
            React学習中に、講師が優秀な方とはいえ、始めて教えるという方。どうも理解が追いつかず、藁をも掴むようにお邪魔させていただいた、独学エンジニアを忘れてはいけません。Gitが使えるようになりたくて、Udemyで山浦先生の講座が受けられると知り、どれだけ勉強になったことでしょう！
            その山浦先生が提供する教材の数々。わかりやすくバックエンドの知識を得ることができました。メルカリクローンの制作で手一杯になり、途中退出してしまいましたが、リタイヤしたOver50のおばさんの質問に全身全霊お答えいただいたNotion今でも忘れません。YouTubeで熱く語るお姿拝見しています。
          </p>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default programming;
