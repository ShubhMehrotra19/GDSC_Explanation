/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useState } from 'react'
import Image from 'next/image'

interface Props {}

function GetStarted(props: Props) {
    const {} = props

    const [isInside, setIsInside] = useState(false);

  function EntryFunc() {
    setIsInside(true);
  }

  function ExitFunc() {
    setIsInside(false);
  }

    return (
        <div
          onMouseEnter={EntryFunc}
          onMouseLeave={ExitFunc}
          className="border-2 border-black/10 flex justify-center items-center pt-1 pl-1 pb-1 pr-3 rounded-full gap-2 cursor-pointer hover:scale-[102%] active:scale-95 transition-all duration-200 ease-in-out">
          <Image
            className={
              isInside == true
                ? ` rotate-45 transition-all duration-500 ease-in-out`
                : `rotate-0 transition-all duration-500 ease-in-out`
            }
            src="/icons/arrow.png"
            alt=""
            width={30}
            height={30}
          />
          <p className="text-black/80 text-sm font-semibold">Get Started</p>
        </div>
    )
}

export default GetStarted
