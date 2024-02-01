import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  // const logo = localStorage.theme;
  const logo = "dark";
  const dark = "/Primary.svg";
  const light = "/logo.svg";
  return (
    <div>
      <Image
        src={logo === "dark" ? dark : light}
        alt="logo"
        width={190}
        height={100}
      />
    </div>
  );
};

export default Logo;
