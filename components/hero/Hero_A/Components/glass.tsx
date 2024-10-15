import React from "react";
import Image from "next/image";

function Glass({
  imageProp,
  notification,
  amount,
}: {
  imageProp: string;
  notification: string;
  amount: string;
}) {
  return (
    <main className=" rounded-2xl border-white/60 border-2 flex justify-start items-center gap-2 py-2 pl-1 w-[180px] bg-transparent backdrop-blur-md cursor-pointer hover:backdrop-blur-lg hover:scale-[102%] transition-all ease-in-out duration-200">
      <Image src={imageProp} height={35} width={35} alt="" />
      <div className="flex flex-col items-start">
        <p className="text-white text-[14px] font-semibold">{notification}</p>
        <p className="text-white text-[9px] font-normal">{amount}</p>
      </div>
    </main>
  );
}

export default Glass;
