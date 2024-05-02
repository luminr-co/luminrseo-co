import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

export default function MainTemplate({children}: PropsWithChildren) {
  return (
    <div className=" lg:pb-24 pb-12 bg-black scroll-smooth min-w-[400px]">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
}
