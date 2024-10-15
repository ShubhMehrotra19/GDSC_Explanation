/* eslint-disable @typescript-eslint/no-empty-object-type */
import GetStarted from "@/components/global/getStarted/getStarted";
import React from "react";

interface Props {}

function Aside(props: Props) {
  const {} = props;

  return (
    <div className=" flex flex-col items-start justify-center gap-1">
      <p className=" text-sm text-black/80 text-left mb-3 font-medium">
        Take your business to new heights with <br /> faster cash flow and clear
        financial <br /> insights with a free Novo account. <br /> Apply in 10 minutes.
      </p>
      <div className="mb-6">
      <GetStarted />
      </div>
      <p className="text-sm text-black/80">Already started ? <span className="text-[#FC5A40]/80 cursor-pointer">Finish your application</span>
      </p>
    </div>
  );
}

export default Aside;
