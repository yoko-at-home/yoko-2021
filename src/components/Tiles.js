import Link from "next/link";

export const Tiles = () => {
  return (
    <div id='main'>
      <section id='one' className='grid grid-cols-1 md:grid-cols-2'>
        <Link href='/programming'>
          <a>
            <article style={{ backgroundImage: `url('/pic01.jpg')` }}>
              <h3>Programming</h3>
              <p>始まりは...</p>
            </article>
          </a>
        </Link>
        <Link href='/websites'>
          <a>
            <article style={{ backgroundImage: `url('/pic02.jpg')` }}>
              <h3>Websites</h3>
              <p>情報を発信することの威力を知る...</p>
            </article>
          </a>
        </Link>

        <Link href='/community'>
          <a>
            <article style={{ backgroundImage: `url('/pic_over40.jpg')` }}>
              <h3>Community</h3>
              <p>学ぶ仲間を得る...</p>
            </article>
          </a>
        </Link>
        <Link href='/language'>
          <a>
            <article style={{ backgroundImage: `url('/pic04.jpg')` }}>
              <h3>Language</h3>
              <p>Toeicかつて936点...</p>
            </article>
          </a>
        </Link>
        <Link href='/singing'>
          <a>
            <article style={{ backgroundImage: `url('/pic05.jpg')` }}>
              <h3>Singing</h3>
              <p>歌ってます...</p>
            </article>
          </a>
        </Link>
        <Link href='/miscellaneous'>
          <a>
            <article style={{ backgroundImage: `url('/pic06.jpg')` }}>
              <h3>Miscellaneous</h3>
              <p>作り続けたものたちその数...</p>
            </article>
          </a>
        </Link>
      </section>
    </div>
  );
};
