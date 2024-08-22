import React from "react";
import PageLayout from "@/layout/PageLayout";
import Head from "next/head";
import data from "@/data/index.json";
import Image from "next/image";
import WaitlistForm from "@/components/forms/Waitlist";

export default function About() {
  const { team } = data;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
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
      {isModalOpen && <WaitlistForm closeModal={setIsModalOpen} />}
      <PageLayout>
        <>
          <div className="mt-[1rem] md:mt-0 py-20 px-0 sm:px-12 grid grid-cols-1 lg:grid-cols-2 lg:place-items-center  border-brand-green border-opacity-40 rounded-xl min-h-[60vh] ">
            <div className="space-y-3 w-full">
              <h1 className="text-5xl md:text-6xl font-bold text-brand-blue dark:text-brand-white">
                About <br /> Pennywise
              </h1>
              <p className="text-[.9375rem] md:text-[1.125rem] text-[#6464646] dark:text-neutral-400 max-w-md tracking-wider ">
                Set goals, receive reminders, and take control of your financial
                future starting today! Every penny counts.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  className="bg-brand-blue  text-white h-[3.5rem] px-8 md:px-12 rounded-[0.5rem] font-[500] flex items-center space-x-2"
                >
                  <span className="">Get Started Today</span>
                  <i className="fas fa-long-arrow-right fa-fw fa-lg text-white "></i>
                </button>
              </div>
            </div>
            <div className="hidden md:block w-full h-full min-h-[35rem] max-w-lg bg-opacity-40 rounded-xl relative overflow-hidden  ">
              <Image
                src="/assets/images/about_pennywise.png"
                fill={true}
                alt="Pennywise About Image - Save the pennies"
              />
            </div>
          </div>

          <div className="py-10 md:py-20 lg:w-[950px] mx-auto place-items-center min-h-[60vh] ">
            <div className="md:text-center">
              <p className="uppercase text-brand-light-blue text-base md:text-[1.125rem] !tracking-widest dark:text-neutral-400 ">
                Our story
              </p>
              <h1 className="font-[600] md:font-[800] text-[40px] md:text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                Who Are We?
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 my-6 md:my-10 ">
              <p className=" text-[#646464] dark:text-brand-white md:p-8 text-[1.05rem] text-justify !leading-7 tracking-wide  ">
                Pennywise is a personal finance app that{" "}
                <span className="text-brand-light-blue ">
                  {" "}
                  helps users save money and track expenses using artificial
                  intelligence
                </span>
                . Pennywise’s mission is to empower individuals to
                <span className="text-brand-light-blue ">
                  {" "}
                  take control of their finances and achieve their savings goals
                </span>{" "}
                . Drawing from their expertise in finance and technology, they
                developed an innovative app that{" "}
                <span className="text-brand-light-blue ">
                  leverages artificial intelligence
                </span>{" "}
                to provide personalized financial insights and recommendations
                to users.
              </p>
              <p className="text-[#646464] dark:text-brand-white md:p-8 text-[1.05rem] text-justify !leading-7 tracking-wide ">
                As we evolve, we look beyond just a finance app to becoming a
                community allowing users share success stories, tips, and
                strategies for saving money and managing expenses effectively.
                Our team would regularly engage with the community, hosting
                webinars and Q&A sessions to help users make the most of the app
                and improve their financial capacity. We remain committed to
                helping people build better financial lives.
              </p>
            </div>
          </div>

          <div className="py-10 md:py-20 lg:w-[950px] mx-auto place-items-center md:min-h-[70vh] ">
            <div className="bg-brand-blue dark:bg-brand-green dark:bg-opacity-45 rounded-xl p-8 min-h-[45vh] grid place-items-center ">
              <div className="text-start md:text-center space-y-4 ">
                <p className="uppercase text-[1.75rem] font-[500] !tracking-widest text-brand-white ">
                  Mission & Vision
                </p>
                <p className="md:text-center md:mx-auto text-[1rem] tracking-wider leading-7 md:text-[1.125rem] font-[400] max-w-lg  text-brand-white ">
                  <span className="font-[500] text-brand-light-blue ">
                    Empowering Financial Freedom for Every Individual
                  </span>{" "}
                  by Revolutionizing personal finance and seamlessly integrating
                  technology with financial expertise.
                </p>

                <h4 className="font-[500] text-2xl leading-[60px] text-brand-white  ">
                  ~ Pennywise
                </h4>
              </div>
            </div>
          </div>

          <div className="py-20 w-full lg:w-[850px] mx-auto place-items-center min-h-[70vh] ">
            <div className="md:text-center">
              <p className="uppercase text-[1rem] md:text-[1.125rem] !tracking-widest text-brand-light-blue dark:text-neutral-400 ">
                Our Team
              </p>
              <h1 className="font-[600] md:font-[800] text-[40px] md:text-[46px] leading-[60px] text-brand-blue dark:text-brand-green  ">
                Members
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-6 md:my-10  ">
              {team.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg p-5 bg-brand-blue dark:bg-opacity-20 border dark:border-brand-green dark:border-opacity-20 flex flex-row md:flex-col items-center "
                >
                  <div className="w-24 md:w-full flex justify-center ">
                    <Image
                      src={`/assets/images/placeholders/Memoji-${item.icon}.png`}
                      width={200}
                      height={200}
                      alt={`Pennywise Team Member - ${item.name} Memoji`}
                      className="hidden md:block "
                    />
                    <Image
                      src={`/assets/images/placeholders/Memoji-${item.icon}.png`}
                      width={80}
                      height={80}
                      alt={`Pennywise Team Member - ${item.name} Memoji`}
                      className="md:hidden"
                    />
                  </div>
                  <div className="flex-shrink-0 ">
                    <h4 className="text-[1.125rem] text-brand-white font-[600] ">
                      {item.name}
                    </h4>
                    <p className="text-neutral-400 font-[500] md:text-center ">
                      {item.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </PageLayout>
    </>
  );
}
