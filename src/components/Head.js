import Head from "next/head";

export const HeadPart = (title, description, keyword, image, url) => {
  return (
    <Head>
      <title>yoko | プログラミングを学ぶ</title>
      {/* <title>{title}</title> */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='keywords' content={keyword} />
      <meta property='og:type' content='blog' />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={title} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@yokoiwasaki8' />
      <meta name='twitter:url' content={image} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
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
