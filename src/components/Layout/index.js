import { Footer } from "../Footer";
import { HeadPart } from "../Head";
import { Navbar } from "../NavBar";
import { Sidebar } from "../Sidebar";

export const Layout = (props) => {
  return (
    <div
      className="grid grid-cols-1 justify-center w-screen min-h-screen bg-opacity-50 lg:auto-cols-fr lg:pl-60"
      style={{ backgroundColor: "rgba(12, 12, 58)" }}
    >
      <header className="h-16 lg:hidden">
        <HeadPart title={props.title} />
      </header>
      <Sidebar />
      <div className="text-white">
        <div
          className="flex flex-col"
          style={{ backgroundColor: "rgba(12, 12, 58)" }}
        >
          <div className="lg:hidden">
            <Navbar />
          </div>
          <div>{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
