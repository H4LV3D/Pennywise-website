import React from "react";
import Image from "next/image";
import Link from "next/link";
import ColorModeToggle from "./ModeToggle";

type Props = {};

const Logo = ({}: Props) => {
  const { theme } = ColorModeToggle();
  // const light = "/logo.svg";
  const dark = "/assets/images/logo/Primary.svg";
  return (
    <Link href={"/"}>
      <Image src={dark} alt="Pennywise Logo" width={190} height={100} />
    </Link>
  );
};

export default Logo;
