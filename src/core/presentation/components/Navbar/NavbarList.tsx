"use client";
import { useState } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import WebIcon from "../../assets/icons/WebIcon";
import SeoIcon from "../../assets/icons/SeoIcon";
import { Button } from "../Button";
import CloseIcon from "../../assets/icons/CloseIcon";
import CallIcon from "../../assets/icons/CallIcon";
import HrIcon from "../../assets/icons/HrIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";

interface Props {
  onClose?: () => void;
}

export default function NavbarList({ onClose }: Props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <nav
        className="container font-secondary lg:text-xl text-3xl font-medium lg:font-normal text-beige flex lg:flex-row flex-col lg:justify-center gap-4 lg:h-auto h-screen bg-black lg:gap-11 lg:p-0 shadow-[0_7px_14px_0px_rgba(0, 0, 0, 0.40)] px-6 lg:pt-0 lg:mx-0"
        onClick={() => isModalVisible && setModalVisible(false)}
      >
        <button
          className="flex flex-row justify-end items-end mb-3 lg:hidden mt-8"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <div className="list-none  hover:text-orange cursor-pointer transition-colors">
          <a href="#benefits"> Benefits</a>
        </div>

        <div className="list-none  hover:text-orange cursor-pointer transition-colors mt-2 lg:mt-0">
          <a href="#results"> Work</a>
        </div>

        {/* <motion.div
          onClick={handleModal}
          className="list-none mt-2 lg:mt-0 flex flex-row items-center gap-1 hover:text-orange cursor-pointer relative transition-colors"
        >
          <p>Services</p>
          <span className="hidden lg:inline-block">
            <ArrowDown />
          </span>
        </motion.div> */}

        {isModalVisible && (
          <>
            {createPortal(
              <div
                className="fixed w-screen h-screen inset-0 z-10"
                onClick={handleModal}
              ></div>,
              document.body
            )}
            <motion.div className="absolute bg-black top-24 translate-x-20 rounded-t-none rounded-b-2xl p-4 hidden lg:inline-block z-50">
              <div className="list-none">
                <Link href="/website-development">
                  <Button
                    className="flex flex-row gap-3 justify-center group "
                    variant="black"
                    hover={true}
                  >
                    <div className="rounded-lg  group-hover:bg-beige group-hover:text-orange">
                      <WebIcon />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl text-left">Website Development</p>
                      <p className="text-lg  font-light text-gray w-72 group-hover:text-white text-left ">
                        Build Pro Grade Websites for long term success.
                      </p>
                    </div>
                  </Button>
                </Link>
                <Link href="/seo">
                  <Button
                    className="flex flex-row gap-3 justify-center item group"
                    variant="black"
                    hover={true}
                  >
                    <div className="rounded-lg group-hover:bg-beige group-hover:text-orange">
                      <SeoIcon />
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                      <p className="text-2xl  ">SEO for Shopify Stores</p>
                      <p className="text-lg font-light text-gray w-72 group-hover:text-white text-left">
                        Increase online visibility and search engine rankings.
                      </p>
                    </div>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}

        {/* <div className="ml-10 list-none text-lg lg:hidden font-normal">
          <Link
            href={"/website-development"}
            className="flex flex-row gap-2 items-center"
          >
            <HrIcon /> Website Development
          </Link>
          <Link href={"/seo"} className="flex flex-row gap-2 items-center">
            <HrIcon /> Seo for Shopify Stores
          </Link>
        </div> */}
        
        <div className="list-none  mt-2 lg:mt-0 hover:text-orange cursor-pointer transition-colors">
          <a href="/#testimonials"> Testimonials</a>
        </div>

        <div className="list-none  mt-2 lg:mt-0 hover:text-orange cursor-pointer transition-colors">
          <a href="/#packages"> Packages</a>
        </div>

        <div className="list-none  mt-2 lg:mt-0 hover:text-orange cursor-pointer transition-colors">
          <a href="/#faq"> FAQ</a>
        </div>
        <a href="/#call">
          <Button className="px-6 py-5 mt-4 flex flex-row gap-3 text-sm lg:hidden ">
            <span>
              <CallIcon />
            </span>
            <p>Hop on a Call</p>
          </Button>
        </a>
      </nav>
    </>
  );
}
