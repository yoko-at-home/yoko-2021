import { Footer } from "../Footer";
import { HeadPart } from "../Head";
import { Navbar } from "../NavBar";

export const Layout = (props) => {
  return (
    <div
      className='flex flex-col w-full min-h-screen text-white'
      style={{ backgroundColor: "rgba(12, 12, 58)" }}
    >
      <header className='h-16'>
        <HeadPart title={props.title} />
      </header>
      <Navbar />
      <div className='w-full'>{props.children}</div>
      <Footer />
    </div>
  );
};
