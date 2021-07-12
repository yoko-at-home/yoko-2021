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
    <div>
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-blue-800 opacity-80 transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-purple-800 opacity-80 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative'>{props.children}</span>
      </a>
    </div>
  );
};
export const Button2: VFC<InputType> = (props) => {
  return (
    <div>
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-yellow-900 opacity-80 drop-shadow-2xl transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-yellow-900 shadow-2xl opacity-70 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative'>{props.children}</span>
      </a>
    </div>
  );
};
export const ButtonYellow: VFC<InputType> = (props) => {
  return (
    <div>
      <a
        href={props.src}
        className='group relative py-3 px-6 font-bold text-white rounded-lg'
      >
        <span className='absolute inset-0 w-full h-full bg-yellow-500 opacity-80 drop-shadow-2xl transition duration-300 ease transform -translate-x-1 group-hover:translate-x-0 -translate-y-1 group-hover:translate-y-0'></span>
        <span className='absolute inset-0 w-full h-full bg-yellow-200 shadow-2xl opacity-70 mix-blend-screen transition duration-300 ease transform translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0'></span>
        <span className='relative text-blue-800'>{props.children}</span>
      </a>
    </div>
  );
};