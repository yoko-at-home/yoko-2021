export const Icons = () => {
  return (
    <div className="mt-6 mb-6 lg:mb-0">
      <a
        href="https://twitter.com/yokoiwasaki6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          aria-label="Twitter icon"
          className="justify-center items-center mr-2 w-10 h-10 font-normal text-blue-400 hover:text-white bg-white hover:bg-indigo-200 rounded-full outline-none focus:outline-none shadow-lg"
          type="button"
        >
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <i className="fab fa-twitter-square"></i>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/yoko-iwasaki-31b505112/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          aria-label="LinkedIn icon"
          className="justify-center items-center mr-2 w-10 h-10 font-normal text-pink-400 hover:text-white bg-white hover:bg-indigo-200 rounded-full outline-none focus:outline-none shadow-lg"
          type="button"
        >
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <i className="fab fa-linkedin"></i>
        </button>
      </a>
      <a
        href="https://github.com/yoko-at-home"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          aria-label="GitHub icon"
          className="justify-center items-center mr-2 w-10 h-10 font-normal text-black hover:text-white bg-white hover:bg-indigo-200 rounded-full outline-none focus:outline-none shadow-lg"
          type="button"
        >
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <i className="fab fa-github"></i>
        </button>
      </a>
      <a
        href="https://www.instagram.com/yoko_123123/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          aria-label="Instagram icon"
          className="justify-center items-center mr-2 w-10 h-10 font-normal text-red-600 hover:text-white bg-white hover:bg-indigo-200 rounded-full outline-none focus:outline-none shadow-lg"
          type="button"
        >
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <i className="fab fa-instagram-square"></i>
        </button>
      </a>
    </div>
  );
};
