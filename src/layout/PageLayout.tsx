import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthProvider: React.FC<Props> = ({ className, children }) => {
  return (
    <>
      <Navbar />
      <div
        className={`${className} max-w-[84rem] md:container xl:w-[1250px] mx-auto px-6 sm:px-8 md:px-0 mt-[5rem] bg-brand-white dark:bg-[#000B17] min-h-[80vh] overflow-x-hidden`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MaxWidthProvider;
