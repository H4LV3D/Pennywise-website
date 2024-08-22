import React from "react";
import PageLayout from "@/layout/PageLayout";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <PageLayout>
        <div className=" py-10 md:py-16">
          <div className="space-y-2 max-w-lg ">
            <h1 className="font-[600] text-3xl sm:text-4xl md:text-5xl dark:text-brand-whitet-brand-blue dark:text-brand-white tracking-wider  ">
              Blogs
            </h1>
            <p className="dark:text-neutral-300 text-[.95rem] text-[#222] tracking-wider mt-0.5 ">
              Essential reads for your financial journey and personal growth.
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default index;
