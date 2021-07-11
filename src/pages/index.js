import { HeadPart } from "../components/Head";
import { Landing } from "../components/Landing";

const Home = () => {
  return (
    <div className='w-screen' style={{ backgroundColor: "rgba(12, 12, 58)" }}>
      <HeadPart
        title={"yoko | frontend engineer"}
        description={"yoko | frontend engineer"}
        keyword={"programming"}
        image={"/banner.jpg"}
        url={"https://yoko-2021.vercel.app"}
      />

      <Landing />
    </div>
  );
};

export default Home;
