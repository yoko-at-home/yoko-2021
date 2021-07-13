import Image from "next/image";

export const KotaroAnimation = () => {
  return (
    <div
      className='flex md:hidden fixed top-1/3 left-1/4 flex-col justify-start p-2 leading-tight text-center text-purple-400 uppercase rounded-full border-8 border-pink-400 border-dotted animate-ping'
      style={{ fontFamily: "cursive", fontSize: "4px" }}
    >
      l
      <div className='flex flex-row justify-start text-center text-pink-400 align-middle'>
        {" "}
        o &nbsp;
        <Image
          width={25}
          height={25}
          alt='spinning kotaro'
          src='/kota-animation.jpg'
          className='rounded-full'
        />
        &nbsp; e
      </div>
      v
    </div>
  );
};
