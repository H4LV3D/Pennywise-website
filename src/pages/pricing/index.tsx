"use client";
import PageLayout from "@/layout/PageLayout";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Error() {
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
              It&#39;s free to get started, and we also have a premium plan for
              those who want to take their financial decisions to the next
              level.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:w-[850px] pt-10 ">
              <div className="border border-brand-green border-opacity-20 rounded-2xl min-h-[50vh] p-8 space-y-5 ">
                <p className="uppercase tracking-[0.25em] text-neutral-400 font-[500] ">
                  Free Tier
                </p>
                <h1 className="text-6xl font-[800] text-brand-blue dark:text-brand-white">
                  Free
                </h1>
                <p className=" text-neutral-400 font-[500] ">
                  Unlimited card connections!
                </p>
                <button className="dark:bg-brand-blue text-brand-white h-[3.5rem] w-full rounded-[0.5rem] font-[500] flex justify-center items-center space-x-2">
                  <span>Get Started - For Free</span>
                </button>
              </div>
              <div className="bg-brand-green border border-brand-green rounded-2xl "></div>
            </div>
          </div>
          <Footer />
        </PageLayout>
      </div>
    </>
  );
}
