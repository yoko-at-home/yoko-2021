import { BannerLanding } from "../components/BannerLanding";
import { Layout } from "./Layout";

export const Timeline = () => {
  // const mytimeline = {
  //   [
  //     id: 1,
  //   date: "May 2020",

  // ]}
  return (
    <Layout>
      <BannerLanding
        title='獲得してきたスキルまとめ'
        description='思えば遠くまで...'
      />

      <div className='container mx-auto mt-36 w-full h-full bg-gray-200 rounded'>
        <div className='overflow-hidden relative flex-wrap p-10 h-full'>
          <div
            className='absolute h-full border border-gray-700 border-opacity-20'
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex z-20 order-1 items-center w-8 h-8 bg-gray-800 rounded-full shadow-xl'>
              <h1 className='mx-auto text-lg font-semibold text-white'>1</h1>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-400 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-xl font-bold text-gray-800'>
                Lorem Ipsum
              </h3>
              <p className='text-sm tracking-wide leading-snug text-gray-900 text-opacity-100'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className='flex flex-row-reverse justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex z-20 order-1 items-center w-8 h-8 bg-gray-800 rounded-full shadow-xl'>
              <h1 className='mx-auto text-lg font-semibold text-white'>2</h1>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-red-400 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-xl font-bold text-white'>Lorem Ipsum</h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-white text-opacity-100'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex z-20 order-1 items-center w-8 h-8 bg-gray-800 rounded-full shadow-xl'>
              <h1 className='mx-auto text-lg font-semibold text-white'>3</h1>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-400 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-xl font-bold text-gray-800'>
                Lorem Ipsum
              </h3>
              <p className='text-sm tracking-wide leading-snug text-gray-900 text-opacity-100'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className='flex flex-row-reverse justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex z-20 order-1 items-center w-8 h-8 bg-gray-800 rounded-full shadow-xl'>
              <h1 className='mx-auto text-lg font-semibold text-white'>4</h1>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-red-400 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-xl font-bold text-white'>Lorem Ipsum</h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-white text-opacity-100'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
