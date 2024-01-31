import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={190} height={100} />
    </div>
  );
};

export default Logo;
