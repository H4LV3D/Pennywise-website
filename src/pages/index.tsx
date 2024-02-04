"use client";
import PageLayout from "@/layout/PageLayout";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Head from "next/head";
import data from "@/data/index.json";
import TestimonialsSection from "@/components/shared/Testimonials";

export default function Home() {
  const { features, why, FAQ } = data;
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
      <div className={` min-h-screen bg-[#fbfbfb] dark:bg-[#000B17] pt-20 `}>
        <PageLayout>
          <Navbar />
          <div className="px-4 md:px-8 max-w-[1250px] mx-auto overflow-hidden ">
            <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[80vh] ">
              <div className=" space-y-5 ">
                <h1 className="font-[800] text-[64px] leading-[60px] text-brand-blue dark:text-brand-white ">
                  Make The Best Financial Decisions!
                </h1>
                <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem]">
                  We help you make the best financial decisions by providing you
                  with the right information and tools. We are your one stop
                  shop for all your financial needs.
                </p>
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => (localStorage.theme = "dark")}
                    className="bg-brand-blue  text-white h-[3rem] px-8 rounded-[0.5rem] flex items-center space-x-2"
                  >
                    <span className="">Get Started</span>
                    <i className="fas fa-long-arrow-right fa-fw fa-lg text-white "></i>
                  </button>
                  <button
                    onClick={() => (localStorage.theme = "light")}
                    className="  py-3 rounded-[0.5rem] flex items-center space-x-2 text-brand-green "
                  >
                    <span className="h-8 w-8 border border-brand-green rounded-[50%] flex justify-center items-center ">
                      <i className="fas fa-play fa-fw fa-md pl-0.5 "></i>
                    </span>
                    <span>Learn More</span>
                  </button>
                </div>
                <div className="">
                  <Image
                    src="/assets/images/screenshots/Achievements.png"
                    alt="Achievements"
                    width={600}
                    height={300}
                  />
                </div>
              </div>
              <div className="relative flex -rotate-12 -space-x-72 ">
                {[1, 2, 3].map((item, index) => (
                  <div
                    className={`${
                      index === 0
                        ? " z-30"
                        : index === 1
                        ? " mt-12 z-20"
                        : " mt-24"
                    }  `}
                    key={index}
                  >
                    <Image
                      src={`/assets/images/app_screenshots/${index + 6}.png`}
                      alt="Features"
                      width={1000}
                      height={1000}
                      className=" "
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[80vh] ">
              <div className="">
                <Image
                  src={`/assets/images/app_screenshots/6.png`}
                  alt="Features"
                  width={600}
                  height={600}
                />
              </div>
              <div className=" space-y-5 ">
                <div>
                  <p className="uppercase text-[1.125rem] !tracking-widest text-brand-green dark:text-neutral-400 ">
                    FEATURES
                  </p>
                  <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green ">
                    Pennywise Premium
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-y-8 ">
                  {features.map((item, index) => (
                    <div className="" key={item.title}>
                      <div className="flex space-x-2 items-center dark:text-neutral-200 ">
                        <i className="fas fa-money-bill fa-lg fa-fw"></i>
                        <h5 className="font-[500] text-[1.4rem] dark:text-brand-white  ">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] text-justify lg:pr-6 ">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[60vh] ">
              <div className=" space-y-5 ">
                <div className="">
                  <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                    Advantages
                  </p>
                  <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                    Why choose Pennywise?
                  </h1>
                </div>

                <div className="space-y-4 ">
                  <div className="flex space-x-2 items-center dark:text-brand-white">
                    <span className="h-[2rem] w-[2rem] border border-black dark:border-brand-white rounded-[50%] flex justify-center items-center ">
                      <i className="fas fa-bell fa-sm fa-fw"></i>
                    </span>
                    <h5 className="font-[500] text-[1.4rem]  ">
                      {why[0].title}
                    </h5>
                  </div>
                  <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] text-justify lg:pr-24 ">
                    {why[0].body}
                  </p>
                </div>
              </div>
              <div className="">
                <Image
                  src={`/assets/images/app_screenshots/7.png`}
                  alt="Customize"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className=" py-16 grid grid-cols-1 lg:grid-cols-2 place-items-center border-b dark:border-neutral-700 min-h-[60vh] ">
              <div className="">
                <Image
                  src={`/assets/images/app_screenshots/8.png`}
                  alt="Customize"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 ">
                <div className="flex space-x-2 items-center dark:text-brand-white">
                  <span className="h-[2rem] w-[2rem] border border-black dark:border-brand-white rounded-[50%] flex justify-center items-center ">
                    <i className="fas fa-star fa-sm fa-fw"></i>
                  </span>
                  <h5 className="font-[500] text-[1.4rem] ">{why[1].title}</h5>
                </div>
                <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] text-justify lg:pr-24 ">
                  {why[1].body}
                </p>
              </div>
            </div>
            {/* 
            <div className="py-16 ">
              <div className="text-center">
                <p className="uppercase text-[1.125rem] !tracking-widest text-brand-green dark:text-neutral-400 ">
                  Testimonials
                </p>
                <h1 className="font-[800] text-[40px] sm:text-[46px] leading-[48px] w-[24rem] mx-auto text-brand-blue dark:text-brand-green ">
                  What Our Users Say About Us?
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center min-h-[40vh]  ">
                <div className="md:flex justify-center items-center py-8 relative hidden  w-[500px] h-[500px] ">
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  ">
                    <div className=" bg-brand-blue w-[160px] h-[160px] flex items-center justify-center rounded-[50%]">
                      <Image
                        src={`/assets/images/placeholders/Memoji-8.png`}
                        alt="Icons"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  {[1, 2, 3, 4].map((item, index) => (
                    <div
                      className={`bg-brand-blue h-20 w-20 border border-brand-blue rounded-[50%] absolute flex-shrink-0 ${
                        index === 0
                          ? "top-28 left-20"
                          : index == 3
                          ? "bottom-28 right-20"
                          : index === 1
                          ? " top-20 right-28"
                          : "bottom-20 left-28"
                      } `}
                      key={index}
                    ></div>
                  ))}
                </div>
                <div className="w-full ">
                  <div className="space-y-6 w-[24rem] mx-auto ">
                    <h5 className="font-[500] text-[1.3rem] dark:text-brand-white ">
                      The Best Financial Accounting App Ever!
                    </h5>

                    <p className="text-[#6c6c6c] dark:text-neutral-400 text-[1rem] ">
                      It is your money and you should be able to manage it the
                      way you want. With Pennywise, you can customize everything
                      from budgets to categories to accounts. You can also
                      create your own custom categories and budgets.
                    </p>

                    <div className="flex items-center space-x-3">
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <button
                          className="bg-brand-blue h-6 w-6 rounded-[50%]"
                          key={index}
                        >
                          <span className=" "></span>
                        </button>
                      ))}
                    </div>

                    <p className="text-[.9375rem] font-[500] text-brand-green  ">
                      Toluwalope Akinkunmi
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

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
                      className={`"space-y-2 mx-auto p-6 rounded-lg ${
                        index === 0 || index === 3 || index === 4
                          ? "md:bg-brand-blue text-brand-white  "
                          : " dark:text-brand-white "
                      }  `}
                      key={index}
                    >
                      <h5 className="font-[500] text-[1.3rem] line-clamp-1 hover:line-clamp-none ">
                        {item.question}
                      </h5>
                      <p className="text-[1rem] line-clamp-3 hover:line-clamp-none ">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              Test
            </div>

            {/* text-[#6c6c6c] dark:text-neutral-500 md:dark:bg-brand-white dark:text-brand-blue */}

            <div className="py-16 xl:w-[950px] mx-auto">
              <div className="bg-black  p-6 sm:p-0 sm:pl-8 overflow-hidden h-[30vh] w-full rounded-2xl flex items-center ">
                <div className="text-white w-[28rem] ">
                  <h3 className="text-[2.25rem] font-[600] ">
                    Get Started Today!
                  </h3>
                  {/* <p className="text-[#6c6c6c] dark:text-neutral-400">
                    We help you make the best financial decisions by providing
                    you with the right information and tools.
                  </p> */}
                  <div className="flex items-center space-x-4 mt-4">
                    <p className="text-brand-white text-lg font-[500] ">
                      Download Now
                    </p>
                    <button className=" text-brand-white h-[2.5rem] w-[2.5rem] rounded-[2.5rem] border flex justify-center items-center">
                      <i className="fab fa-apple fa-fw fa-lg "></i>
                    </button>
                    <button className=" text-brand-white h-[2.5rem] w-[2.5rem] rounded-[2.5rem] border flex justify-center items-center">
                      <i className="fab fa-google-play fa-fw fa-lg "></i>
                    </button>
                  </div>
                </div>
                <div className="hidden mx-auto sm:block relative ">
                  <Image
                    src={`/assets/images/app_screenshots/6.png`}
                    alt=""
                    width={500}
                    height={800}
                    // fill={true}
                    className=" mt-72 "
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </PageLayout>
      </div>
    </>
  );
}
