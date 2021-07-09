import Image from "next/image";

export const ImageShrink = (src, alt, href) => {
  return (
    <div className='relative'>
      <div className='absolute top-5 left-5 z-50'>
        <span role='img' aria-label='sparkles'>
          {/* ✨ */}
        </span>
      </div>
      <Image
        className='md:min-w-full hover:opacity-90 transition duration-500 ease-in-out transform hover:scale-95'
        width={700}
        height={500}
        src={src}
        alt={alt}
        href={href}
      />
    </div>
  );
};
