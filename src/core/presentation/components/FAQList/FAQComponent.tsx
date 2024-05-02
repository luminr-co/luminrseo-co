"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import AddIcon from "../../assets/icons/AddIcon";
import { FAQEntity } from "@/core/domain/entities/FAQEntity";
import { SmoothScroll } from "../SmoothScroll";

interface Props {
  faq: FAQEntity;
}

export default function FAQComponent({ faq }: Props) {
  const [isAnswerVisible, setAnswerVisible] = useState(false);

  const handleAnswerVisibility = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  let listStyle = "none";
  return (
    <SmoothScroll>
      <div
        className="lg:border-4 border-2 border-beige rounded-xl py-6 px-8 gap-5 cursor-pointer"
        onClick={handleAnswerVisibility}
      >
        <div className="flex flex-row justify-between items-center">
          <p className="text-beige lg:text-2xl text-base font-normal font-secondary">
            {faq.question}
          </p>
          <motion.button
            animate={{}}
            onClick={handleAnswerVisibility}
            className={twMerge(
              "bg-beige lg:p-2 p-1 rounded-full w-fit ml-1 ",
              isAnswerVisible ? "rotate-45" : ""
            )}
          >
            <AddIcon />
          </motion.button>
        </div>
        <AnimatePresence>
          {isAnswerVisible && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:text-2xl text-base font-normal text-gray mt-4"
            >
              <ul>
                {faq.answer.map((answer) => {
                  return (
                    <>
                      <div className="flex flex-row gap-3 items-center">
                        {faq.answer.length > 1 && (
                          <div className="rounded-full w-2 h-2 bg-gray"></div>
                        )}
                        <li className="mb-2">{answer}</li>
                      </div>
                    </>
                  );
                })}
              </ul>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}
