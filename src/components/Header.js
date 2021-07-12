export const Header = () => {
  return (
    <main>
      <div className='flex relative justify-center content-center items-center pt-16 pb-32 min-w-full h-1/4 lg:h-1/3'>
        <div
          className='absolute top-0 w-full h-full bg-top bg-cover'
          style={{
            backgroundImage: "url('/banner.jpg')",
          }}
        >
          <span
            id='blackOverlay'
            className='absolute w-full h-full bg-black opacity-75'
          ></span>
        </div>
        <div className='container relative'>
          <div className='flex flex-wrap items-center'>
            <div className='py-4 mr-auto ml-auto w-full text-center'>
              <div className='pr-12'>
                <h1
                  className='text-3xl md:text-5xl font-semibold text-white animate-pulse'
                  style={{
                    textShadow: "0px 0px 25px rgba(125, 125, 125, 0.8)",
                  }}
                >
                  Yoko、Webで遊ぶ
                </h1>
                <p
                  className='mt-4 text-lg text-white opacity-75'
                  style={{
                    textShadow: "0px 0px 25px rgba(125, 125, 125, 0.8)",
                  }}
                >
                  美、優、遊、友
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className='overflow-hidden absolute top-auto right-0 bottom-0 left-0 w-full h-16 pointer-events-none'
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className='overflow-hidden absolute bottom-0'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-blue-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div> */}
      </div>
    </main>
  );
};
