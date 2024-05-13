import PageLayout from "@/layout/PageLayout";
import Image from "next/image";
import Head from "next/head";
import data from "@/data/index.json";
import TestimonialsSection from "@/components/shared/Testimonials";
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./Animation.json";
import Link from "next/link";
import WaitlistForm from "@/components/forms/Waitlist";

export default function Home() {
  const { features, why, FAQ } = data;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>Pennywise | Home </title>
        <meta
          name="description"
          content="Pennywise is a financial accounting app that helps you make the best financial decisions by providing you with the right information and tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isModalOpen && <WaitlistForm closeModal={setIsModalOpen} />}
      <PageLayout>
        <div className="max-w-[1250px] mx-auto overflow-hidden ">
          <div className="py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[80vh] ">
            <div className="space-y-4 ">
              <h1 className="font-[800] text-[64px] leading-[60px] text-brand-blue dark:text-brand-white ">
                Make The <br /> Best{" "}
                <span className="text-brand-green ">
                  Financial <br /> Decision
                </span>{" "}
                !
              </h1>
              <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] max-w-lg tracking-wider  ">
                Saving and Expense tracking made easy with our app! Our
                user-friendly interface and automated tracking streamlines the
                process, while customizable expense tracking, savings and
                insightful reports help you stay on top of your finances
                effortlessly.
              </p>
              <div className="flex items-center space-x-6 pt-[1.25rem] ">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="bg-brand-blue  text-white h-[3.5rem] px-8 rounded-[0.5rem] font-[500] flex items-center space-x-2"
                >
                  <span className="">Get Started</span>
                  <i className="fas fa-long-arrow-right fa-fw fa-lg text-white "></i>
                </button>
                <Link href="/about">
                  <button className="py-3 rounded-[0.5rem] flex items-center space-x-2 text-brand-green ">
                    <span className="h-8 w-8 border border-brand-green rounded-[50%] flex justify-center items-center ">
                      <i className="fas fa-play fa-fw fa-md pl-0.5 "></i>
                    </span>
                    <span>Learn More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative ">
              <Lottie animationData={groovyWalkAnimation} loop={true} />;
            </div>
          </div>

          <div className="py-20 min-h-[70vh] ">
            <div className=" space-y-8 ">
              <div>
                <p className="uppercase text-[1.125rem] !tracking-widest text-brand-green dark:text-neutral-400 ">
                  FEATURES
                </p>
                <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green ">
                  Pennywise Premium
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {features.map((item, index) => (
                  <div
                    className="p-8 bg-brand-blue bg-opacity-20 rounded-2xl "
                    key={item.title}
                  >
                    <i
                      className={`${item.icon} fa-2x fa-fw text-brand-white`}
                    ></i>
                    <div className=" space-y-3 mt-24 ">
                      <h5 className="font-[500] text-[1.325rem] dark:text-brand-white  ">
                        {item.title}
                      </h5>
                      <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] line-clamp-3  ">
                        {item.body}
                      </p>
                    </div>
                    <div className="mt-6">
                      <button className="text-base font-[500] text-brand-green pb-1 hover:border-b border-brand-green flex items-center ">
                        <span className=" ">Learn More</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-20 border-b dark:border-neutral-700 place-items-center min-h-[70vh] ">
            <div className="">
              <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                Advantages
              </p>
              <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                Why choose Pennywise?
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-4 md:gap-8  ">
              {why.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 1 ? "bg-brand-blue bg-opacity-20 " : ""
                  }  space-y-4 border border-neutral-700 p-6 md:p-14 rounded-xl `}
                >
                  <div className="flex space-x-2 items-center dark:text-brand-white">
                    <span className="h-[2rem] w-[2rem] border border-black dark:border-brand-white rounded-[50%] flex justify-center items-center flex-shrink-0 ">
                      <i className="fas fa-bell fa-sm fa-fw"></i>
                    </span>
                    <h5 className="font-[500] text-[1.4rem]  ">{item.title}</h5>
                  </div>
                  <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] text-justify max-w-md  ">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <TestimonialsSection />

          <div className="py-16 xl:w-[950px] mx-auto">
            <div className="">
              <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                FAQ
              </p>
              <h1 className="font-[800] text-[40px] sm:text-[46px] leading-[48px] w-[28rem] text-brand-blue dark:text-brand-green ">
                Frequently Asked Questions
              </h1>
            </div>
            <div className="mt-8 ">
              <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 ">
                {FAQ.map((item, index) => (
                  <div
                    className={`space-y-2 mx-auto py-6 md:p-8 rounded-lg ${
                      index === 0 || index === 3 || index === 4
                        ? "bg-brand-blue bg-opacity-20 text-brand-white"
                        : " dark:text-brand-white "
                    }  `}
                    key={index}
                  >
                    <h5 className="font-[500] text-[1.3rem] line-clamp-1 hover:line-clamp-none ">
                      {item.question}
                    </h5>
                    <p className="text-[1rem] line-clamp-3 hover:line-clamp-none  ">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-16 mx-auto">
            <div className="bg-brand-blue bg-opacity-20 p-6 sm:pl-16 h-[40vh] w-full rounded-2xl flex items-center overflow-hidden ">
              <div className="flex items-center w-full lg:w-[950px] mx-auto overflow-hidden ">
                <div className="text-white ">
                  <h3 className="text-[2.25rem] font-[600] ">
                    Get Started Today!
                  </h3>

                  <div className="mt-5">
                    <p className="text-brand-white text-lg font-[500] ">
                      Download Now
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button className=" text-brand-white h-[2.5rem] w-[2.5rem] rounded-[2.5rem] border flex justify-center items-center">
                        <i className="fab fa-apple fa-fw fa-lg "></i>
                      </button>
                      <button className=" text-brand-white h-[2.5rem] w-[2.5rem] rounded-[2.5rem] border flex justify-center items-center">
                        <i className="fab fa-google-play fa-fw fa-lg "></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden mx-auto sm:block relative ">
                  <Image
                    src={`/assets/images/customize.png`}
                    alt="Pennywise App"
                    width={500}
                    height={800}
                    className=" mt-[16rem] scale-125 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
