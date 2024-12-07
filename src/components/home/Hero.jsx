import { Link } from "@/i18n/routing";
import hero from "../../../public/home/hero1.png";
import { MdArrowOutward } from "react-icons/md";
import { useTranslations } from "next-intl";
const Hero = () => {
  const h = useTranslations("hero");
  return (
    <div>
      {/* Search Bar */}
      <div className="mx-4 lg:mx-0">
        <label className="input input-bordered rounded-sm mt-5 flex items-center gap-2 bg-[#75BEE3] max-w-[900px] m-auto text-white relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 order-1"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow order-2 text-left bg-transparent placeholder-transparent"
            placeholder="Search"
          />
          <span className="absolute right-3 text-white pointer-events-none">
            {h("search")}
          </span>
        </label>
      </div>

      {/* Text on Image */}
      <div
        className="relative bg-cover bg-center md:h-[80vh] h-[500px] mt-5 rounded"
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          // Centers the image
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center md:px-32">
          <h1 className="text-4xl md:text-5xl font-bold">
            {h("Education is the most powerful weapon which you can use to change the world")}
          </h1>
          <p className="mt-4 text-lg md:text-2xl">– Nelson Mandela</p>
          <Link href={"/video"}>
            <button className="flex bg-[#DBE3EA] text-black rounded-md px-7 py-2 items-center gap-2 text-xl mt-9 hover:bg-[#2F799E] hover:text-white transition">
              {h("View Video")} <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
