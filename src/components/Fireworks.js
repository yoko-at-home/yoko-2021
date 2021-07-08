import { Fireworks } from "fireworks-js/dist/react";

const options = {
  speed: 3,
};

const style = {
  // left: 0,
  // top: 0,
  // display: "absolute",
  width: "100vw",
  height: "30vh",
  background: "rgb(12, 12, 58)",
};

export const FireworksSection = () => {
  return (
    <div className='relative'>
      <div className=''>
        <Fireworks options={options} style={style} />
        <Fireworks options={options} style={style} />
      </div>
      <div className='absolute top-24 p-5 md:p-10 md:mx-28 text-center text-white opacity-40'>
        <h2 className='mb-5 text-lg md:text-3xl underline'>
          初めましてyokoです
        </h2>
        <p className='mb-2 text-sm md:text-lg'>
          時はIT戦国。GAFAをはじめ、世界のIT企業が覇を競う、IT戦乱の世。
          <br />
          産業翻訳引退し、普通の主婦に戻ったyoko。
          <br />
          ネットに散りばめられた宝石のような美しいコードたちの力をえて、エディターの上に命を吹き込み、
          学習というなの崇高な遊びに、日々興じております。
          <br />
          孤独なはずであったコードを書く作業が、いつしか年齢、性別を超えた多くの仲間とつながる扉となっていました。
        </p>
        <p className='text-sm md:text-lg'>
          この1年間、実によく遊びました。
          どうぞごゆるりとこのサイトを巡り、私の楽しい子供達を愛でてやってくださいませ。
          <br />
          今日この出会いが、たとえ儚くとも、この花火のように美しいものになりますように。
        </p>
      </div>
    </div>
  );
};
