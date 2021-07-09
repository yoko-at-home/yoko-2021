/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const handleNavBarOpen = () => {
    return setIsNavbarOpen(!isNavbarOpen);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      <nav className='flex fixed top-0 right-0 z-50 flex-wrap justify-between items-center py-3 px-2 w-full navbar-expand-lg'>
        <div className='container flex flex-wrap justify-between items-center px-4 mx-auto'>
          <div className='flex relative justify-between w-full'>
            <Link href='/'>
              <a
                className='py-2 mr-4 text-sm font-bold leading-relaxed uppercase whitespace-nowrap '
                href='#pablo'
              >
                <span role='img' aria-label='sparkles'>
                  ✨
                </span>
              </a>
            </Link>
            <button
              className='block py-1 px-3 text-xl leading-none bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none'
              type='button'
              onClick={handleNavBarOpen}
            >
              {/* <i
                className='text-blue-50 fas fa-bars'
                style={{ textShadow: "0px 0px 25px rgba(125, 125, 125, 0.8)" }}
              ></i> */}
              <span role='img' aria-label='sparkles animate-pulse'>
                ✨
              </span>
              <span className='ml-2 text-xs text-yellow-100 animate-pulse'>
                メニュー
              </span>
              <span role='img' aria-label='sparkles animate-pulse'>
                ✨
              </span>
            </button>
          </div>
          <div
            className={
              "flex-grow items-center lg:bg-opacity-40 lg:shadow-none backdrop-opacity-80 backdrop-filter backdrop-blur-lg shadow-inner rounded drop-shadow-sm lg:text-white hover:text-yellow-400" +
              (isNavbarOpen ? " block" : " hidden")
            }
            id='example-navbar-warning'
            style={{ backgroundColor: "rgba(15, 10, 80, .6)" }}
          >
            <ul className='flex flex-col mx-auto lg:ml-auto list-none'>
              <li className='flex mx-auto'>
                <Link href='/'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-white hover:text-yellow-400 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-star leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>
                      home
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/programming'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-white hover:text-yellow-400 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-star leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>
                      プログラミング
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/websites'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-facebook leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>Webサイト</span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/community'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-facebook leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>
                      ２つのコミュニティ
                    </span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/language'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-facebook leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>語学</span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/yoko_sings'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-facebook leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>歌</span>
                  </a>
                </Link>
              </li>
              <li className='flex mx-auto'>
                <Link href='/miscellaneous'>
                  <a className='flex items-center py-4 lg:py-2 px-3 text-xs font-bold text-gray-700 uppercase'>
                    {/* <i className='text-lg text-gray-400 fab fa-facebook leading-lg ' /> */}
                    <span className='mx-auto ml-2 w-96 text-center text-yellow-100'>いろいろ</span>
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
