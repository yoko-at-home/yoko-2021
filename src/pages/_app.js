import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MyApp = (props) => {
  return <props.Component {...props.pageProps} />;
};

export default MyApp;
