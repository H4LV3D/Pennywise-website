"use client";
import PageLayout from "@/layout/PageLayout";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import data from "@/data/index.json";
import Image from "next/image";

export default function About() {
  const { team } = data;
  return (
    <>
      <Head>
        <title>Pennywise | About </title>
        <meta
          name="description"
          content="Pennywise is a financial accounting app that helps you make the best financial decisions by providing you with the right information and tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={` min-h-screen bg-[#fbfbfb] dark:bg-[#000B17] pt-20 `}>
        <PageLayout>
          <Navbar />
          <div className="">
            <div className="py-20 px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 place-items-center border  border-brand-green border-opacity-40 rounded-xl min-h-[75vh]">
              <div className="space-y-3">
                <h1 className="text-6xl font-bold text-brand-blue dark:text-brand-white">
                  About <br /> Pennywise
                </h1>
                <p className="text-[1.25rem] text-[#6464646] dark:text-neutral-400 max-w-md ">
                  Set goals, receive reminders, and take control of your
                  financial future starting today! Every penny counts.
                </p>
                <div className="pt-6">
                  <button className="bg-brand-blue  text-white h-[3.5rem] px-12 rounded-[0.5rem] font-[500] flex items-center space-x-2">
                    <span className="">Get Started Today</span>
                    <i className="fas fa-long-arrow-right fa-fw fa-lg text-white "></i>
                  </button>
                </div>
              </div>
              <div className=" w-full h-full bg-brand-blue bg-opacity-40 rounded-xl "></div>
            </div>

            <div className="py-20 lg:w-[950px] mx-auto place-items-center min-h-[70vh] ">
              <div className="text-center">
                <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                  Our story
                </p>
                <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                  Who Are We ?
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-x-2 gap-neutral-500 my-10 ">
                <p className="text-brand-white p-8 text-[1.05rem] text-justify !leading-7 tracking-wide font-urbanist ">
                  Pennywise is a personal finance app that{" "}
                  <span className="text-brand-light-blue ">
                    {" "}
                    helps users save money and track expenses using artificial
                    intelligence
                  </span>
                  . Pennywise’s mission is to empower individuals to
                  <span className="text-brand-light-blue ">
                    {" "}
                    take control of their finances and achieve their savings
                    goals
                  </span>{" "}
                  . Drawing from their expertise in finance and technology, they
                  developed an innovative app that{" "}
                  <span className="text-brand-light-blue ">
                    leverages artificial intelligence
                  </span>{" "}
                  to provide personalized financial insights and recommendations
                  to users.
                </p>
                <p className="text-brand-white p-8 text-[1.05rem] text-justify !leading-7 tracking-wide font-urbanist ">
                  As we evolve, we look beyond just a finance app to becoming a
                  community allowing users share success stories, tips, and
                  strategies for saving money and managing expenses effectively.
                  Our team would regularly engage with the community, hosting
                  webinars and Q&A sessions to help users make the most of the
                  app and improve their financial capacity. We remain committed
                  to helping people build better financial lives.
                </p>
              </div>
            </div>

            <div className="py-20 lg:w-[950px] mx-auto place-items-center min-h-[70vh] ">
              <div className=" bg-brand-green bg-opacity-45 rounded-xl p-8 min-h-[45vh] grid place-items-center ">
                <div className="text-center space-y-4 ">
                  <p className="uppercase text-[1.75rem] font-[400] !tracking-widest text-brand-white ">
                    Mission & Vision
                  </p>
                  <p className="text-center mx-auto text-[1.125rem] font-[400] max-w-lg  text-brand-white ">
                    <span className="font-[500] ">
                      Empowering Financial Freedom for Every Individual
                    </span>{" "}
                    by Revolutionizingg personal finance and seamlessly
                    integrating technology with financial expertise.
                  </p>

                  <h4 className="font-[600] text-2xl leading-[60px] text-brand-white  ">
                    ~ Pennywise
                  </h4>
                </div>
              </div>
            </div>

            <div className="py-20  place-items-center min-h-[70vh] ">
              <div className="">
                <p className="uppercase text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                  Our Team
                </p>
                <h1 className="font-[800] text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                  Members
                </h1>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 ">
                {team.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-5 bg-brand-blue bg-opacity-20 border border-brand-green border-opacity-20 "
                  >
                    <div className="w-full flex justify-center ">
                      <Image
                        src={`/assets/images/placeholders/Memoji-${item.icon}.png`}
                        width={200}
                        height={200}
                        alt="Memoji"
                      />
                    </div>
                    <h4 className="text-[1.125rem] text-brand-white font-[600] ">
                      {item.name}
                    </h4>
                    <p className="text-neutral-500 font-[500] ">
                      {item.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </PageLayout>
      </div>
    </>
  );
}
