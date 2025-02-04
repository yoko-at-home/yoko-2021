import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <nav
        className="hidden overflow-hidden overflow-y-auto relative top-0 bottom-0 left-0 z-10 flex-row flex-nowrap justify-between py-4 px-6 w-64 text-lg tracking-widest text-white border-8 border-purple-50 border-double shadow-xl md:fixed lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,9,66,1) 4%, rgba(6,85,92,1) 76%)",
        }}
      >
        <div className="flex flex-col flex-nowrap justify-between w-full min-h-full">
          <ul className="flex flex-col list-none">
            <li className="flex">
              <Link href="/">
                <div className="flex p-3 text-xs font-bold tracking-widest text-left text-white hover:text-yellow-400">
                  <span className="py-3 ml-2 text-yellow-100">ホーム</span>
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link
                href="https://yoko-portfolio.vercel.app/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex py-3 px-3 text-xs font-bold tracking-widest text-gray-700 lg:py-2">
                  <span className="py-3 ml-2 text-yellow-100">
                    Webサイト（制作実績 外部リンク）
                  </span>
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link href="/skills">
                <div className="flex py-3 px-3 text-xs font-bold tracking-widest text-white hover:text-yellow-400 lg:py-2">
                  <span className="py-3 ml-2 text-yellow-100">あゆみ</span>
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link href="/community">
                <div className="flex py-3 px-3 text-xs font-bold tracking-widest text-gray-700 lg:py-2">
                  <span className="py-3 ml-2 text-yellow-100">
                    ２つのコミュニティ
                  </span>
                </div>
              </Link>
            </li>
            <li className="flex">
              <Link href="/yoko_sings">
                <div className="flex py-3 px-3 text-xs font-bold tracking-widest text-gray-700 lg:py-2">
                  <span className="py-3 ml-2 text-yellow-100">
                    歌とデザイン
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
