export const TimelineTop = () => {
  return (
    <div className='flex justify-between items-center mb-5 w-full'>
      <div className='order-1 w-5/12'></div>
      <div className='flex z-20 order-1 items-center w-16 h-16 bg-gray-300 rounded-full shadow-xl'>
        <h3 className='z-50 mx-auto text-lg font-semibold tracking-tighter leading-4 text-green-800 whitespace-nowrap'>
          2021
          <br />
          <span className='text-xs tracking-widest'>現 在</span>
        </h3>
      </div>
      <div className='order-1 py-4 px-6 w-5/12 rounded-lg'></div>
    </div>
  );
}

