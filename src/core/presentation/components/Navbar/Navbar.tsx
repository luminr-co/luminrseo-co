"use client";
import LogoFull from "../../assets/images/LogoFull";
import NavbarList from "./NavbarList";
import { Button } from "../Button";
import CallIcon from "../../assets/icons/CallIcon";
import LogoSmall from "../../assets/images/LogoSmall";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useEffect, useState } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const parentControls = useAnimation();
  const childControls = useAnimation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = async () => {
        await parentControls.start({
          width:
            window.innerWidth < 1280
              ? window.innerWidth < 1024
                ? "24rem"
                : "66%"
              : "100%",
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [parentControls]);

  const handleMenuIcon = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleCloseSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {});

  return (
    <>
      <motion.div className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-full px-4 container mx-auto ">
        <motion.nav
          animate={parentControls}
          initial={
            typeof window !== "undefined" && {
              width:
                window.innerWidth < 1280
                  ? window.innerWidth < 1024
                    ? "24rem"
                    : "66%"
                  : "100%",
            }
          }
          className="rounded-full py-4 lg:px-20 px-16 bg-black shadow-  mx-auto overflow-hidden shadow-[0_10px_28px_0px_rgba(0,0,0,0.45)]"
        >
          <motion.div
            animate={childControls}
            className="w-full flex flex-row justify-between items-center"
          >
            <a className="hidden xl:inline-block cursor-pointer" href="/">
              <LogoFull />
            </a>
            <a className="xl:hidden cursor-pointer" href="/">
              <LogoSmall />
            </a>
            <div className="hidden xl:inline-block top-0 bg-black p-12 lg:p-0 left-0 ">
              <NavbarList />
            </div>
            <a href="#call">
              <Button className="xl:flex flex-row justify-center gap-3 items-center hidden ">
                <span>
                  <CallIcon />
                </span>
                <p>Hop on a Call</p>
              </Button>
            </a>
            <button className="xl:hidden" onClick={handleMenuIcon}>
              <MenuIcon />
            </button>
          </motion.div>
        </motion.nav>
      </motion.div>
      {isSidebarVisible && (
        <>
          {createPortal(
            <motion.div
              className="fixed inset-0 z-50"
              onClick={handleCloseSidebar}
            >
              <div className="absolute top-0 bottom-0 left-0 bg-black h-full w-full z-50">
                <NavbarList onClose={handleCloseSidebar} />
              </div>
            </motion.div>,
            document.body
          )}
        </>
      )}
    </>
  );
}
