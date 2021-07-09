export const BannerLanding = (props) => {
  return (
    <section
      id='banner'
      className='p-20 h-full text-4xl text-yellow-100 bg-center bg-cover opacity-50'
      style={{
        backgroundColor: "#8d82c4",
        backgroundImage: "url('/kota.jpg')",
      }}
    >
      <div className='block my-0 mx-auto opacity-100'>
        <h1 className='mb-5 text-3xl'>{props.title}</h1>
        <p className='text-2xl animate-pulse'>
          {props.description}
          <br />
        </p>
      </div>
    </section>
  );
};
