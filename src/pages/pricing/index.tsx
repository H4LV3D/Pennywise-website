"use client";
import PageLayout from "@/layout/PageLayout";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Head from "next/head";

export default function Pricing() {
  const features = [
    "Unlimited card connections",
    "View your financial data",
    "Receive reminders",
    "Set financial goals",
  ];

  const basicFeatures = [
    "Basic sign up and login access",
    "access to savings calculator",
    "access to budget calculator",
    "access to loan calculator",
  ];
  return (
    <>
      <Head>
        <title>Pennywise | Pricing </title>
        <meta
          name="description"
          content="Pennywise is a financial accounting app that helps you make the best financial decisions by providing you with the right information and tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={` min-h-screen bg-[#fbfbfb] dark:bg-[#000B17] pt-20 `}>
        <PageLayout>
          <Navbar />
          <div className="flex flex-col items-center justify-center min-h-[75vh] py-20 space-y-5 ">
            <h5 className="text-lg uppercase tracking-widest font-[400] text-center text-brand-blue dark:text-brand-white">
              Pricing plans
            </h5>
            <h1 className="text-6xl font-bold text-center text-brand-blue dark:text-brand-white">
              Simple and Flexible payments!
            </h1>
            <p className="mt-3 text-[1rem] text-center text-[#6464646] dark:text-neutral-400 max-w-lg ">
              It&#39;s free to get started as well as a premium plan for those
              who want to take their financial decisions to the next level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:w-[850px] pt-10 ">
              <div className="border border-brand-green border-opacity-20 hover:border-opacity-100 w-full rounded-2xl min-h-[50vh] p-8 space-y-5 ">
                <p className="uppercase tracking-[0.15em] text-neutral-400 font-[500] ">
                  Basic Tier
                </p>
                <div className="">
                  <h1 className="text-6xl font-[800] text-brand-blue dark:text-brand-white">
                    Free
                  </h1>
                  <p className=" text-neutral-400 ">
                    Unlimited card connections!
                  </p>
                </div>
                <button className="dark:bg-brand-blue text-brand-white h-[3.5rem] w-full rounded-[0.5rem] font-[500] flex justify-center items-center space-x-2">
                  <span>Get Started - For Free</span>
                </button>
                <div className="grid grid-cols-1 gap-y-3.5 pt-5 ">
                  {basicFeatures.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-brand-white "
                    >
                      <i className="fas fa-check fa-md fa-fw "></i>
                      <p className="text-[.9375rem] font-[500] ">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-green border border-brand-green rounded-2xl min-h-[50vh] p-8 w-full space-y-5 ">
                <p className="uppercase tracking-[0.15em] text-brand-blue text-opacity-50 font-[500] ">
                  Premium Tier
                </p>
                <div className="">
                  <h1 className="text-6xl font-[800] text-brand-blue">$1</h1>
                  <p className="font-[400] text-brand-blue ">
                    Multiple Account Connections.
                  </p>
                </div>
                <button className="dark:bg-brand-blue text-brand-white h-[3.5rem] w-full rounded-[0.5rem] font-[500] flex justify-center items-center space-x-2">
                  <span>Get Started - For $1</span>
                </button>
                <div className="grid grid-cols-1 gap-y-3.5 pt-5 ">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-brand-blue "
                    >
                      <i className="fas fa-check fa-md fa-fw "></i>
                      <p className="text-[.9375rem] font-[500] ">{item}</p>
                    </div>
                  ))}
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
