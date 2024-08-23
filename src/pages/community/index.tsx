// "use client";
import PageLayout from "@/layout/PageLayout";
import React from "react";

type Props = {};

const index = (props: Props) => {
  const {} = props;

  const openTelegram = () => {
    window.open("https://t.me/pennywiseglobalcommunity", "_blank");
  };

  return (
    <>
      <PageLayout>
        <div className="py-12 space-y-2.5 ">
          <div className="flex flex-col justify-center max-w-lg mx-auto border p-6 rounded-2xl space-y-3 ">
            <h1 className="font-[600] text-3xl text-brand-blue dark:text-brand-white max-w-2xl ">
              Community
            </h1>

            <p className="text-[#646464] dark:text-brand-white  text-[1.075rem] leading-8 tracking-wide ">
              Join our community on Telegram to get the latest updates, share
              your thoughts, and connect with other members.
            </p>

            <button
              onClick={openTelegram}
              className="bg-brand-dark-blue dark:bg-brand-white text-white dark:text-black font-[600] text-[1.075rem] leading-8 tracking-wide px-6 py-3 rounded-lg md:w-1/2 ml-auto "
            >
              Join Community
            </button>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default index;
