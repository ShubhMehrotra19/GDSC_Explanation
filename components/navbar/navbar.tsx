/* eslint-disable @typescript-eslint/no-empty-object-type */
import Image from "next/image";
import GetStarted from "../global/getStarted/getStarted";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <nav className="flex justify-between items-center mx-auto mt-5 mb-12">
      <div className="flex justify-center items-center gap-1">
        <Image src="/icons/logo.png" alt="" width={25} height={25} />
        <p className=' font-bold text-[#FC5A40] text-sm font-["Poppins"]'>
          novā
        </p>
      </div>

      <div className="flex justify-center items-center gap-12">
        <a className="flex justify-center items-center gap-2" href="#">
          <p className="font-semibold text-sm text-black/80 hover:text-black hover:scale-[102%] active:scale-95 transition-all duration-200 ease-in-out">
            Business Checking
          </p>
          <Image
            className=" opacity-70 hover:rotate-180 transition-all duration-500 ease-in-out"
            src="/icons/drop.png"
            alt=""
            width={24}
            height={24}
          />
        </a>
        <a className="flex justify-center items-center gap-2" href="#">
          <p className="font-semibold text-sm text-black/80 hover:text-black hover:scale-[102%] active:scale-95 transition-all duration-200 ease-in-out">
            Solution
          </p>
          <Image
            className=" opacity-70 hover:rotate-180 transition-all duration-500 ease-in-out"
            src="/icons/drop.png"
            alt=""
            width={24}
            height={24}
          />
        </a>
        <a className="flex justify-center items-center gap-2" href="#">
          <p className="font-semibold text-sm text-black/80 hover:text-black hover:scale-[102%] active:scale-95 transition-all duration-200 ease-in-out">
            Resources
          </p>
          <Image
            className=" opacity-70 hover:rotate-180 transition-all duration-500 ease-in-out"
            src="/icons/drop.png"
            alt=""
            width={24}
            height={24}
          />
        </a>
        <a
          className="font-semibold text-sm text-black/80 hover:text-black hover:scale-[102%] active:scale-95 transition-all duration-200 ease-in-out"
          href="#">
          Results
        </a>
        <a className="flex justify-center items-center gap-2" href="#">
          <p className="font-semibold text-sm text-black/80 hover:text-black hover:scale-[102%] active:scale-95 transition-all duration-200 ease-in-out">
            Contact
          </p>
          <Image
            className=" opacity-70 hover:rotate-180 transition-all duration-500 ease-in-out"
            src="/icons/drop.png"
            alt=""
            width={24}
            height={24}
          />
        </a>
      </div>

      <div className="flex justify-center items-center gap-10">
        <p className="text-sm text-black/80 font-semibold cursor-pointer hover:scale-[102%] active:scale-95 hover:text-black transition-all duration-200 ease-in-out">
          Log In
        </p>
        <GetStarted />
      </div>
    </nav>
  );
}

export default Navbar;
