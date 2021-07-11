import Link from "next/link";

import { Button2 } from "./atom/Button";

export const Tiles = () => {
  return (
    <div id='main'>
      <section
        id='one'
        className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 mt-10 min-h-screen'
      >
        <Link href='/programming'>
          <a className='cursor-pointer'>
            <article
              style={{ backgroundImage: `url('/pic01.jpg')` }}
              className='pt-20 h-80 text-center bg-top bg-cover'
            >
              <div className='shadow-2xl'>
                <Button2 name='Programming' />
              </div>
              <div className='mt-10 shadow-2xl'>
                <Button2 name='始まりは...' />
              </div>
            </article>
          </a>
        </Link>
        <Link href='/websites'>
          <a>
            <article
              style={{ backgroundImage: `url('/pic02.jpg')` }}
              className='pt-20 h-80 text-center bg-top bg-cover'
            >
              <div className='shadow-2xl'>
                <Button2 name='情報発信の威力を知る...' />
              </div>
              <div className='mt-10 shadow-2xl '>
                <Button2 name='Websites' />
              </div>
            </article>
          </a>
        </Link>

        <Link href='/community'>
          <a>
            <article
              style={{ backgroundImage: `url('/pic_over40.jpg')` }}
              className='pt-20 h-80 text-center bg-top bg-cover'
            >
              <div className='shadow-2xl'>
                <Button2 name='学ぶ仲間を得る...' />
              </div>
              <div className='mt-10 shadow-2xl '>
                <Button2 name='Community' />
              </div>
            </article>
          </a>
        </Link>
        <Link href='/language'>
          <a>
            <article
              style={{ backgroundImage: `url('/pic04.jpg')` }}
              className='pt-20 h-80 text-center bg-center bg-cover'
            >
              <div className='shadow-2xl'>
                <Button2 name='TOEICかつて9...' />
              </div>
              <div className='mt-10 shadow-2xl '>
                <Button2 name='Language' />
              </div>
            </article>
          </a>
        </Link>
        <Link href='/yoko_sings'>
          <a>
            <article
              style={{ backgroundImage: `url('/pic05.jpg')` }}
              className='pt-20 h-80 text-center bg-top bg-cover'
            >
              <div className='shadow-2xl'>
                <Button2 name='歌ってます...' />
              </div>
              <div className='mt-10 shadow-2xl '>
                <Button2 name='Singing' />
              </div>
            </article>
          </a>
        </Link>
        <Link href='/miscellaneous'>
          <a>
            <article
              style={{ backgroundImage: `url('/pic06.jpg')` }}
              className='pt-20 h-80 text-center bg-top bg-cover'
            >
              <div className='shadow-2xl'>
                <Button2 name='作り続けたものたちその数...' />
              </div>
              <div className='mt-10 shadow-2xl '>
                <Button2 name='Miscellaneous' />
              </div>
            </article>
          </a>
        </Link>
      </section>
    </div>
  );
};
