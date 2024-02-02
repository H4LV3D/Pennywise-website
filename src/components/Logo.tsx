import React from "react";
import Image from "next/image";
import ColorModeToggle from "./ModeToggle";

type Props = {};

const Logo = ({}: Props) => {
  const { theme } = ColorModeToggle();
  const dark = "/Primary.svg";
  const light = "/logo.svg";
  return (
    <div>
      <Image
        src={theme === "dark" ? dark : light}
        alt="logo"
        width={190}
        height={100}
      />
    </div>
  );
};

export default Logo;
