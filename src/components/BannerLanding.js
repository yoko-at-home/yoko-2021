export const BannerLanding = (props) => {
  return (
    <section
      id="banner"
      className="py-10 px-5 h-full text-4xl text-purple-100 bg-center bg-cover opacity-60 md:p-20"
      style={{
        backgroundColor: "#8d82c4",
        backgroundImage: "url('/kota.jpg')",
      }}
    >
      <div className="inline-flex p-10 bg-clip-padding bg-opacity-60 md:w-1/3 md:border md:border-gray-300 md:backdrop-blur-xl md:backdrop-opacity-60">
        <div className="inline-flex flex-col my-0 mx-auto">
          <span className="inline-block p-1 mb-5 text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-opacity-90 bg-gradient-to-r from-green-300 to-blue-600">
            {props.title}
          </span>
          <span className="inline-block p-1 text-2xl font-bold text-transparent bg-clip-text bg-opacity-90 bg-gradient-to-r from-blue-600 to-green-400">
            {props.description}
            <br />
          </span>
        </div>
      </div>
    </section>
  );
};
