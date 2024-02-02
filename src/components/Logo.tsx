import React from "react";
import Image from "next/image";
import ColorModeToggle from "./ModeToggle";
import Link from "next/link";

type Props = {};

const Logo = ({}: Props) => {
  const { theme } = ColorModeToggle();
  const dark = "/Primary.svg";
  const light = "/logo.svg";
  return (
    <Link href={"/"}>
      <Image
        src={theme === "dark" ? dark : light}
        alt="logo"
        width={190}
        height={100}
      />
    </Link>
  );
};

export default Logo;
