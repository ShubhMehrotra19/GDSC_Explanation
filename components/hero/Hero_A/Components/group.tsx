/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Image from "next/image";

interface Props {}

function Group(props: Props) {
  const {} = props;

  return (
    <main className="flex justify-start items-center">
      <div className="flex justify-center items-center transform -translate-x-6">
        <div className="h-[50px] w-[50px] rounded-full object-contain border-2 border-white z-0 transform translate-x-6 hover:scale-[102%] transition-all duration-200 ease-in-out cursor-pointer">
          <Image
            className=" rounded-full"
            src="/images/i1.png"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className="h-[50px] w-[50px] rounded-full object-contain border-2 border-white z-10 transform translate-x-3 hover:scale-[102%] transition-all duration-200 ease-in-out cursor-pointer">
          <Image
            className=" rounded-full"
            src="/images/i2.png"
            width={400}
            height={400}
            alt=""
          />
        </div>
        <div className="h-[50px] w-[50px] rounded-full object-contain border-2 border-white z-20 hover:scale-[102%] transition-all duration-200 ease-in-out cursor-pointer">
          <Image
            className=" rounded-full"
            src="/images/i3.png"
            width={400}
            height={400}
            alt=""
          />
        </div>
      </div>
      <p className=" text-left text-[10px] text-white/90 font-normal">
        More than 2 million people use nova <br /> We&apos;re waiting for you
      </p>
    </main>
  );
}

export default Group;
