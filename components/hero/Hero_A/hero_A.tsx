/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Image from "next/image";
import Glass from "./Components/glass";
import Group from "./Components/group";
import Aside from "./Components/aside/aside";

interface Props {}

function Hero_A(props: Props) {
  const {} = props;

  return (
    <main className="flex justify-center items-start">
      <div className="flex flex-col justify-start items-start">
      <div className="flex flex-col items-start justify-center">
        <p className="uppercase pr-16 pb-5 pt-6 rounded-xl bg-[#F6F6F6] text-5xl font-semibold z-20 -translate-y-[10px]">
          all your business
        </p>
        <p className="uppercase pr-12 py-5 rounded-xl bg-[#F6F6F6] text-5xl font-semibold z-10 -translate-y-10">
          banking in one
        </p>
        <p className="uppercase text-5xl font-semibold -translate-y-12">
          platform
        </p>
      </div>
      <Aside />
      </div>
      <div className="relative h-[450px] w-[780px] -translate-x-48 object-cover">
        <Image
          className="rounded-2xl"
          src="/images/card.png"
          width={780}
          height={450}
          alt="Card"
        />
        {/* Glass Components */}
        <div className="absolute top-44 left-20">
          <Glass
            imageProp="/icons/dollar.png"
            notification="Nova Balances"
            amount="$17,500"
          />
        </div>
        <div className="absolute top-80 left-[400px]">
          <Glass
            imageProp="/icons/tick.png"
            notification="Invoice Paid"
            amount="+$950"
          />
        </div>
        <div className="absolute top-[480px] left-12">
          <Group />
        </div>
      </div>
    </main>
  );
}

export default Hero_A;
