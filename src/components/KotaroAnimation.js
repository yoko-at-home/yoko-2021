import Image from "next/image";

export const KotaroAnimation = () => {
  return (
    <div className='md:hidden fixed top-1/3 left-1/4 p-2 rounded-full border-8 border-yellow-300 border-dotted animate-ping'>
      <Image
        width={50}
        height={50}
        alt='spinning kotaro'
        src='/kota-animation.jpg'
        className='rounded-full'
      />
    </div>
  );
};
