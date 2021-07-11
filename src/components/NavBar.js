import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const handleNavBarOpen = () => {
    return setIsNavbarOpen(!isNavbarOpen);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      <nav className='flex fixed top-0 right-0 z-50 flex-wrap justify-between items-center py-3 px-2 w-full'>
        <div className='container flex flex-wrap justify-between items-center px-4 mx-auto'>
          <div className='flex relative justify-end w-full'>
            <button
              className='block py-1 px-3 text-xl leading-none bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none'
              type='button'
              onClick={handleNavBarOpen}
            >
              <span role='img' aria-label='sparkles animate-pulse'>
                ✨
              </span>
              <span className='ml-2 text-xs text-yellow-100 hover:bg-gray-700 bg-opacity-30 animate-pulse'>
                メニュー
              </span>
              <span role='img' aria-label='sparkles animate-pulse'>
                ✨
              </span>
            </button>
          </div>
          <div
            className={
              "flex-grow items-center lg:bg-opacity-60 lg:shadow-none backdrop-opacity-80 backdrop-filter backdrop-blur-lg shadow-inner rounded drop-shadow-sm lg:text-white " +
              (isNavbarOpen ? " block" : " hidden")
            }
            id='example-navbar-warning'
            style={{ backgroundColor: "rgba(15, 10, 80, .6)" }}
          >
            <ul className='flex flex-col mx-auto lg:ml-auto list-none'>
              <li className='flex mx-auto'>
                <Link href='/'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-white uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      home
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/programming'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-white uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      プログラミング
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/websites'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      Webサイト
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/community'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      ２つのコミュニティ
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/language'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      語学
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/yoko_sings'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      歌
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/miscellaneous'>
                  <a className='flex items-center md:py-3 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    <span className='py-3 mx-auto ml-2 w-32 md:w-96 text-center text-yellow-100 hover:bg-gray-700 bg-opacity-30'>
                      いろいろ
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
