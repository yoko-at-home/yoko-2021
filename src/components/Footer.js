import { Icons } from "./atom/Icon";

function Copyright() {
  return (
    <div className='text-white opacity-60 mx-2 mb-3'>
      {"Copyright © "}
      <a
        color='inherit'
        href='https://twitter.com/yokoiwasaki6'
        target='_blank'
        rel='noopener'
      >
        yoko
      </a>{" "}
      {new Date().getFullYear()}
    </div>
  );
}

export const Footer = (props) => (
  <footer
    id='footer'
    className='w-screen flex justify-center'
    style={{ backgroundColor: "rgba(12, 12, 58)" }}
  >
    <div className='inner'>
      <Icons />
      <Copyright />
    </div>
  </footer>
);
