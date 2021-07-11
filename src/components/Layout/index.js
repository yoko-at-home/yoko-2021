import { Footer } from "../Footer";
import { HeadPart } from "../Head";
import { Navbar } from "../NavBar";
import { Sidebar } from "../Sidebar";

export const Layout = (props) => {
  return (
    <div
      className='flex lg:grid lg:grid-cols-1 lg:auto-cols-fr justify-center lg:pl-60 min-h-screen bg-opacity-50'
      style={{ backgroundColor: "rgba(12, 12, 58)" }}
    >
      <header className='lg:hidden h-16'>
        <HeadPart title={props.title} />
      </header>
      <Sidebar />
      <div className='text-white'>
        <div
          className='flex flex-col'
          style={{ backgroundColor: "rgba(12, 12, 58)" }}
        >
          <div className='lg:hidden'>
            <Navbar />
          </div>
          <div>{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
