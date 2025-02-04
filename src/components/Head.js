import Head from "next/head";

export const HeadPart = () => {
  const image = "https://yoko-2021.vercel.app/images/ogp.webp";
  const url = "https://yoko-2021.vercel.app/";
  const content = "yoko Webに生きる | 2020〜2021の活動をまとめました";
  return (
    <Head>
      <title>yoko | Webに生きる | プログラミングを学ぶ</title>
      <meta name="description" content={content} />
      <meta property="og:title" content={content} />
      <meta
        property="og:description"
        content="2020年から2021年の活動をまとめました"
      />
      <meta name="keywords" content="プログラミング, Web制作" />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={content} />
      <meta
        name="twitter:card"
        content="2020年から2021年の活動をまとめました"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yokoiwasaki6" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={content} />
      <meta
        name="twitter:description"
        content="2020年から2021年の活動をまとめました"
      />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={"/favicon.png"} />
    </Head>
  );
};
