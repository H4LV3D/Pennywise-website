"use client";
import React from "react";
import Link from "next/link";
import BrandLogo from "./Logo";
import data from "@/data/index.json";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props = {};

const footerData = {
  about: [
    {
      title: "FAQ's",
      link: "",
    },
    {
      title: "Feedback",
      link: "",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      link: "terms-conditions",
    },
  ],
  resources: [
    {
      title: "Pricing",
      link: "",
    },

    {
      title: "Help Center",
      link: "",
    },
  ],
  pages: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ],
};

const additionalPages = [
  {
    title: "Community",
    link: "/community",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms-conditions",
  },
];

function Footer({}: Props) {
  const { socials } = data;
  const date = new Date().getFullYear();

  const path = usePathname();
  return (
    <>
      <div className="w-full overflow-x-hidden font-raleway bg-brand-white dark:bg-[#000B17] dark:text-neutral-400 py-12 border-t border-neutral-200 dark:border-neutral-800 lg:border-none ">
        <div className="px-6 md:px-0 md:container mx-auto xl:w-[1250px]">
          <div className="md:flex flex-row lg:grid sm:grid-cols-2 mb-6 md:mb-8 ">
            <div className="w-full sm:w-1/3 lg:w-full mb-4 ">
              <span className="hidden dark:block ">
                <BrandLogo />
              </span>
              <Image
                src={`/assets/images/logo/monochrome.svg`}
                width={180}
                height={60}
                alt=""
                priority={true}
              />

              <p
                data-aos="fade-right"
                className="text-[.9375rem] font-[400] sm:text-base !leading-6 md:!leading-7 mt-4 text-justify sm:hidden lg:block max-w-xs "
              >
                We help you make the best financial decisions by providing you
                with the right information and tools. We are your one stop shop
                for all your financial needs.
              </p>
              {/* <div className="mt-4">
                <a
                  href="mailto:hello@iampennywise.com"
                  data-aos="fade-right"
                  target="_blank"
                  className="text-base font-[400] sm:text-base lg:text-base hover:text-brand-white flex items-center text-brand-light-blue dark:text-brand-green space-x-2 "
                >
                  <i className="fas fa-envelope fa-fw fa-md"></i>
                  <span>hello@iampennywise.com</span>
                </a>
              </div> */}
            </div>

            <div className="hidden w-full md:w-2/3 lg:w-full max-w-md sm:grid grid-cols-3 sm:grid-cols-3 gap-4">
              <div className="flex flex-col ">
                <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                  Resource
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.resources.map((item) => (
                    <Link href={item.link} shallow={true} key={item.title}>
                      <p className="font-raleway font-normal text-sm md:text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                  Pages
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.pages.map((item) => (
                    <Link href={item.link} shallow={true} key={item.title}>
                      <p className="font-raleway font-normal text-sm md:text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                  Company
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerData.about.map((item) => (
                    <Link href={item.link} shallow={true} key={item.title}>
                      <p className="font-raleway font-normal text-sm md:text-base text-neutral-600 dark:text-neutral-400 cursor-pointer hover:underline">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className=" sm:hidden  ">
              {/* <h3 className="font-raleway font-[500] text-base md:text-lg text-black dark:text-neutral-400 mb-2 md:mb-4">
                Pages
              </h3> */}
              <div className="flex flex-wrap space-x-3 ">
                {[...footerData.pages, ...additionalPages].map((item) => (
                  <Link href={item.link} shallow={true} key={item.title}>
                    <button
                      className={`font-raleway font-[500] text-sm md:text-base ${
                        path === item.link
                          ? "bg-brand-blue text-brand-white dark:bg-brand-green dark:text-brand-blue    "
                          : "text-brand-blue border border-brand-blue dark:border-brand-green dark:text-brand-green"
                      }  cursor-pointer  py-2 px-5 border border-brand-blue h-10 rounded-full mb-3.5 `}
                    >
                      {item.title}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <hr className="mb-4 dark:border-neutral-700" />

          <div className="flex items-center justify-between md:grid grid-cols-1 sm:grid-cols-2 py-2 mt-4">
            <div className="flex items-center font-raleway font-normal sm:text-base text-sm text-neutral-600 dark:text-neutral-400 space-x-4 md:mb-0">
              <span className=" ">All rights reserved.</span>
              <span className="font-number ">© {date} </span>
            </div>

            <div className="flex space-x-2 items-center md:justify-end">
              {socials.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className=" rounded-md hover:border-black dark:hover:border-white"
                >
                  <div className="group relative font-raleway font-normal cursor-pointer dark:text-white text-black">
                    <i className={`${item.icon} fa-xl fa-fw`}></i>
                    <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 top-full -left-1/2 px-4 pointer-events-none">
                      {item.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
