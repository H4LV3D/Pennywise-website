import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthProvider: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`${className} max-w-[84rem] md:container xl:w-[1250px] mx-auto px-6 sm:px-8 md:px-0 `}
    >
      {children}
    </div>
  );
};

export default MaxWidthProvider;
