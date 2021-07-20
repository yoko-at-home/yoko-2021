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
        <span className='inline-block p-1 mb-5 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-opacity-80 bg-gradient-to-r from-green-400 to-blue-800'>
          {props.title}
        </span>
        <span className='inline-block p-1 text-2xl font-bold text-center text-transparent bg-clip-text bg-opacity-80 bg-gradient-to-r from-blue-700 to-green-400'>
          {props.description}
          <br />
        </span>
      </div>
    </section>
  );
};
