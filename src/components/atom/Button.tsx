import type { DOMAttributes, ReactNode, VFC } from "react";

type InputType = {
  id?: number;
  children?: ReactNode;
  className?: string;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
  src?: string;
};

export const Button: VFC<InputType> = (props) => {
  return (
    <button aria-label="Move to Link">
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-blue-800 opacity-80 transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-purple-800 opacity-80 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative'>{props.children}</span>
      </a>
    </button>
  );
};
export const Button2: VFC<InputType> = (props) => {
  return (
    <button aria-label="Move to Link">
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-yellow-900 opacity-80 drop-shadow-2xl transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-yellow-900 shadow-2xl opacity-70 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative'>{props.children}</span>
      </a>
    </button>
  );
};
export const ButtonYellow: VFC<InputType> = (props) => {
  return (
    <button aria-label="Move to Link">
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-yellow-500 opacity-80 drop-shadow-2xl transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-yellow-200 shadow-2xl opacity-70 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative text-blue-800'>{props.children}</span>
      </a>
    </button>
  );
};
export const ButtonSmall: VFC<InputType> = (props) => {
  return (
    <a
      href={props.src}
      target='_blank'
      rel='noopener noreferrer'
      className='group inline-flex overflow-hidden relative justify-center items-center p-0.5 mt-3 rounded-md'
    >
      <span className='absolute w-full h-full bg-gradient-to-r from-yellow-400 via-green-500 to-purple-500'></span>
      <span className='relative p-1 mx-auto bg-green-700 group-hover:bg-opacity-0 rounded-md transition-all duration-300 ease-out'>
        <span className='relative text-xs text-white'>{props.children}</span>
      </span>
    </a>
  );
};
