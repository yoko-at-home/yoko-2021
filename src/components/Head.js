import Head from "next/head";

export const HeadPart = () => {
  const image = "/https://yoko-2021.vercel.app/ogp.jpg";
  const url = "/https://yoko-2021.vercel.app/";
  return (
    <Head>
      <title>yoko | webで遊ぶ | プログラミングを学ぶ</title>
      <meta property='og:title' content='yoko Webで遊ぶ' />
      <meta
        property='og:description'
        content='2020年から2021年の活動をまとめました'
      />
      <meta name='keywords' content='プログラミング, Web制作' />
      <meta property='og:type' content='blog' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content='yoko Webで遊ぶ' />
      <meta
        name='twitter:card'
        content='2020年から2021年の活動をまとめました'
      />
      <meta name='twitter:site' content='@yokoiwasaki8' />
      <meta name='twitter:url' content={image} />
      <meta name='twitter:title' content='yoko Webで遊ぶ' />
      <meta
        name='twitter:description'
        content='2020年から2021年の活動をまとめました'
      />
      <meta name='twitter:image' content={image} />
      <link rel='canonical' href={url} />
      <link rel='shortcut icon' href={"/favicon.png"} />
      {/* <link rel='apple-touch-icon' href={"https://t-cr.jp/logo.png"} /> */}
      <link
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
        rel='stylesheet'
      />
    </Head>
  );
};
