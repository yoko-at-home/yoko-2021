export const Button = (props) => {
  return (
    <div>
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-blue-800 opacity-80 transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-purple-800 opacity-80 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative'>{props.name}</span>
      </a>
    </div>
  );
};
