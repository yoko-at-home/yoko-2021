import { Icons } from "./atom/Icon";

const Copyright = () => {
  return (
    <div className='mx-2 mb-3 text-white opacity-60'>
      {"Copyright © "}
      <a
        color='inherit'
        href='https://twitter.com/yokoiwasaki6'
        target='_blank'
        rel='noopener noreferrer'
      >
        yoko
      </a>{" "}
      {new Date().getFullYear()}
    </div>
  );
};

export const Footer = () => {

  return (
    <div
      id="footer"
      className="flex justify-center mt-36"
      style={{ backgroundColor: "rgba(12, 12, 58)" }}
    >
      <div className="p-1">
        <Icons />
        <Copyright />
      </div>
    </div>
  );
};
