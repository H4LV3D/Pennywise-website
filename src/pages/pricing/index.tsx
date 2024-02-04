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
          <div className="flex flex-col items-center justify-center min-h-[75vh] py-2">
            <h1 className="text-6xl font-bold text-center text-brand-blue dark:text-brand-white">
              Pricing plans.
            </h1>
            <p className="mt-3 text-[1.25rem] text-center text-[#6464646] dark:text-neutral-400 max-w-[30rem] ">
              {/* It&#39;s free to get started, and we also have a premium plan for
              those who want to take their financial decisions to the next
              level. */}
              It&#39;s a one size fits all plan, and it&#39;s just $1 per month.
            </p>
            <Link href="/">
              <button className="dark:bg-brand-blue text-brand-white h-[3.5rem] px-8 rounded-[0.5rem] font-[500] flex items-center space-x-2 mt-3 ">
                <span>Pay Now !</span>
                <i className="fas fa-chevron-right fa-fw fa-md text-white "></i>
              </button>
            </Link>
          </div>
          <Footer />
        </PageLayout>
      </div>
    </>
  );
}
