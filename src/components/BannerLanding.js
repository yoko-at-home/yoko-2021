export const BannerLanding = (props) => {
  return (
    <section
      id='banner'
      className='p-20 h-full text-4xl text-purple-100 bg-center bg-cover opacity-60'
      style={{
        backgroundColor: "#8d82c4",
        backgroundImage: "url('/kota.jpg')",
      }}
    >
      <div className='inline-flex flex-col my-0 mx-auto'>
        <span className='inline-block p-1 mb-5 text-4xl font-extrabold text-center bg-purple-900 bg-opacity-50 rounded animate-pulse'>
          {props.title}
        </span>
        <span className='inline-block p-1 text-2xl font-black text-center bg-purple-900 bg-opacity-50 rounded animate-pulse'>
          {props.description}
          <br />
        </span>
      </div>
    </section>
  );
};
