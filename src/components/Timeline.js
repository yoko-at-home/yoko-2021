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
      <BannerLanding title='スキルまとめ' description='思えば遠くまで...' />

      <div
        className='container justify-start mx-auto mt-36 w-full h-full rounded'
        style={{
          background:
            "linear-gradient(180deg, rgba(2,9,66,1) 4%, rgba(6,85,92,1) 56%",
        }}
      >
        <div className='overflow-hidden relative left-0 flex-wrap p-10 h-full'>
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex z-20 order-1 items-center w-16 h-16 bg-gray-300 rounded-full shadow-xl'>
              <div className='absolute top-10 left-1/2 z-0 h-full border border-gray-300'></div>
              <h3 className='z-50 mx-auto text-lg font-semibold text-green-800 whitespace-nowrap'>
                現在
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
          </div>
          {/* <!-- right timeline --> */}
          <div className='flex justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                2021
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
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
          <div className='flex flex-row md:flex-row-reverse justify-between items-center mb-8 w-full'>
            <div className='order-1 w-5/12'></div>
            <div className='flex relative z-20 order-1'>
              <h3 className='absolute -left-6 px-2 text-lg font-semibold text-green-700 whitespace-nowrap bg-gray-900 rounded-full shadow-xl'>
                2021
              </h3>
            </div>
            <div className='order-1 py-4 px-6 w-5/12 bg-gray-200 rounded-lg shadow-xl'>
              <h3 className='mb-3 text-xl font-bold text-gray-800'>
                Lorem Ipsum
              </h3>
              <p className='text-sm font-medium tracking-wide leading-snug text-gray-800 text-opacity-100'>
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
