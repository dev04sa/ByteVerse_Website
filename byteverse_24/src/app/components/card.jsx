import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (props) => {
  return (
    <div className="bg-[#541E1E]   w-[400px] h-[550px] flex flex-col     rounded-lg shadow-md p-10">
      <div className="  sm:pt-14 ">
        <Image
          className="mx-auto   "
          src={`/byteverse/${props.img}`}
          alt=" Logo"
          width={props.width}
          height={props.height}
          layout="fixed"
        />
        <p className=" mt-2 pl-16 pr-16 pt-8 text-white ">
          Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. adipiscing elit.
          consectetur adipiscing elit. ... used as a placeh
        </p>
        <div className="flex flex-row justify-center items-center pt-5  gap-2 ">
          <Link href={`${props.instagram}`} target="_blank">
            <Image
              src="/byteverse/instagram.png"
              alt="Instagram Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href={`${props.linkedin}`} target="_blank">
            <Image
              src="/byteverse/linkedin.png"
              alt="Linkedin Logo"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
