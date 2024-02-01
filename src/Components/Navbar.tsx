// write a
"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "./Logo";
import Link from "next/link";

type Props = {
  nav?: boolean;
};

function Header({ nav }: Props) {
  const path = usePathname();

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "/shop" },
    { text: "Pricing", link: "/contact" },
    { text: "Features", link: "/contact" },
  ];
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHaveShadow = window.scrollY > 800;
      setHasShadow(shouldHaveShadow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `font-raleway flex items-center justify-between py-5 md:py-3 ${
    nav
      ? `lg:border-b border-neutral-50 dark:border-[#191919]`
      : "md:border-b border-neutral-100 dark:border-[#191919] sm:border-none"
  } ${hasShadow ? "shadow-sm border-gray-200" : ""}`;

  return (
    <div className="fixed top-0 left-0 w-full bg-[#fbfbfb] dark:bg-[#000B17] bg-opacity-75 z-20">
      <div className="px-6 lg:px-0 md:container mx-auto xl:w-[1250px]">
        <div className={`${headerClasses}`}>
          <div className="flex items-center space-x-6 text-black dark:text-neutral-400">
            <div className="hidden lg:block group relative dark:border-gray-600 dark:text-neutral-300 cursor-pointer">
              <BrandLogo />
              <p className="opacity-0 bg-black dark:bg-neutral-900 dark:text-neutral-400 text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-4 mt-4 px-4 pointer-events-none">
                Home
              </p>
            </div>
            <div className="lg:hidden">
              <button className="">
                <i className="fas fa-bars fa-fw fa-lg text-black dark:text-neutral-400"></i>
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-5">
                {navItems.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    data-aos="fade-down"
                    data-aos-delay={index * 100}
                    className={`w-full p-2  ${
                      path === item.link
                        ? "text-lg text-brand-green font-[600] dark:text-brand-green "
                        : "text-lg text-neutral-400 dark:hover:text-white  hover:text-black "
                    }  
                       `}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            data-aos="fade-down"
            data-aos-delay={1200}
            className="h-[3.5rem] px-8 rounded-[0.5rem] font-[500] bg-brand-blue text-white hover:bg-[#191919] transition-all duration-300 ease-in-out"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
